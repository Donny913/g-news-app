const axios = require('axios');

const get = url => {
  return axios
    .get(url)
    .then(data => {
      return data;
    })
    .catch(err => {
      console.error(err);
    });
};

module.exports = {
  get
};
