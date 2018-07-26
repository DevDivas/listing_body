const request = require('supertest');
const app = require('../app.js');

describe('GET requests', () => {
  it('should respond with status code 200', () => {
    return request(app).get('/rooms/1').then(response => {
      expect(response.statusCode).toBe(200);
    });
  });

  it('should not respond with an array', () => {
    return request(app).get('/rooms/1').then(response => {
      expect(Array.isArray(response)).not.toBeTruthy();
    });
  });

  it('should respond with an object', () => {
    return request(app).get('/rooms/1').then(response => {
      expect(typeof response).toBe('object');
    });
  });
})

