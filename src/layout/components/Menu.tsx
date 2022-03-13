import type { PropType } from 'vue'
import { NEllipsis, NMenu } from 'naive-ui'
import renderIcon from '@/utils/renderIcon'
import usePermission from '@/hooks/permission'
import type { RouteRecordNormalized, RouteRecordRaw } from 'vue-router'

const Menu = defineComponent({
  name: 'Menu',
  props: {
    inverted: Boolean as PropType<boolean>,
    collapsed: Boolean as PropType<boolean>
  },
  setup(props) {
    const permission = usePermission()
    const route = useRoute()
    const router = useRouter()

    // root
    const appRoute = computed(() => {
      return router
        .getRoutes()
        .find((el) => el.name === 'root') as RouteRecordNormalized
    })
    // menuTree
    const menuTree = computed(() => {
      const copyRouter = JSON.parse(JSON.stringify(appRoute.value.children))
      function travel(_routes: RouteRecordRaw[], layer: number) {
        if (!_routes) return null
        const collector: any = _routes.map((element) => {
          const flatElement = {
            ...element,
            // ...element.meta,
            key: element.name,
            icon: renderIcon(element.meta?.icon || 'AppstoreFilled'),
            label: () => (
              <NEllipsis>{{ default: () => element.meta?.title }}</NEllipsis>
              // <RouterLink to={{ name: element.name }}>
              //   {element.meta?.title}
              // </RouterLink>
            ),
            children: element.children
          }
          // no access
          if (!permission.accessRouter(flatElement)) return null

          // leaf node
          if (!flatElement.children) return flatElement

          // associated child node
          const subItem = travel(flatElement.children, layer)
          if (subItem.length) {
            flatElement.children = subItem
            return flatElement
          }
          // the else logic
          if (layer > 1) {
            flatElement.children = subItem
            return flatElement
          }
          return null
        })
        return collector.filter(Boolean)
      }
      return travel(copyRouter, 0)
    })

    // select
    const activeKey = ref(route.name)
    watch(route, (newVal) => {
      if (newVal.meta.requiresAuth) {
        const lastLen = newVal.matched.length - 1
        const key = newVal.matched[lastLen].name as string
        activeKey.value = key
      }
    })
    const handleUpdateValue = (key: string) => {
      router.push({ name: key })
    }

    return () => (
      <NMenu
        collapsed={props.collapsed}
        inverted={props.inverted}
        collapsedWidth={50}
        collapsedIconSize={22}
        indent={18}
        options={menuTree.value}
        v-model:value={activeKey.value}
        onUpdateValue={handleUpdateValue}
      />
    )
  }
})

export default Menu
