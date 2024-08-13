/* eslint-disable @typescript-eslint/no-require-imports */

/** @type {import('postcss').Postcss} */
module.exports = {
  plugins: [
    require('tailwindcss/nesting'),
    require('tailwindcss'),
    require('autoprefixer')
  ],
}
