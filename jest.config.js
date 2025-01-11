/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'node',
  testSequencer: '<rootDir>/utils/test-alphabetical-sequencer.js',
  maxWorkers: 1,
  verbose: true,
  setupFiles: ['<rootDir>/utils/test.utils.js'],
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest'
  },
  testMatch: ['**/*.spec.js'],
  roots: ['.'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
  coveragePathIgnorePatterns: ['/node_modules/', '/coverage/'],
  testPathIgnorePatterns: ['/node_modules/', '/coverage/']
};
