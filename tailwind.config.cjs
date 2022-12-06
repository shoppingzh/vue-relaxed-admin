/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{html,vue,jsx,js,ts,tsx}', 'index.html'],
  darkMode: 'class',
  theme: {
    fontSize: [
      { name: 'xs', size: 10 },
      { name: 'sm', size: 12 },
      { name: 'msm', size: 13 },
      { name: 'base', size: 14 },
      { name: 'h1', size: 16 },
      { name: 'h2', size: 20 },
      { name: 'h3', size: 24 },
      { name: 'h4', size: 36 },
      { name: 'h5', size: 48 },
      { name: 'h6', size: 56 },
    ].reduce((sizes, o) => {
      sizes[o.name] = [`${o.size}px`, { lineHeight: `${Math.round(o.size * 1.5)}px` }];
      return sizes;
    }, {}),
    boxShadow: {
      sm: ' 0px 2px 5px 0px rgba(0, 0, 0, 0.1)',
      md: '0px 4px 10px 0px rgba(0, 0, 0, 0.1)',
      lg: '0px 8px 20px 0px rgba(0, 0, 0, 0.1)',
    },
    borderRadius: {
      xs: '2px',
      sm: '4px',
      md: '6px',
    },

    // 继承（原有的不会删除）
    extend: {
      colors: {
        // 品牌色 b表brand(品牌)
        'b-primary': '#165DFF',
        'b-info': '#1DB8E3',
        'b-success': '#00B42A',
        'b-warn': '#FF7D00',
        'b-danger': '#F53F3F',
        'b-link': '#395BCC',
      },
      textColor: {
        primary: '#1D2129',
        regular: '#4E5969',
        secondary: '#86909C',
        disabled: '#C9CDD4',
      },
    },
  },
  plugins: [
    '@tailwindcss/aspect-ratio'
  ],
  corePlugins: {
    preflight: false,
  }
};
