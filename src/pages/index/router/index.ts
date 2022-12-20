import router, { addRoutes } from '@/router';
import Layout from '../layout/index.vue';

addRoutes([{
  name: 'Layout',
  path: '/',
  component: Layout
}]);

addRoutes([{
  path: '',
  component: () => import('@p-index/views/dashboard/index.vue')
}, {
  path: ':paths(.*)*',
  component: () => import('@/views/error/404.vue')
}], 'Layout');


export default router;
