import router, { addRoutes } from '@/router'

addRoutes([{
  name: 'Layout',
  path: '/',
  component: import('@/layout/A/index.vue')
}])

router.addRoute('Layout', {
  path: '',
  component: import('@p-index/views/index.vue')
})

export default router
