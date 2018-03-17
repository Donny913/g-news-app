const parseString = require('xml2js').parseString;

const parseXml = xml => {
  return new Promise((resolve, reject) => {
    parseString(xml, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    })
  });
}

module.exports = {
  parseXml
};