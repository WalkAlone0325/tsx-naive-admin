import { RouteRecordRaw } from 'vue-router'
import {
  DashboardFilled,
  AccountBookFilled,
  GatewayOutlined,
  UsbFilled,
  IeOutlined,
} from '@vicons/antd'
import Layout from '@/layout'
import nestedRouter from './modules/nested'
import tableRouter from './modules/table'

/**
 * 参数解析：
 *
 * / 当设置为 noRedirect 的时候该路由在面包屑导航中不可被点击
 * * redirect: 'noRedirect'
 *
 * / 设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
 * * name: 'router-name'
 *
 * * meta: {
 * / 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面
 * / 只有一个时，会将那个子路由当做根路由显示在侧边栏--如引导页面
 * / 若你想不管路由下面的 children 声明的个数都显示你的根路由
 * / 你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
 * * alwaysShow: true,
 *
 * / 是否隐藏
 * * hidden: false
 *
 * / 设置该路由进入的权限，支持多个权限叠加
 * * roles: ['admin', 'editor'],
 *
 * / 设置该路由在侧边栏和面包屑中展示的名字
 * * title: 'title',
 *
 * / 设置该路由的图标
 * * icon: 'svg-icon',
 *
 * / 如果设置为true，则不会被 <keep-alive> 缓存(默认 false)
 * * noCache: true,
 *
 * / 如果设置为false，则不会在breadcrumb面包屑中显示(默认 true)
 * * breadcrumb: false,
 *
 * / 如果设置为true，它则会固定在tags-view中(默认 false)
 * * affix: true,
 *
 * / 当路由设置了该属性，则会高亮相对应的侧边栏
 * / 这在某些场景非常有用，比如：一个文章的列表页路由为：/article/list
 * / 点击文章进入文章详情页，这时候路由为/article/1，但你想在侧边栏高亮文章列表的路由，就可以进行如下设置
 * * activeMenu: '/article/list'
 * }
 */
export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/redirect',
    component: Layout,
    meta: { hidden: true },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('@/views/login'),
    meta: { hidden: true },
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    meta: { hidden: true },
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard'),
        name: 'Dashboard',
        meta: { title: '首页', icon: DashboardFilled, affix: true },
      },
    ],
  },
  {
    path: '/documentation',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/documentation'),
        name: 'Documentation',
        meta: { title: '文档', icon: AccountBookFilled, affix: true },
      },
    ],
  },
  {
    path: '/guide',
    component: Layout,
    redirect: '/guide/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/guide'),
        name: 'Guide',
        meta: { title: 'Guide', icon: GatewayOutlined, noCache: true },
      },
    ],
  },
  {
    path: '/profile',
    component: Layout,
    name: 'Profile',
    redirect: '/profile/index',
    meta: { hidden: true },
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile'),
        name: 'Profile',
        meta: { title: 'Profile', icon: UsbFilled, noCache: true },
      },
    ],
  },
]

export const asyncRoutes: Array<RouteRecordRaw> = [
  nestedRouter,
  tableRouter,
  {
    path: '/icon',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/icons'),
        name: 'Icons',
        meta: { title: 'Icons', icon: IeOutlined, noCache: true },
      },
    ],
  },
]
