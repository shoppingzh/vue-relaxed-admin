/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    '@shoppingzh/eslint-config',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    'array-bracket-newline': [0],
    'function-paren-newline': [0],
  },
}
