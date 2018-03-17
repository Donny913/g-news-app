const https = require('https');

const httpsGet = url => {
  return new Promise((resolve, reject) => {
    https.get(url, resp => {
      const statusCode = resp.statusCode;

      if (statusCode !== 200) {
        const err = new Error(`Request failed, status code - ${statusCode}`);
        err.httpStatus = statusCode;
        reject(err);
      }

      let resultString = '';
      resp.on('data', data => {
        resultString += data;
      });
      resp.on('end', () => {
        resolve(resultString);
      });
    }).on('error', err => {
      reject(err);
    });
  });
}

module.exports = {
  httpsGet
};