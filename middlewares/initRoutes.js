const api = require('../routes/api/api');

const initRoutes = app => {
  app.use(`/api`, api);
};

module.exports = initRoutes;
