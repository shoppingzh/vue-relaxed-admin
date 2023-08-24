const menus: any[] = [
  {
    name: '控制台',
    icon: 'yibiaopan2',
    path: '/',
  },
  {
    path: '/icon',
    icon: 'tubiao',
    name: '图标',
  },
  {
    path: '/datetime',
    icon: 'riqishijian',
    name: '日期时间',
  },
  {
    path: '/watermark',
    icon: 'yinzhang',
    name: '水印'
  },
  {
    path: '/ui',
    icon: 'sheji',
    name: 'UI规范'
  },
  {
    path: '/jsx',
    icon: 'dev',
    name: 'JSX支持',
  },
  {
    name: '错误页',
    icon: 'xiayu',
    children: [
      {
        path: '/404',
        name: '404',
      },
    ],
  },
  {
    name: '外部链接',
    icon: 'github',
    path: 'https://github.com/shoppingzh/vue-relaxed-admin',
  },
]

export default [
  {
    url: '/api/menus',
    data: () => menus,
  },
]
