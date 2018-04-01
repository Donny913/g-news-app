const express = require('express');
const path = require('path');

const initStatic = app => {
  app.use(express.static(path.join(__dirname, '../public')));
  app.use((req, res) => {
    res.redirect('/');
  });
};

module.exports = initStatic;
