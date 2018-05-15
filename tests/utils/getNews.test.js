const fs = require('fs');
const path = require('path');

const parseXml = require('../../utils/xmlUtils').parseXml;
const httpGet = require('../../utils/httpUtils').get;

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
      return parseXml(data).then(data => {
        expect(data).toEqual(parsedXmlExample);
        done();
      });
    }
  });
});

let yandexNewsDataXml;

// const url = 'https://news.yandex.ru/politics.rss';
// const url = 'https://jsonplaceholder.typicode.com/posts/1';

// test('is yandex news alive', () => {
//   return httpGet(url).then(data => {
//     yandexNewsDataXml = data;
//     expect(typeof 'data').toBe('string');
//   });
// });

// test('is yandex news alive', async () => {
//   expect.assertions(1);
//   const yandexNewsDataXml = await httpGet(url);
//   expect(typeof yandexNewsDataXml).toBe('string');
// });

// const parsedDataExample = {
//   a: 'test'
// };

// test('is data from yandex in needed format', async () => {
//   expect.assertions(1);
//   const parsedYandexData = await parseXml(yandexNewsDataXml);
//   expect(Object.keys(parsedYandexData)).toEqual(Object.keys(parsedDataExample));
// });
