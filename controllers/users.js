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

usersRouter.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).populate('words', {
      word: 1,
      definition: 1,
      etymology: 1,
      likes: 1,
    });

    if (user) {
      res.json(user);
    } else {
      res.status(404).end();
    }
  } catch (error) {
    next(error);
  }
});

usersRouter.post('/', async (req, res) => {
  console.log('Received registration request for:', req.body);

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

  try {
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.error('Error saving user:', error); // Log the error
    res.status(400).json({ error: 'Something went wrong' });
  }
});

//the frontend must use ids to add words to the user, this will parse it
usersRouter.put('/:id', async (req, res) => {
  const body = req.body._doc || req.body;

  newWords = body.words.map((word) => {
    return word.id ? word.id : word;
  });

  const user = {
    username: body.username,
    passwordHash: body.passwordHash,
    words: newWords,
  };

  const updatedUser = await User.findByIdAndUpdate(req.params.id, user, {
    new: true,
  }).populate('words', {
    word: 1,
    definition: 1,
    etymology: 1,
    likes: 1,
  });
  res.json(updatedUser);
});

usersRouter.delete('/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    await User.findByIdAndRemove(req.params.id);
    res.status(204).end();
  } else {
    res.status(404).end();
  }
});

module.exports = usersRouter;
