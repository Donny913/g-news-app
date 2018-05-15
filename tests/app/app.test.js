const request = require('supertest');
const app = require('../../app');

test('testing routes', async () => {
  const result = await request(app).get('/test');
  expect(result.statusCode).toBe(200);
});
