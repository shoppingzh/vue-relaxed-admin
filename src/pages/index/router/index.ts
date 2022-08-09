import router, { addRoutes } from '@/router'

addRoutes([{
  path: '/',
  component: import('@p-index/views/index.vue')
}])

export default router
