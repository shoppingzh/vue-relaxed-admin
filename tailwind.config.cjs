/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{html,vue,jsx,js,ts,tsx}', 'index.html'],
  darkMode: 'class',
  plugins: [
    '@tailwindcss/aspect-ratio',
    require('@tailwindcss/line-clamp')
  ],
  corePlugins: {
    preflight: false,
  },
  presets: [
    require('./build/tailwind-arco-design-preset.cjs')
  ]
};
