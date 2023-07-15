const usersRouter = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const Word = require('../models/word');

usersRouter.get('/', async (req, res) => {
  const users = await User.find({}).populate('words', {
    word: 1,
    definition: 1,
    etymology: 1,
    likes: 1,
  });
  res.json(users);
});

usersRouter.post('/', async (req, res) => {
  const body = req.body;
  if (!body.username || !body.password) {
    return res.status(400).json({
      error: 'content missing',
    });
  }
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(body.password, saltRounds);

  const user = new User({
    username: body.username,
    passwordHash: passwordHash,
  });

  const savedUser = await user.save();
  res.status(201).json(savedUser);
});

usersRouter.put('/:id', async (req, res) => {
  const body = req.body._doc || req.body;

  const user = {
    username: body.username,
    passwordHash: body.passwordHash,
    words: body.words,
  };

  const updatedUser = await User.findByIdAndUpdate(req.params.id, user, {
    new: true,
  });
  res.json(updatedUser);
});

module.exports = usersRouter;
