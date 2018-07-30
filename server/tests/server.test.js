const request = require('supertest');
const app = require('../app.js');

describe('GET requests', () => {
  it('should respond with status code 301', () => {
    return request(app).get('/rooms/1').then((response) => {
      expect(response.statusCode).toBe(301);
    });
  });

  // it('should not respond with an array', () => request(app).get('/rooms/1').then((response) => {
  //   expect(Array.isArray(response)).not.toBeTruthy();
  // }));

  it('should respond with an object', () => {
    return request(app).get('/rooms/1').then((response) => {
      expect(typeof response).toBe('object');
    });
  });
});
