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

    return () => <NMenu options={menuTree as MenuOption[]}></NMenu>
  }
})

export default Menu
