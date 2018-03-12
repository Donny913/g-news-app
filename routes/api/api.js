const router = require('express').Router();
const http = require('http');
const request = require('util').promisify(require('http').get);

router.get('/get_news', (req, res) => {
  // request('https://jsonplaceholder.typicode.com/posts/1').then(data => {
  //   debugger;
  // }).catch(err => {
  //   debugger;
  // })
  http.get('https://jsonplaceholder.typicode.com/posts/1', resp => {
    debugger;
  })
  res.end('well done');
});

module.exports = router;