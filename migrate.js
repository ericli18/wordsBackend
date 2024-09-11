const mongoose = require('mongoose');
const Word = require('./models/word');
require('dotenv').config();

const sourceURI = process.env.MONGODB_URI;
const targetURI = process.env.NEW_URI;

console.log('sourceURI', sourceURI);
console.log('targetURI', targetURI);
mongoose.connect(sourceURI);

const wordSchema = new mongoose.Schema({
  word: String,
  definition: String,
  etymology: String,
  accessDate: Number,
  likes: Number,
});

const targetConnection = mongoose.createConnection(targetURI);
const TargetWord = targetConnection.model('Word', wordSchema);

const migrate = async () => {
  let count = 0;
  try {
    const words = await Word.find({});
    console.log(words.length);
    words.forEach(async (word) => {
      const newWord = new TargetWord({
        word: word.word.substring(2, word.word.length - 2),
        definition: word.definition.substring(2, word.definition.length - 2),
        etymology: word.etymology.substring(2, word.etymology.length - 2),
        accessDate: 0,
        likes: 0,
      });
      await newWord.save();
      count++;
      console.log('saved', count);
    });
  } catch (error) {
    console.log('Migration error', error);
  } finally {
    mongoose.connection.close();
    // targetConnection.close();
  }
};

migrate();
