require('dotenv').config();

let MONGODB_URI = process.env.MONGODB_URI;
if (process.env.NODE_ENV === 'test') {
  MONGODB_URI = process.env.TEST_MONGODB_URI;
}
if (process.env.NODE_ENV === 'development') {
  console.log('development');
  MONGODB_URI = process.env.DEV_MONGODB_URI;
}
const port = process.env.PORT;

module.exports = {
  MONGODB_URI,
  port,
};
