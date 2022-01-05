/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  verbose: true,
  projects: [
    {
      displayName: 'Node.js',
      testEnvironment: 'node',
      rootDir: './',
      testMatch: ['<rootDir>/tests/**/*.[jt]s'],
    },
  ],
};
