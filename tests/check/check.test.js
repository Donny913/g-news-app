const modulas = require('./module');
// modulas.hello = jest.fn(() => 'Shalom');

jest.mock('./hello', () => {
  return jest.fn(() => 'Shalom');
});

test('testing inside function', () => {
  expect(modulas.foo('Moses')).toBe('Shalom, Moses');
});
