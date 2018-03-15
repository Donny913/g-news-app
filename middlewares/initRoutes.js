const api = require('../routes/api/api');
const path = require('path');
const https = require('https');

const initRoutes = app => {
  app.use(`/`, (req, res) => {
    const url = 'https://news.yandex.ru/politics.rss';
    // const url = 'https://jsonplaceholder.typicode.com/posts/1';
    https.get(url, resp => {
      let resultString = '';
      resp.on('data', data => {
        resultString += data;
        // process.stdout.write(data);
      });
      resp.on('end', () => {
        debugger;
        // const result = JSON.parse(resultString);
        const result = new DOMParser().parseFromString(resultString, 'text/xml');
        debugger;
      })
    }).on('error', err => {
      console.log(err);
    }).end();
    res.end();
  });

  app.use(`/api`, api);
};

module.exports = initRoutes;
