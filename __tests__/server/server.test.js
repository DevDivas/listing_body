const request = require('supertest');
const app = require('../../server/server');

describe('GET requests', () => {
  it('should respond with status code 301', () => request(app).get('/rooms/1').then((response) => {
    expect(response.statusCode).toBe(301);
  }));

  it('should respond with an object', () => request(app).get('/rooms/1').then((response) => {
    expect(typeof response).toBe('object');
  }));
});

describe('GET Amenities', () => {
  const amenitiesList = [
    'basic',
    'facilities',
    'guest_access',
    'dining',
    'bed_and_bath',
    'safety_features',
  ];

  it('should return an object with all amenities', () => request(app).get('/rooms/22/amenities').then((response) => {
    const { body } = response;
    const bodyProps = Object.keys(body);
    expect(JSON.stringify(bodyProps)).toBe(JSON.stringify(amenitiesList));
  }));
});
