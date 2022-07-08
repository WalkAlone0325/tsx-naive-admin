import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/base',
  name: 'base',
  component: () => import('@/views/base-component/baseComponent'),
  meta: {
    locale: 'basic',
    requiresAuth: false,
    icon: '',
    title: '基础组件'
  }
} as RouteRecordRaw
