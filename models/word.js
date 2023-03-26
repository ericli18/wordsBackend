const mongoose = require('mongoose');

const url = "mongodb+srv://draydere:eZmcD365ZmotTDOo@sorrowwords.fw97izz.mongodb.net/?retryWrites=true&w=majority";
mongoose.set('strictQuery', false);
mongoose.connect(url).then(result => {
    console.log('connected to MongoDB');
}).catch(error => {
    console.log('error connecting to MongoDB:', error.message);
});

const wordSchema = new mongoose.Schema({
    word: String,
    definition: String,
    etymology: String,
});

wordSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

module.exports = mongoose.model('Word', wordSchema);