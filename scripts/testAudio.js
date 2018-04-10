// const textToAudio = require('../utils/audioUtils');
const getNewsAudioSrc = require('../utils/audioUtils').getNewsAudioSrc;

const http = require('http');
const fs = require('fs');
const path = require('path');

const text = 'Привет о дивный новый мир';
// const text = 'Hello beautiful world';

http
  .createServer((req, res) => {
    getNewsAudioSrc(text);
    res.end();
  })
  .listen(7272);
