import { VNode } from 'vue'
import { RouteRecordRaw } from 'vue-router'
import { MenuOption } from 'naive-ui'
import { renderIcon } from '@/utils'

/**
 * 递归组装菜单格式
 * @param {RouteRecordRaw[]} routes
 * @return {*}  {MenuOption[]}
 */
export function useMenu(routes: RouteRecordRaw[]): MenuOption[] {
  let menuItem: MenuOption
  return routes
    .filter(item => !item.meta?.hidden)

    .map(route => {
      menuItem = {
        label: route.meta?.title,
        key: route.name as string,
        icon: renderIcon(route.meta?.icon as VNode),
        // extra: route.path,
      }
      // 是否有子菜单，并递归处理
      if (route.children) {
        menuItem.children = useMenu(route.children!)
      }
      return menuItem
    })

    .map(item => {
      if (item.children?.length === 1) {
        item = item.children[0]
      }
      return item
    })
}
