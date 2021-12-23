import { RouteRecordRaw } from 'vue-router'
import { HomeOutline, DocumentLockOutline } from '@vicons/ionicons5'

const BaseLayout = () => import('@/layout')

export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/redirect',
    component: BaseLayout,
    meta: { hidden: true },
    children: [
      {
        path: '/redirect/:path().*',
        component: () => import('@/views/redirect.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login.vue'),
    meta: { hidden: true }
  },
  {
    path: '/',
    component: BaseLayout,
    redirect: '/dashboard',
    name: 'Home',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard.vue'),
        name: 'Dashboard',
        meta: { title: '首页', icon: HomeOutline, affix: true }
      }
    ]
  },
  {
    path: '/documentation',
    component: BaseLayout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/documentation.vue'),
        name: 'Documentation',
        meta: { title: '文档', icon: DocumentLockOutline }
      }
    ]
  }
]
