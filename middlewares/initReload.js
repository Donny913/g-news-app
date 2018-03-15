const reload = require('reload');

const initReload = app => {
  if (process.env.NODE_ENV) {
    console.log('dd');
    reload(app);
  }
};

module.exports = initReload;
