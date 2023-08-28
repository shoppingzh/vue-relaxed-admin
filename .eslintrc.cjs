/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  globals: {
    'defineOptions': 'readonly'
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    }
  },
  plugins: ['@typescript-eslint'],
  extends: [
    '@shoppingzh',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'linebreak-style': [0],
    'no-promise-executor-return': [0],
    // ts
    '@typescript-eslint/no-explicit-any': [0],

    // vue
    'vue/multi-word-component-names': [0],
  },
}
