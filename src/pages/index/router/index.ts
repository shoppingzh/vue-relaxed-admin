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
    path: 'error',
    redirect: '/error/404',
    children: [{
      path: '404',
      component: () => import('@p-index/views/error/404.vue')
    }],
  }, {
    path: ':paths(.*)*',
    component: () => import('@/views/error/404.vue')
  }]
}]);

export default router;
