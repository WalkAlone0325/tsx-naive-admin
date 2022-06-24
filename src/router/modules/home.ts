import { HomeOutlined } from '@vicons/antd'
import type { RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/home/home'

export default {
  path: '/home',
  name: 'home',
  component: HomeView,
  meta: {
    locale: 'document',
    requiresAuth: false,
    icon: HomeOutlined,
    title: '首页',
    isAffix: true
  }
} as RouteRecordRaw
