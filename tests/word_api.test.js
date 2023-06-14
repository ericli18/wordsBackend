const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const Word = require('../models/word');
const api = supertest(app);

const initialWords = [
  {
    word: 'test',
    definition: 'test',
    etymology: 'test',
  },
  {
    word: 'test2',
    definition: 'test2',
    etymology: 'test2',
  },
];

beforeEach(async () => {
  await Word.deleteMany({});
  await Word.insertMany(initialWords);
});

describe('when there are initially some words saved', () => {
  test('words are returned as json', async () => {
    await api
      .get('/api/words')
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });

  test('all words are returned', async () => {
    const response = await api.get('/api/words');

    expect(response.body.length).toBe(initialWords.length);
  });

  test('a specific word is within the returned words', async () => {
    const response = await api.get('/api/words');
    const words = response.body.map((r) => r.word);
    expect(words).toContain('test2');
  });
});

describe('viewing a specific word', () => {
  test('succeeds with a valid id', async () => {
    const response = await api.get('/api/words');
    const wordToView = response.body[0];
    const resultWord = await api
      .get(`/api/words/${wordToView.id}`)
      .expect(200)
      .expect('Content-Type', /application\/json/);
    expect(resultWord.body).toEqual(wordToView);
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});
