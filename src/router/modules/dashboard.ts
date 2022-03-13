import BlankLayout from '@/layout/blank-layout'
import type { RouteRecordRaw } from 'vue-router'

export default {
  path: 'dashboard',
  name: 'dashboard',
  component: BlankLayout,
  meta: {
    locale: 'dashboard',
    requiresAuth: true,
    icon: 'DashboardFilled',
    title: '仪表管理'
  },
  children: [
    {
      path: 'workplace',
      name: 'workplace',
      component: () => import('@/views/dashboard/workplace'),
      meta: {
        locale: 'workplace',
        requiresAuth: true,
        role: ['*'],
        title: '工作站'
      }
    },
    {
      path: 'monitor',
      name: 'monitor',
      component: () => import('@/views/dashboard/monitor'),
      meta: {
        locale: 'monitor',
        requiresAuth: true,
        role: ['*'],
        title: '仪表盘'
      }
    }
  ]
} as RouteRecordRaw
