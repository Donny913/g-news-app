const initErrorHandler = require('./initErrorHandler');
const initLogger = require('./initLogger');
const initParsers = require('./initParsers');
const initRoutes = require('./initRoutes');
const allowCORS = require('./allowCORS');
const initReload = require('./initReload');

module.exports = {
  initErrorHandler,
  initLogger,
  initParsers,
  initRoutes,
  allowCORS,
  initReload
};
