import router, { addRoutes } from '@/router';
import Layout from '@p-dev/layout/index.vue';

addRoutes([{
  path: '/',
  component: Layout,
  redirect: '/ui',
  meta: { root: true },
  children: [{
    path: 'ui',
    component: import('@p-dev/views/ui.vue'),
    meta: { menu: true, title: 'UI规范' },
  }, {
    path: 'global-style',
    component: import('@p-dev/views/global-style.vue'),
    meta: { menu: true, title: '全局样式' },
  }, {
    path: 'components-style',
    component: import('@p-dev/views/components-style.vue'),
    meta: { menu: true, title: '组件库样式覆盖' },
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
  }, {
    path: 'scroller',
    component: import('@p-dev/views/scroller.vue'),
    meta: { menu: true, title: '滚动条' }
  }],
}]);

export default router;
