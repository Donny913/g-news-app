jest.mock('./hello', () => {
  return {
    hello: () => 'Shalom'
  };
});

const foo = require('./foo');

test('testing inside function', () => {
  expect(foo('Moses')).toBe('Shalom, Moses');
});
