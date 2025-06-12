const greet = require('./index');

test('greet returns correct message', () => {
  expect(greet()).toBe("Hello from GitHub Actions!");
});
