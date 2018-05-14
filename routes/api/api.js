const router = require('express').Router();

const httpsGet = require('../../utils/httpUtils').httpsGet;
const parseXml = require('../../utils/xmlUtils').parseXml;

const urls = {
  politics: 'https://news.yandex.ru/politics.rss',
  sport: 'https://news.yandex.ru/sport.rss',
  crime: 'https://news.yandex.ru/incident.rss'
};

const getNews = async topic => {
  try {
    const xmlData = await httpsGet(urls[topic]);
    const jsData = await parseXml(xmlData);
    return {
      type: 'success',
      data: {
        news: jsData.rss.channel[0].item
      }
    }
  } catch (error) {
    return {
      type: 'error',
      message: error.message,
      httpStatus: error.httpStatus,
    }
  }
};

router.get('/get_news', async (req, res) => {
  let result;
  switch (req.query.topic) {
    case 'politics':
      result = await getNews('politics');
      break;
    case 'sport':
      result = await getNews('sport');
      break;
    case 'crime':
      result = await getNews('crime');
      break;
    default:
      break;
  }
  if (result.type === 'success') {
    res.status(200).json(result.data);
  }
  res.status(result.httpStatus || 500).json({ error: result.message || 'error in api handler' });
});

module.exports = router;