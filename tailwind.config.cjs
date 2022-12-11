const config = require('tailwindcss/defaultConfig');
const colors = require('tailwindcss/colors');

const baseColors = {
  blue: ['#E8F7FF', '#C3E7FE', '#9FD4FD', '#7BC0FC', '#57A9FB', '#3491FA', '#206CCF', '#114BA3', '#063078', '#001A4D'],
  orange: ['#FFF7E8', '#FFE4BA', '#FFCF8B', '#FFB65D', '#FF9A2E', '#FF7D00', '#D25F00', '#A64500', '#792E00', '#4D1B00'],
  green: ['#E8FFEA', '#AFF0B5', '#7BE188', '#4CD263', '#23C343', '#00B42A', '#009A29', '#008026', '#006622', '#004D1C'],
  red: ['#FFECE8', '#FDCDC5', '#FBACA3', '#F98981', '#F76560', '#F53F3F', '#CB272D', '#A1151E', '#770813', '#4D000A'],
};

function createPrimaryColors(type, colors) {
  if (!colors) return {};
  return {
    [`b-${type}`]: {
      DEFAULT: colors[6],
      hover: colors[5],
      active: colors[7],
      disabled: colors[3],
      background: colors[1],
    }
  };
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{html,vue,jsx,js,ts,tsx}', 'index.html'],
  darkMode: 'class',
  theme: {
    colors: {
      ...colors,

      ...Object.entries(baseColors).reduce((conf, [name, list]) => {
        conf[name] = list.reduce((map, color, index) => {
          map[(index + 1) * 100] = color;
          return map;
        }, {});
        return conf;
      }, {}),

      ...createPrimaryColors('primary', baseColors.blue),
      ...createPrimaryColors('success', baseColors.green),
      ...createPrimaryColors('warn', baseColors.orange),
      ...createPrimaryColors('danger', baseColors.red),
      ...createPrimaryColors('link', baseColors.blue),

    },
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
