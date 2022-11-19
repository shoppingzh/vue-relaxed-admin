import router, { addRoutes } from '@/router'

addRoutes([{
  path: '/',
  component: import('@p-dev/views/index.vue')
}, {
  path: '/ui',
  component: import('@p-dev/views/ui.vue')
}, {
  path: '/icon',
  component: import('@p-dev/views/icon.vue')
}])

export default router
