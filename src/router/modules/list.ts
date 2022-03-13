import BlankLayout from '@/layout/blank-layout'
import type { RouteRecordRaw } from 'vue-router'

export default {
  path: 'list',
  name: 'list',
  component: BlankLayout,
  meta: {
    locale: 'menu.list',
    requiresAuth: true,
    icon: 'ClusterOutlined',
    title: '表格管理'
  },
  children: [
    {
      path: 'search-table', // The midline path complies with SEO specifications
      name: 'searchTable',
      component: () => import('@/views/list/search-table'),
      meta: {
        locale: 'menu.list.searchTable',
        requiresAuth: true,
        role: ['*'],
        title: '查询表格'
      }
    },
    {
      path: 'card',
      name: 'card',
      component: () => import('@/views/list/card'),
      meta: {
        locale: 'menu.list.cardList',
        requiresAuth: true,
        role: ['*'],
        title: '卡片管理'
      }
    }
  ]
} as RouteRecordRaw
