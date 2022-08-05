import Layout from '@/layout/A/index.vue'
import type { RouteRecordRaw } from 'vue-router'

export default [{
  path: '/',
  component: Layout,
  children: [{
    path: '',
    component: () => import('@/views/hello.vue')
  }]
}] as RouteRecordRaw[]

