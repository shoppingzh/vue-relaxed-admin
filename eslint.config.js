import stylistic from '@stylistic/eslint-plugin'
import globals from 'globals'
import js from '@eslint/js'
import config from '@shoppingzh/eslint-config'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [{
  ignores: [
    'public',
    'dist',
    'src/assets',
  ],
  languageOptions: {
    ecmaVersion: 'latest',
    globals: {
      ...globals.builtin,
      ...globals.browser,
      ...globals.node,
      ...globals.es2021,
      'defineOptions': 'readonly',
    },
  },
  plugins: {
    '@stylistic': stylistic,
  },
  rules: {
    ...js.configs.recommended.rules,
    ...config.rules,
    '@stylistic/indent': [2, 2],
  }
}]
