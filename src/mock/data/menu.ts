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
  {
    name: '知识库',
    path: '/knowledge',
    icon: 'zhishi',
    children: [{
      path: '/knowledge/category',
      name: '分类管理',
      icon: 'fenlei',
    }, {
      path: '/knowledge/doc',
      name: '文档管理',
      icon: 'wendang',
    }]
  }
]

export default [
  {
    url: '/api/menus',
    data: () => menus,
  },
]
