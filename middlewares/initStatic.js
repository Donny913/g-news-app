const express = require('express');
const path = require('path');
const fs = require('fs');

const initStatic = app => {
  app.use(express.static(path.join(__dirname, '../public')));
  app.use(express.static(path.join(__dirname, '../audioStore')));
};

module.exports = initStatic;
