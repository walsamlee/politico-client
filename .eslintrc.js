module.exports = {
  env: {
    browser: true,
    es6: true,
    "node": true,
    "jest": true,
  },
  "parser": "babel-eslint",
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "semi": ["error", "always"],
    "quotes": ["error", "single"]
  },
};
