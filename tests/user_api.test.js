const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const Word = require('../models/word');
const User = require('../models/user');
const api = supertest(app);
const helper = require('./helpers');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

beforeEach(async () => {
  await User.deleteMany({});
  await User.insertMany(helper.initialUsers);
});

describe('when there are initially some users saved', () => {
  test('users are returned as JSON', async () => {
    await api
      .get('/api/users')
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });

  test('all users are returned', async () => {
    const users = await api.get('/api/users');
    expect(users.body.length).toEqual(helper.initialUsers.length);
  });

  test('a specific user is within the returned users', async () => {
    const users = await api.get('/api/users');
    const usernames = users.body.map((user) => user.username);
    expect(usernames).toContain(helper.initialUsers[0].username);
  });

  test('a new user can be added', async () => {
    const userToAdd = {
      username: 'draydere',
      password: 'Wowza',
    };

    await api
      .post('/api/users')
      .send(userToAdd)
      .expect(201)
      .expect('Content-Type', /application\/json/);

    const users = await api.get('/api/users');
    const usernames = users.body.map((user) => user.username);
    expect(usernames).toHaveLength(helper.initialUsers.length + 1);
    expect(usernames).toContain(userToAdd.username);
  });

  test('a user with the same username returns error code 400', async () => {
    const userToAdd = {
      username: 'draydere',
      password: 'Wowza',
    };

    await api
      .post('/api/users')
      .send(userToAdd)
      .expect(201)
      .expect('Content-Type', /application\/json/);

    await api
      .post('/api/users')
      .send(userToAdd)
      .expect(400)
      .expect('Content-Type', /application\/json/);
  });
});

describe('addition of a liked word', () => {
  test('when the token is invalid, an invalid user is returned', async () => {
    const token = await helper.invalidToken();
    const user = jwt.verify(token, process.env.SECRET);
    expect(user).toEqual('invalid');
  });

  test('adding a liked word is successful', async () => {
    const token = await helper.validToken();
    const decodedToken = jwt.verify(token, process.env.SECRET);
    const user = await User.findById(decodedToken.id);
    const words = await api.get('/api/words');
    const wordToAdd = words.body[0].id;
    user.words = user.words.concat(wordToAdd);
    const result = await api
      .put(`/api/users/${decodedToken.id}`)
      .send(user)
      .expect(200);
    expect(helper.mapToIds(result.body.words)).toContain(wordToAdd);

    const newWordToAdd = words.body[1].id;
    user.words = user.words.concat(newWordToAdd);
    const newResult = await api
      .put(`/api/users/${decodedToken.id}`)
      .send(user)
      .expect(200);
    expect(helper.mapToIds(newResult.body.words)).toContain(newWordToAdd);
  });

  test('removing a liked word is successful', async () => {
    const token = await helper.validToken();
    const decodedToken = jwt.verify(token, process.env.SECRET);
    const user = await User.findById(decodedToken.id);
    const words = await api.get('/api/words');
    const wordToAdd = words.body[0].id;
    user.words = user.words.concat(wordToAdd);
    await api
      .put(`/api/users/${decodedToken.id}`)
      .send(user)
      .expect(200);
    
    const newUser = await User.findById(decodedToken.id);
    newUser.words = newUser.words.filter((word) => word.toString() !== wordToAdd);
    const result = await api
      .put(`/api/users/${decodedToken.id}`)
      .send(newUser)
      .expect(200);

    expect(helper.mapToIds(result.body.words)).not.toContain(wordToAdd);
  });
});
