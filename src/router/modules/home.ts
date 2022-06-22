import { HomeOutlined } from '@vicons/antd'
import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/home',
  name: 'home',
  component: () => import('@/views/home'),
  meta: {
    locale: 'document',
    requiresAuth: false,
    icon: HomeOutlined,
    title: '首页'
  }
} as RouteRecordRaw
