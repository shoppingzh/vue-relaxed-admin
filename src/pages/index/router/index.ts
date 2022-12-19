import router, { addRoutes } from '@/router';

addRoutes([{
  path: '/',
  component: () => import('@p-index/views/dashboard/index.vue')
}]);

export default router;
