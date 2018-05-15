const hello = require('./hello').hello;

const foo = name => `${hello()}, ${name}`;

module.exports = foo;
