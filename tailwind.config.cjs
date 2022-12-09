const config = require('tailwindcss/defaultConfig')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{html,vue,jsx,js,ts,tsx}', 'index.html'],
  darkMode: 'class',
  theme: {
    // 规则：以4px为倍数递进
    spacing: new Array(21).fill(null).reduce((conf, _, index) => {
      conf[index] = `${index * 4}px`;
      return conf;
    }, {}),
    fontSize: [
      { name: 'xs', size: 10 },
      { name: 'sm', size: 12 },
      { name: 'msm', size: 13 },
      { name: 'base', size: 14 },
      { name: 'h6', size: 16 },
      { name: 'h5', size: 20 },
      { name: 'h4', size: 24 },
      { name: 'h3', size: 36 },
      { name: 'h2', size: 48 },
      { name: 'h1', size: 56 },
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
      full: config.theme.borderRadius.full,
    },

    // 继承（原有的不会删除）
    extend: {
      colors: {
        // 品牌色 b表brand(品牌)
        'b-primary': {
          DEFAULT: '#165DFF',
          hover: '#4080FF',
          active: '#0E42D2',
          disabled: '#94BFFF',
        },
        'b-info': {
          DEFAULT: '#1DB8E3',
          hover: '#1DB8E3',
          active: '#1DB8E3',
          disabled: '#1DB8E3',
        },
        'b-success': {
          DEFAULT: '#00B42A',
          hover: '#23C343',
          active: '#009A29',
          disabled: '#7BE188',
        },
        'b-warn': {
          DEFAULT: '#FF7D00',
          hover: '#FF9A2E',
          active: '#D25F00',
          disabled: '#FFCF8B',
        },
        'b-danger': {
          DEFAULT: '#F53F3F',
          hover: '#F76560',
          active: '#CB2634',
          disabled: '#FBACA3',
        },
        // 'b-link': {
        //   DEFAULT: '#395BCC'
        // },
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
