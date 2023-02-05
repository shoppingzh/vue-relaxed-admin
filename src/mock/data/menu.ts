const menus: any[] = [{
  path: '/category',
  name: '分类管理',
  icon: 'fenlei',
}, {
  path: '/task',
  name: '任务管理',
  icon: 'renwu'
}, {
  name: '外部链接',
  icon: 'github',
  path: 'https://github.com/shoppingzh/vue-relaxed-admin'
}];

export default [{
  url: '/api/menus',
  data: () => menus
}];
