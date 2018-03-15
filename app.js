const express = require('express');

const app = express();

const {
  initErrorHandler,
  initLogger,
  initParsers,
  initRoutes,
  allowCORS,
  initReload
} = require('./middlewares/index');

initLogger(app);
initParsers(app);
allowCORS(app);
initRoutes(app);
initErrorHandler(app);
// initReload(app);

module.exports = app;
