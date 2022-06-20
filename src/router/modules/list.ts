import type { RouteRecordRaw } from 'vue-router'

export default {
  path: 'list',
  name: 'list',
  component: () => import('@/views/list/index.vue'),
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
      component: () => import('@/views/list/search-table/index.vue'),
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
      component: () => import('@/views/list/card/index.vue'),
      meta: {
        locale: 'menu.list.cardList',
        requiresAuth: true,
        role: ['*'],
        title: '卡片管理'
      },
      children: [
        {
          path: 'card1',
          name: 'card1',
          component: () => import('@/views/list/card/index.vue'),
          meta: {
            locale: 'menu.list.cardList',
            requiresAuth: true,
            role: ['*'],
            title: '卡片第一级1'
          }
        },
        {
          path: 'card2',
          name: 'card2',
          component: () => import('@/views/list/card/index.vue'),
          meta: {
            locale: 'menu.list.cardList',
            requiresAuth: true,
            role: ['*'],
            title: '卡片第一级2'
          },
          children: [
            {
              path: 'card2-1',
              name: 'card2-1',
              component: () => import('@/views/list/card/index.vue'),
              meta: {
                locale: 'menu.list.cardList',
                requiresAuth: true,
                role: ['*'],
                title: '卡片第二级2-1'
              }
            },
            {
              path: 'card2-2',
              name: 'card2-2',
              component: () => import('@/views/list/card/index.vue'),
              meta: {
                locale: 'menu.list.cardList',
                requiresAuth: true,
                role: ['*'],
                title: '卡片第二级2-2'
              }
            }
          ]
        }
      ]
    }
  ]
} as RouteRecordRaw
