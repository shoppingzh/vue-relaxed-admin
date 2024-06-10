import { addRoutes, } from '@/router'
import { RouteRecordRaw, createRouter, createWebHistory, } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/mpa/test'),
  routes: [],
})

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    children: [
      {
        path: 'polyfill',
        component: () => import('@/pages/test/views/polyfill.vue'),
      }
    ],
  }
]

addRoutes(router, routes)

export default router
