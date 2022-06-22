import BlankLayout from '@/layout/BlankLayout'
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
      component: () => import('@/views/list/search-table/search-table'),
      meta: {
        locale: 'menu.list.searchTable',
        requiresAuth: true,
        role: ['*'],
        title: '查询表格',
        icon: 'ClusterOutlined'
      }
    },
    {
      path: 'card',
      name: 'card',
      component: () => import('@/views/list/card/card'),
      meta: {
        locale: 'menu.list.cardList',
        requiresAuth: true,
        role: ['*'],
        title: '卡片管理',
        icon: 'ClusterOutlined'
      },
      children: [
        {
          path: 'card1',
          name: 'card1',
          component: () => import('@/views/list/card/card'),
          meta: {
            locale: 'menu.list.cardList',
            requiresAuth: true,
            role: ['*'],
            title: '卡片第一级1',
            icon: 'ClusterOutlined'
          }
        },
        {
          path: 'card2',
          name: 'card2',
          component: () => import('@/views/list/card/card'),
          meta: {
            locale: 'menu.list.cardList',
            requiresAuth: true,
            role: ['*'],
            title: '卡片第一级2',
            icon: 'ClusterOutlined'
          },
          children: [
            {
              path: 'card2-1',
              name: 'card2-1',
              component: () => import('@/views/list/card/card'),
              meta: {
                locale: 'menu.list.cardList',
                requiresAuth: true,
                role: ['*'],
                title: '卡片第二级2-1',
                icon: 'ClusterOutlined'
              }
            },
            {
              path: 'card2-2',
              name: 'card2-2',
              component: () => import('@/views/list/card/card'),
              meta: {
                locale: 'menu.list.cardList',
                requiresAuth: true,
                role: ['*'],
                title: '卡片第二级2-2',
                icon: 'ClusterOutlined'
              }
            }
          ]
        }
      ]
    }
  ]
} as RouteRecordRaw
