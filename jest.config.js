/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.ts'],
  reporters: ['default', ['jest-html-reporter', { outputPath: 'test-report.html' }]],
};
