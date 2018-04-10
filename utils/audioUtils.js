const axios = require('axios');
const uniqid = require('uniqid');
const path = require('path');
const fs = require('fs');

const base_url = 'http://translate.google.com/translate_tts?';

config = {
  ie: 'UTF-8',
  client: 'tw-ob',
  tl: 'ru'
};

const parseURL = (path, text) => {
  Object.keys(config).forEach(attr => {
    path += attr + '=' + config[attr] + '&';
  });
  path += 'q=' + encodeURIComponent(text) + '&';
  path += 'textLen=' + text.length;
  console.log(path);
  return path;
};

const textToAudio = text => {
  return axios({
    headers: {
      'Accept-Encoding': 'identity;q=1, *;q=0',
      Range: 'bytes=0-'
    },
    url: parseURL(base_url, text),
    method: 'GET',
    responseType: 'arraybuffer'
  })
    .then(response => {
      return response.data;
    })
    .then(data => {
      const fileName = `${uniqid()}.wav`;
      const pathName = path.join(__dirname, '../audioStore', `${fileName}`);
      const file = fs.createWriteStream(pathName);
      file.write(data);
      file.end();
      return fileName;
    });
};

const getMemoizedAudioFunc = () => {
  const cache = {};

  return async text => {
    if (text in cache) return cache[text];
    return textToAudio(text)
      .then(pathName => {
        cache[text] = pathName;
        return cache[text];
      })
      .catch(err => {
        throw 'error';
      });
  };
};

const getNewsAudioSrc = getMemoizedAudioFunc();

module.exports = {
  getNewsAudioSrc
};
