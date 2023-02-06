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
    '@shoppingzh',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    'no-use-before-define': [2, { functions: false }],

    // ts
    '@typescript-eslint/no-explicit-any': [0],

    // vue
    'vue/multi-word-component-names': [0],
  },
};
