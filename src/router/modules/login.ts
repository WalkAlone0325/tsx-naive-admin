import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/login',
  name: 'login',
  component: () => import('@/views/login/index.vue'),
  meta: { title: '', requiresAuth: false }
} as RouteRecordRaw
