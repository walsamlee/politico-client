// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  collectCoverageFrom: ['src/**/*.{js,jsx,mjs}'],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'json', 'jsx'],

  setupFiles: ['<rootDir>/enzyme.config.js'],

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // The glob patterns Jest uses to detect test files
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],

  testPathIgnorePatterns: [
    '\\\\node_modules\\\\',
  ],

  testURL: 'http://localhost',

  transformIgnorePatterns: [
    '<rootDir>/node_modules/',
  ],

  // Indicates whether each individual test should be reported during the run
  verbose: false,
  transform: {
    '.+\\.(css|styl|less|sass|scss)$':
        '<rootDir>/node_modules/jest-css-modules-transform',
    '^.+\\.js?$': 'babel-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '<rootDir>/mocks/fileMock.js',
    '.+\\.(css|styl|less|sass|scss)$': '<rootDir>/mocks/fileMock.js',
  },

  collectCoverage: true,
  coverageReporters: ['json', 'html', 'lcov'],

  coveragePathIgnorePatterns: [
    '<rootDir>/src/index.js',
    '<rootDir>/src/__test__/end2end',
    'src/actions',
  ],

  setupFilesAfterEnv: ['./jest.setup.js'],
};
