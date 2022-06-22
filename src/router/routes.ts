import type { RouteRecordRaw } from 'vue-router'
import PageLayout from '@/layout/PageLayout'
import appRoutes from './modules'

export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'root',
    component: PageLayout,
    redirect: '/home',
    children: appRoutes
  }
]
