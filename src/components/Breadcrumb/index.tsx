import { NBreadcrumb, NBreadcrumbItem } from 'naive-ui'
import { RouteLocationMatched, RouteRecordRaw } from 'vue-router'
import { HomeOutline } from '@vicons/ionicons5'
import { useMenus } from '@/hooks/use-menus'
import { VNodeChild } from 'vue'
import { useSettings } from '@/stores'

const Breadcrumb = () => {
  const route = useRoute()
  const { showBreadcrumb, showBreadcrumbIcon } = storeToRefs(useSettings())

  // 首页
  const isDashboard = (route: RouteRecordRaw) =>
    route.name?.toString().trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase()

  const levelList = ref()
  const getBreadcrumb = () => {
    let matched = route.matched.filter((i) => i.meta.title)
    const first = matched[0]

    if (!isDashboard(first)) {
      matched = (
        [
          {
            path: '/dashboard',
            name: 'Dashboard',
            meta: { title: '首页', icon: HomeOutline as unknown }
          }
        ] as unknown as RouteLocationMatched[]
      ).concat(matched)
    }
    levelList.value = matched.filter((i) => i.meta.breadcrumb !== false)
  }

  watchEffect(() => {
    getBreadcrumb()
  })
  // 面包屑列表
  const breadcrumbList = useMenus(toRaw(levelList.value))

  return (
    <NBreadcrumb v-show={showBreadcrumb.value} style={{ marginLeft: '14px' }}>
      {breadcrumbList.map((item) => (
        <NBreadcrumbItem key={item.key}>
          {showBreadcrumbIcon.value && item.icon && item.icon()}
          <span style={{ marginLeft: '4px' }}>{(item.label as () => VNodeChild)()}</span>
        </NBreadcrumbItem>
      ))}
    </NBreadcrumb>
  )
}

export default Breadcrumb
