import Layout from '@/layout'
import { RouteRecordRaw } from 'vue-router'
import { TableOutlined } from '@vicons/antd'

const tableRouter: RouteRecordRaw = {
  path: '/table',
  component: Layout,
  redirect: '/table/complex-table',
  name: 'Table',
  meta: {
    title: 'Table',
    icon: TableOutlined,
  },
  children: [
    {
      path: 'dynamic-table',
      component: () => import('@/views/table'),
      name: '表格',
      meta: { title: '表格' },
    },
  ],
}
export default tableRouter
