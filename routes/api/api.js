const router = require('express').Router();

const axios = require('../../utils/httpUtils');
const parseXml = require('../../utils/xmlUtils').parseXml;
const getNewsAudioSrc = require('../../utils/audioUtils').getNewsAudioSrc;

const urls = {
  politics: 'https://news.yandex.ru/politics.rss',
  sport: 'https://news.yandex.ru/sport.rss',
  crime: 'https://news.yandex.ru/incident.rss'
};

const sendResponse = (result, res) => {
  if (result.type === 'success') {
    res.status(200).json(result);
  } else {
    res.status(result.status || 500).json(result);
  }
};

const getNews = async topic => {
  try {
    const xml = await axios.get(urls[topic]);
    const jsData = await parseXml(xml.data);
    return {
      type: 'success',
      news: jsData.rss.channel[0].item
    };
  } catch (error) {
    return {
      type: 'error',
      message: error.message,
      status: error.httpStatus
    };
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
  sendResponse(result, res);
});

router.get('/get_audio', async (req, res) => {
  const text = req.query.text;

  let result;

  try {
    fileName = await getNewsAudioSrc(text);
    result = { type: 'success', fileName };
  } catch (error) {
    result = {
      type: 'error',
      message: error.message,
      status: error.status
    };
  }

  sendResponse(result, res);
});

module.exports = router;
