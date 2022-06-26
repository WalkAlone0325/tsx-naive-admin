import BlankLayout from '@/layout/BlankLayout'
import { UserOutlined } from '@vicons/antd'
import type { RouteRecordRaw } from 'vue-router'

export default {
  path: 'profile',
  name: 'profile',
  component: BlankLayout,
  meta: {
    locale: 'menu.profile',
    requiresAuth: true,
    icon: UserOutlined,
    title: '个人中心'
  },
  children: [
    {
      path: 'basic',
      name: 'basic',
      component: () => import('@/views/profile/basic/basic'),
      meta: {
        locale: 'menu.profile.basic',
        requiresAuth: true,
        role: ['admin'],
        title: '基本资料',
        icon: UserOutlined
      }
    }
  ]
} as RouteRecordRaw
