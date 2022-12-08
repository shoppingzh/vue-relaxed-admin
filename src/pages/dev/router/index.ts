import router, { addRoutes } from '@/router';
import Layout from '@p-dev/layout/index.vue';

addRoutes([{
  path: '/',
  component: Layout,
  children: [{
    path: '/',
    component: import('@p-dev/views/index.vue')
  }, {
    path: '/ui',
    component: import('@p-dev/views/ui.vue')
  }, {
    path: '/icon',
    component: import('@p-dev/views/icon.vue')
  }, {
    path: 'global-style',
    component: import('@p-dev/views/global-style.vue')
  }, {
    path: 'tailwindcss',
    component: import('@p-dev/views/tailwindcss.vue')
  }],
}]);

export default router;
