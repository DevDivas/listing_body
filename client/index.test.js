const methods = require('./index.js');

console.log(methods);
// jest testing suites

test('adds 3 to 4 to equal 7', () => {
  expect(methods.plusThree(4)).toBe(7);
});

test('adds 1 and 2 to make 3', () => {
  expect(methods.sum(1, 2)).toBe(3);
});
