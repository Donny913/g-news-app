const path = require('path');
const getNews = require('../../routes/api/api').getNews;
const httpUtils = require('../../utils/httpUtils');
const jsUtils = require('../../utils/jsUtils');

httpUtils.get = jest.fn(async () => {
  const xmlData = await jsUtils.readFile(
    path.join(__dirname, './sportXmlExample.xml'),
    'utf8'
  );
  return {
    data: xmlData
  };
});

// test('httpGet is mocked', async () => {
//   const result = await httpUtils.get();
//   expect(result).toEqual('ds');
// });

test('getNews returns jsObject with news', async () => {
  const getNewsResult = await getNews('sport');

  expect(Object.keys(getNewsResult)).toEqual(['type', 'news']);
});
