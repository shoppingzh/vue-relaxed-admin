import router, { addRoutes } from '@/router'

addRoutes([{
  path: '/',
  component: import('@p-dev/views/index.vue')
}, {
  path: '/ui',
  component: import('@p-dev/views/ui.vue')
}])

export default router
