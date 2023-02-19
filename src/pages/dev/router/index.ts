import router, { addRoutes } from '@/router'
import Layout from '@p-dev/layout/index.vue'

addRoutes([
  {
    path: '/',
    component: Layout,
    redirect: '/ui',
    meta: { root: true },
    children: [
      {
        path: 'ui',
        component: () => import('@p-dev/views/ui/index.vue'),
        meta: { menu: true, title: 'UI规范', icon: 'spec' },
      },
      {
        path: 'global-style',
        component: () => import('@p-dev/views/global-style.vue'),
        meta: { menu: true, title: '全局样式', icon: 'style' },
      },
      {
        path: 'components-style',
        component: () => import('@p-dev/views/components-style.vue'),
        meta: { menu: true, title: '组件库样式覆盖', icon: 'components' },
      },
      {
        path: 'css-nested',
        component: () => import('@p-dev/views/css-nested.vue'),
        meta: { menu: true, title: 'CSS嵌套', icon: 'css' },
      },
      {
        path: 'icon',
        component: () => import('@p-dev/views/icon.vue'),
        meta: { menu: true, title: '图标方案', icon: 'icon' },
      },
      {
        path: 'tailwindcss',
        component: () => import('@p-dev/views/tailwindcss.vue'),
        meta: { menu: true, title: 'TailwindCSS技巧', icon: 'tailwind' },
      },
      {
        path: 'smooth-scroll',
        component: () => import('@p-dev/views/solutions/smooth-scroll.vue'),
        meta: { menu: true, title: '平滑滚动', icon: 'scroll' },
      },
    ],
  },
])

export default router
