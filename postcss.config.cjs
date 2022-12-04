/** @type {import('postcss').Postcss} */
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // 适配
    'postcss-px-to-viewport': {
      unitToConvert: 'px',
      viewportWidth: 720,
      unitPrecision: 5,
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
    },
  }
};
