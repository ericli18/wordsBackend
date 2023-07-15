const express = require('express');
const wordsRouter = express.Router();
const Word = require('../models/word');
//mongodb is draydere

wordsRouter.get('/', (req, res) => {
  Word.find({}).then((words) => {
    res.json(words);
  });
});

wordsRouter.get('/:id', async (req, res, next) => {
  try {
    const word = await Word.findById(req.params.id);
    if (word) {
      res.json(word);
    } else {
      res.status(404).end();
    }
  } catch (error) {
    next(error);
  }
});

wordsRouter.post('/', async (req, res) => {
  const body = req.body;
  if (!body.word || !body.definition || !body.etymology) {
    return res.status(400).json({
      error: 'content missing',
    });
  }
  const word = new Word({
    word: body.word,
    definition: body.definition,
    etymology: body.etymology,
    accessDate: body.accessDate? body.accessDate : 0,
    likes: body.likes? body.likes : 0,
  });

  const savedWord = await word.save();
  res.status(201).json(savedWord);
});

wordsRouter.put('/:id', async (req, res) => {
  const body = req.body;
  const word = {
    word: body.word,
    definition: body.definition,
    etymology: body.etymology,
    accessDate: body.accessDate,
    likes: body.likes,
  };

  const updatedWord = await Word.findByIdAndUpdate(req.params.id, word, { new: true });
  res.json(updatedWord);
});

module.exports = wordsRouter;
