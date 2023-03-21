import { renderIcon } from '@/utils'
import { NMenu } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import type { Component, PropType } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import type { MenuMode } from '@/settings'

const Menu = defineComponent({
  name: 'Menu',
  props: {
    isInverted: Boolean,
    collapsedWidth: Number,
    collapsedIconSize: Number,
    menuMode: {
      type: String as PropType<MenuMode>,
      default: 'vertical'
    }
  },
  setup(props) {
    const route = useRoute()
    const router = useRouter()

    // 高亮菜单
    let activeKey = ref(route.name)
    watch(
      () => route.fullPath,
      () => {
        activeKey.value = route.name as string
      }
    )

    const handleClickItem = (key: string) => {
      return router.push({ name: key })
    }

    // root menu
    const appRoute = computed(() =>
      router.getRoutes().find((route) => route.name === 'root')
    )

    const menuTree = computed(() => {
      // const copyRoutes = JSON.parse(JSON.stringify(appRoute?.children))
      const copyRoutes = [...appRoute.value!.children]

      function travel(routes: RouteRecordRaw[], layer: number) {
        return routes.map((route) => {
          if (route.children) {
            route.children = travel(route.children, layer + 1)
          }
          return {
            ...route,
            label: route.meta?.title,
            icon:
              typeof route.meta?.icon === 'string'
                ? renderIcon(resolveComponent('DashboardFilled') as Component)
                : renderIcon(route.meta?.icon as unknown as Component),
            key: route.name
          }
        })
      }
      return travel(copyRoutes, 0)
    })

    return () => (
      <NMenu
        mode={props.menuMode}
        indent={20}
        collapsedWidth={props.collapsedWidth}
        collapsedIconSize={props.collapsedIconSize}
        options={menuTree.value as MenuOption[]}
        onUpdateValue={handleClickItem}
        inverted={props.isInverted}
        v-model:value={activeKey.value}
        style={{ zIndex: 1 }}
      ></NMenu>
    )
  }
})

export default Menu
