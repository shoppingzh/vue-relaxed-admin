import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [{
  path: '/:paths(.*)*',
  component: () => import('@/views/error/404.vue')
}];

export default routes;

