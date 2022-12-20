import router, { addRoutes } from '@/router';
import Layout from '../layout/index.vue';

addRoutes([{
  name: 'Layout',
  path: '/',
  component: Layout,
  children: [{
    path: '',
    component: () => import('@p-index/views/dashboard/index.vue')
  }, {
    path: ':paths(.*)*',
    component: () => import('@/views/error/404.vue')
  }]
}]);

export default router;
