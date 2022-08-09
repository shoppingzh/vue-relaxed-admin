/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{html,vue,jsx,js,ts,tsx}", "index.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // 品牌色 b表brand(品牌)
        'b-primary': '#4872FF',
        'b-info': '#1DB8E3',
        'b-success': '#67C23A',
        'b-warn': '#E6A23C',
        'b-danger': '#F56C6C',
        'b-link': '#395BCC',
      },
      fontSize: [
        { name: 'xs', size: 10 },
        { name: 'sm', size: 12 },
        { name: 'base', size: 14 },
        { name: 'md', size: 16 },
        { name: 'lg', size: 18 },
        { name: 'xl', size: 20 },
        { name: '2xl', size: 24 },
      ].reduce((sizes, o) => {
        sizes[o.name] = [`${o.size}px`, { lineHeight: `${Math.round(o.size * 1.5)}px` }]
        return sizes
      }, {}),
      boxShadow: {
        sm: '0 6px 16px -8px rgba(0,0,0,0.08), 0 9px 28px 0 rgba(0,0,0,0.05), 0 12px 48px 16px rgba(0,0,0,0.03)',
        md: '0 3px 6px -4px rgba(0,0,0,0.12), 0 6px 16px 0 rgba(0,0,0,0.08), 0 9px 28px 8px rgba(0,0,0,0.05)',
        lg: '0px 1px 2px -2px rgba(0,0,0,0.16), 0px 3px 6px 0px rgba(0,0,0,0.12), 0px 5px 12px 4px rgba(0,0,0,0.09)'
      },
    },
  },
  plugins: [
    '@tailwindcss/aspect-ratio'
  ]
}
