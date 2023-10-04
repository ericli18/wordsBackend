const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./utils/config');
require('express-async-errors')

const wordRouter = require('./controllers/words');
const usersRouter = require('./controllers/users');
const loginRouter = require('./controllers/login');
const dateRouter = require('./controllers/date')
const middleware = require('./utils/middleware');


const mongoURL = config.MONGODB_URI;
mongoose.connect(mongoURL);
app.use(cors());
app.use(express.json());

app.use('/api/words', wordRouter);
app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);
app.use('/api/date', dateRouter);


app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
