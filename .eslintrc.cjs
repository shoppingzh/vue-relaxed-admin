/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    '@shoppingzh/eslint-config',
  ],
  rules: {
    'semi': [2, 'always'],
    'array-bracket-newline': [0],
    'function-paren-newline': [0],
    'id-blacklist': [0],

    // vue
    'vue/multi-word-component-names': [0],
  },
};
