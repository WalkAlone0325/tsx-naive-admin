import { renderIcon } from '@/utils/utils'
import { MenuOption } from 'naive-ui'
import { RouteRecordRaw, RouterLink } from 'vue-router'
import { DesktopOutline } from '@vicons/ionicons5'
import { VNode } from 'vue'

/**
 * 返回响应菜单格式
 * @param routesMap RouteRecordRaw[] 传入的路由
 * @returns 返回适应的菜单
 */
export function useMenus(routesMap: RouteRecordRaw[]): MenuOption[] {
  return routesMap
    .filter((i) => !i.meta?.hidden)
    .map((route) => {
      route.children?.length === 1 && (route = route.children[0])

      const currentMenu: MenuOption = {
        label: () => <RouterLink to={{ name: route.name }}>{route.meta?.title}</RouterLink>,
        key: route.name as string,
        icon: renderIcon(route.meta?.icon as VNode) || DesktopOutline,
        disabled: route.path === '/',
        children:
          route.children && route.children.length > 0 ? useMenus(route.children!) : undefined
      }
      return currentMenu
    })
}
