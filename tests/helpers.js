const Word = require('../models/word');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

const initialWords = [
  {
    word: 'test',
    definition: 'test',
    etymology: 'test',
    accessDate: 0,
    likes: 0,
  },
  {
    word: 'test2',
    definition: 'test2',
    etymology: 'test2',
    accessDate: 0,
    likes: 0,
  },
];

const initialUsers = [
  {
    username: 'test',
    password: 'test',
  },
  {
    username: 'test2',
    password: 'test2',
  },
];

const nonExistingId = async () => {
  const word = new Word({
    word: 'willremovethissoon',
    definition: 'willremovethissoon',
    etymology: 'willremovethissoon',
    accessDate: 0,
    likes: 0,
  });
  await word.save();
  await word.remove();

  return word._id.toString();
}

const wordsInDb = async () => {
  const words = await Word.find({});
  return words.map((word) => word.toJSON());
}

const usersInDb = async () => {
  const users = await User.find({});
  return users.map((user) => user.toJSON());
}

const invalidToken = async () => {
  const user = new User({
    username: 'invalid',
    password: 'invalid'
  })

  return jwt.sign(user.username, process.env.SECRET);
}

//only valid if database already has filled with initial users
const validToken = async () => {
  const username = initialUsers[0].username
  const user = await User.findOne({username});
  const userForToken = {
    username: user.username,
    id: user._id,
  };
  const token = jwt.sign(userForToken, process.env.SECRET);
  return token;
}

module.exports = {
  initialWords,
  initialUsers,
  nonExistingId,
  wordsInDb,
  usersInDb,
  invalidToken,
  validToken
};
