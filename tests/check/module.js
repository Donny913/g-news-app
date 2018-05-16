// const hello = () => 'Hello';
const hello = require('./hello');

console.log(hello);

const foo = name => `${hello()}, ${name}`;
console.log(foo('Moses'));
exports.foo = foo;
// exports.hello = hello;
