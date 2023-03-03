/** @type {import('@commitlint/types').UserConfig} */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'style', 'refactor', 'build', 'docs']],
    // 'scope-enum': [2, 'always', ['base', 'admin']],
    // 'scope-empty': [2, 'never'],
  },
}
