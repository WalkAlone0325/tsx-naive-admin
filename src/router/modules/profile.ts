import BlankLayout from '@/layout/blank-layout'
import type { RouteRecordRaw } from 'vue-router'

export default {
  path: 'profile',
  name: 'profile',
  component: BlankLayout,
  meta: {
    locale: 'menu.profile',
    requiresAuth: true,
    icon: 'UserOutlined'
  },
  children: [
    {
      path: 'basic',
      name: 'basic',
      component: () => import('@/views/profile/basic'),
      meta: {
        locale: 'menu.profile.basic',
        requiresAuth: true,
        role: ['admin']
      }
    }
  ]
} as RouteRecordRaw
