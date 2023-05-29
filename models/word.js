const mongoose = require('mongoose');

const wordSchema = new mongoose.Schema({
  word: String,
  definition: String,
  etymology: String,
  acceessed: Number,
});

wordSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Word', wordSchema);
