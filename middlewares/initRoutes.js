const api = require('../routes/api/api');
const path = require('path');

const initRoutes = app => {
  app.use(`/test`, (req, res) => {
    res.send('hello world');
  });

  app.use(`/api`, api);
};

module.exports = initRoutes;
