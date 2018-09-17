const request = require('supertest');
const app = require('../../server/app');

describe('GET requests', () => {
  it('should respond with status code 301', () => request(app).get('/rooms/1').then((response) => {
    expect(response.statusCode).toBe(301);
  }));

  it('should respond with an object', () => request(app).get('/rooms/1').then((response) => {
    expect(typeof response).toBe('object');
  }));
});
