import BlankLayout from '@/layout/BlankLayout'
import { AppstoreFilled, DashboardFilled, PieChartFilled } from '@vicons/antd'
import type { RouteRecordRaw } from 'vue-router'

export default {
  path: 'dashboard',
  name: 'dashboard',
  redirect: '/dashboard/workplace',
  component: BlankLayout,
  meta: {
    locale: 'dashboard',
    requiresAuth: true,
    icon: AppstoreFilled,
    title: '仪表管理'
  },
  children: [
    {
      path: 'workplace',
      name: 'workplace',
      component: () => import('@/views/dashboard/workplace/workplace'),
      meta: {
        locale: 'workplace',
        requiresAuth: true,
        role: ['*'],
        title: '工作站',
        icon: DashboardFilled,
        noCache: true
      }
    },
    {
      path: 'monitor',
      name: 'monitor',
      component: () => import('@/views/dashboard/monitor/monitor'),
      meta: {
        locale: 'monitor',
        requiresAuth: true,
        role: ['*'],
        title: '仪表盘',
        icon: PieChartFilled
      }
    }
  ]
} as RouteRecordRaw
