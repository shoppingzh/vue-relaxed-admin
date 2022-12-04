import router, { addRoutes } from '@/router';

addRoutes([{
  path: '/',
  component: import('@p-app/views/index.vue')
}]);

export default router;
