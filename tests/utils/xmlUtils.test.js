const fs = require('fs');
const path = require('path');

let xmlExample;

const xmlUtils = require('../../utils/xmlUtils');
const { parseXml } = xmlUtils;

const parsedXmlExample = {
  note: {
    to: ['Tove'],
    from: ['Jani'],
    heading: ['Reminder'],
    body: ["Don't forget me this weekend!"]
  }
};

test('xml to json', done => {
  fs.readFile(path.join(__dirname, './example.xml'), 'utf8', (err, data) => {
    if (err) console.log(err);
    if (data) {
      xmlExample = data;
      return parseXml(xmlExample).then(data => {
        expect(data).toEqual(parsedXmlExample);
        done();
      });
    }
  });
});
