const logger = require('./utils/logger');
const app = require('./app');
const config = require('./utils/config');

app.listen(config.port, () => {
  logger.info(`Server running on port ${config.port}`);
});
