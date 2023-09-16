const menus: any[] = [
  {
    path: '/globals',
    name: '平台管理',
    icon: 'xitong'
  },
  {
    name: '工作管理',
    icon: 'gongzuo',
    children: [{
      path: '/category',
      name: '分类管理',
      icon: 'fenlei',
    },
    {
      path: '/task',
      name: '任务管理',
      icon: 'renwu',
    }]
  },
]

export default [
  {
    url: '/api/menus',
    data: () => menus,
  },
]
