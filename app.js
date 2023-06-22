const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const wordRouter = require('./controllers/words');
const config = require('./utils/config');
require('express-async-errors');

const mongoURL = config.MONGODB_URI;
mongoose.connect(mongoURL);
app.use(cors());
app.use(express.json());
app.use('/api/words', wordRouter);

module.exports = app;
