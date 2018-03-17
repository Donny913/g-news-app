const initErrorHandler = require('./initErrorHandler');
const initLogger = require('./initLogger');
const initParsers = require('./initParsers');
const initRoutes = require('./initRoutes');
const allowCORS = require('./allowCORS');
const initStatic = require('./initStatic');

module.exports = {
  initLogger,
  initParsers,
  initRoutes,
  allowCORS,
  initStatic,
  initErrorHandler,
};
