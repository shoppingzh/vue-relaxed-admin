/** @type {import('postcss').Postcss} */
module.exports = {
  plugins: {
    // CSS类名嵌套语法支持
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
  }
};
