import router, { addRoutes } from '@/router'
import Layout from '../layout/index.vue'

addRoutes(router, [
  {
    name: 'Layout',
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        redirect: '/globals',
      },
      {
        path: 'icon',
        component: () => import('@p-index/views/icon/index.vue'),
      },
      {
        path: 'datetime',
        component: () => import('@p-index/views/datetime/index.vue'),
      },
      {
        path: 'globals',
        component: () => import('@p-index/views/globals/index.vue'),
      },
      {
        path: 'category',
        component: () => import('@p-index/views/category/index.vue'),
      },
      {
        path: 'task',
        component: () => import('@p-index/views/task/index.vue'),
      },
      {
        path: 'error',
        redirect: '/error/404',
        children: [
          {
            path: '404',
            component: () => import('@p-index/views/error/404.vue'),
          },
        ],
      },
      {
        path: ':paths(.*)*',
        component: () => import('@/views/error/404.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('@p-index/views/login/index.vue')
  }
])

export default router
