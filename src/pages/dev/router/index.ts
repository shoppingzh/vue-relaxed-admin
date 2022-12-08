import router, { addRoutes } from '@/router';
import Layout from '@p-dev/layout/index.vue';

addRoutes([{
  path: '/',
  component: Layout,
  meta: { root: true },
  children: [{
    path: 'global-style',
    component: import('@p-dev/views/global-style.vue'),
    meta: { menu: true, title: '全局样式' },
  }, {
    path: 'ui',
    component: import('@p-dev/views/ui.vue'),
    meta: { menu: true, title: 'UI规范' },
  }, {
    path: 'icon',
    component: import('@p-dev/views/icon.vue'),
    meta: { menu: true, title: '图标方案' },
  }, {
    path: 'tailwindcss',
    component: import('@p-dev/views/tailwindcss.vue'),
    meta: { menu: true, title: 'TailwindCSS技巧' },
  }, {
    path: 'css-nested',
    component: import('@p-dev/views/css-nested.vue'),
    meta: { menu: true, title: 'CSS嵌套' },
  }],
}]);

export default router;
