const express = require('express');
const http = require('http');
const config = require('../config/stubsConfig');
const {
  initErrorHandler,
  initLogger,
  initParsers,
  initRoutes,
  allowCORS
} = require('./middlewares/index');

const app = express();

initLogger(app);
initParsers(app);
allowCORS(app);
initRoutes(app);
initErrorHandler(app);

const runStubsServer = () => {
  const { port } = config;
  const server = http.createServer(app);
  server.listen(port);
};

runStubsServer();
module.exports = runStubsServer;
