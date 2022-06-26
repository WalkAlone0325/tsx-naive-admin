import { AppstoreFilled } from '@vicons/antd'
import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/document',
  name: 'document',
  component: () => import('@/views/document/document'),
  meta: {
    locale: 'document',
    requiresAuth: false,
    icon: AppstoreFilled,
    title: '文档管理'
  }
} as RouteRecordRaw
