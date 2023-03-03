const menus: any[] = [
  {
    path: '/category',
    name: '分类管理',
    icon: 'fenlei',
  },
  {
    path: '/task',
    name: '任务管理',
    icon: 'renwu',
  },
]

export default [
  {
    url: '/api/menus',
    data: () => menus,
  },
]
