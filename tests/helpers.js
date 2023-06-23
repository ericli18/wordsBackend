const Word = require('../models/word');
const User = require('../models/user');

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

module.exports = {
  initialWords,
  initialUsers,
  nonExistingId,
  wordsInDb,
  usersInDb,
};
