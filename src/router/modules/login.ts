import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/login',
  name: 'login',
  component: () => import('@/views/login'),
  meta: { requiresAuth: false, icon: '', title: '登录' }
} as RouteRecordRaw
