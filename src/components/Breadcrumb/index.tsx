import { computed, defineComponent, ref, toRaw, watch } from 'vue'
import {
  useRouter,
  useRoute,
  RouteRecordRaw,
  RouteLocationMatched,
  RouterLink,
  RouteRecordName,
} from 'vue-router'
import { NBreadcrumb, NBreadcrumbItem, NDropdown } from 'naive-ui'
import { useSettings } from '@/hooks/use-settings'
import { useBreadcrumb } from './use-breadcrumb'
import { DashboardFilled } from '@vicons/antd'

export default defineComponent({
  name: 'Breadcrumb',
  setup() {
    const route = useRoute()
    const router = useRouter()

    const { breadcrumb, breadcrumbIcon } = useSettings()

    const levelList = ref()

    // methods
    const getBreadcrumb = () => {
      let matched = route.matched.filter(item => item.meta && item.meta.title)
      const first = matched[0]

      if (!isDashboard(first)) {
        matched = (
          [
            {
              path: '/dashboard',
              name: 'Dashboard',
              meta: { title: '首页', icon: DashboardFilled as unknown },
            },
          ] as RouteLocationMatched[]
        ).concat(matched)
      }
      levelList.value = matched.filter(item => item.meta?.title && item.meta.breadcrumb !== false)
    }

    const isDashboard = (route: RouteRecordRaw) => {
      return route?.name?.toString().trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase()
    }

    // 返回组件
    const retComp = (Icon: any) => <Icon style={{ marginRight: '4px' }} />

    // life
    // 调用
    getBreadcrumb()

    // computed
    const breadcrumbList = computed(() => useBreadcrumb(toRaw(levelList.value)))

    // watch
    watch(
      () => route.path,
      () => {
        if (route.path.startsWith('/redirect/')) {
          return
        }
        getBreadcrumb()
      },
    )

    return () => (
      <NBreadcrumb v-show={breadcrumb.value}>
        {breadcrumbList.value.map(item => (
          <NBreadcrumbItem key={item.key}>
            {item.children?.length ? (
              <NDropdown options={item.children} onSelect={key => router.push(key)}>
                {breadcrumbIcon.value && item.icon ? (
                  <span>
                    {retComp(item.icon)}
                    {item.label}
                  </span>
                ) : (
                  <span>{item.label}</span>
                )}
              </NDropdown>
            ) : (
              <RouterLink to={{ name: item.key as RouteRecordName | undefined }}>
                {breadcrumbIcon.value && item.icon ? (
                  <span>
                    {retComp(item.icon)}
                    {item.label}
                  </span>
                ) : (
                  <span>{item.label}</span>
                )}
              </RouterLink>
            )}
          </NBreadcrumbItem>
        ))}
      </NBreadcrumb>
    )
  },
})
