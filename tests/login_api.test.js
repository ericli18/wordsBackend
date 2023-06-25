const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const Word = require('../models/word');
const api = supertest(app);