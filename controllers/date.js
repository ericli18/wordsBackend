const dateRouter = require('express').Router();
const dayjs = require('dayjs');

dateRouter.get('/', (req, res) => {
  res.json({ date: dayjs().format() });
});

module.exports = dateRouter;