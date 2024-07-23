module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'curly': 'error',
    'no-unused-vars': ['warn', { 'args': 'none', 'ignoreRestSiblings': true }],
    'indent': ['error', 2],
    'arrow-spacing': ['error', { 'before': true, 'after': true }],
    'no-var': 'error',
  },
  overrides: [
    {
      files: ['**/*.test.js'],
      env: {
        jest: true,
      },
      rules: {
        'no-unused-expressions': 'off',
      },
    },
  ],
};
