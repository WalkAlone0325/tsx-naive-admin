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
        component: () => import('@/views/redirect')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login'),
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
        component: () => import('@/views/dashboard'),
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
        component: () => import('@/views/documentation'),
        name: 'Documentation',
        meta: { title: '文档', icon: DocumentLockOutline }
      }
    ]
  }
]
