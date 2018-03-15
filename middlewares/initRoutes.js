const api = require('../routes/api/api');
const path = require('path');

const initRoutes = app => {
  app.use(`/test`, (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
  });

  app.use(`/api`, api);
};

module.exports = initRoutes;
