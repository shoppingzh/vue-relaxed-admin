/** @type {import('postcss').Postcss} */
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // 适配
    'postcss-px-to-viewport': {
      unitToConvert: 'px',
      viewportWidth: 375,
      unitPrecision: 5,
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
    },
  }
};
