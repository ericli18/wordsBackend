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
    console.log(user);
    const result = await api
      .put(`/api/users/${decodedToken.id}`)
      .send(user)
      .expect(200);
    console.log(result.body);
    expect(result.body.words).toContain(wordToAdd);
  });
});
