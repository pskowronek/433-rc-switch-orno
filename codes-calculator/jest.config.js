// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.js$',
  setupFiles: ['./jest.setup.js'],
};

