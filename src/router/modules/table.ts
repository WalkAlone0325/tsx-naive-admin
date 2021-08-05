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
      component: () => import('@/views/table/dynamic-table/index.vue'),
      name: 'DynamicTable',
      meta: { title: 'Dynamic Table' },
    },
    {
      path: 'drag-table',
      component: () => import('@/views/table/drag-table/index.vue'),
      name: 'DragTable',
      meta: { title: 'Drag Table' },
    },
    {
      path: 'inline-edit-table',
      component: () => import('@/views/table/inline-edit-table/index.vue'),
      name: 'InlineEditTable',
      meta: { title: 'Inline Edit' },
    },
    {
      path: 'complex-table',
      component: () => import('@/views/table/complex-table/index.vue'),
      name: 'ComplexTable',
      meta: { title: 'Complex Table' },
    },
  ],
}
export default tableRouter
