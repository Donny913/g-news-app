const express = require('express');

const app = express();
const {
  initLogger,
  initParsers,
  allowCORS,
  initRoutes,
  initStatic,
  initErrorHandler,
} = require('./middlewares/index');

initLogger(app);
initParsers(app);
allowCORS(app);
initRoutes(app);
initStatic(app);
initErrorHandler(app);

module.exports = app;
