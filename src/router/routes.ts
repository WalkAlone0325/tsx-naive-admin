import type { RouteRecordRaw } from 'vue-router'
import PageLayout from '@/layout/PageLayout'
import appRoutes from './modules'

export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'root',
    component: PageLayout,
    children: appRoutes
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  }
]
