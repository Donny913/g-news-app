const api = require('../routes/api/api');

// TODO remove after testing

const testApi = (req, res) => res.status(200).end('hello world');

const initRoutes = app => {
  app.use(`/api`, api);
  app.use(`/test`, testApi);
};

module.exports = initRoutes;
