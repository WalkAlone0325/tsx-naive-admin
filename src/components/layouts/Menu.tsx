import { renderIcon } from '@/utils'
import { NMenu } from 'naive-ui'
import { MenuOption } from 'naive-ui'
import type { Component } from 'vue'
import { RouteRecordRaw } from 'vue-router'

const Menu = defineComponent({
  name: 'Menu',
  setup() {
    const route = useRoute()
    const router = useRouter()

    // 高亮菜单
    let activeKey = $ref(route.name)
    // watch(
    //   () => route.fullPath,
    //   () => {
    //     activeKey = route.name as string
    //   },
    //   { immediate: true }
    // )

    const handleClickItem = (key: string) => {
      return router.push({ name: key })
    }

    // root menu
    const appRoute = $computed(() =>
      router.getRoutes().find((route) => route.name === 'root')
    )

    const menuTree = $computed(() => {
      // const copyRoutes = JSON.parse(JSON.stringify(appRoute?.children))
      const copyRoutes = [...appRoute!.children]

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
        indent={20}
        collapsedIconSize={22}
        options={menuTree as MenuOption[]}
        onUpdateValue={handleClickItem}
        v-model={activeKey}
        style={{zIndex: 1}}
      ></NMenu>
    )
  }
})

export default Menu
