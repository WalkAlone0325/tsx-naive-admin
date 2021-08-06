import { renderIcon } from '@/utils'
import { RouteRecordRaw } from 'vue-router'
import { AimOutlined } from '@vicons/antd'
import { VNode } from 'vue'
import { MenuOption } from 'naive-ui'

export function useRoutesMenu(routerMap: RouteRecordRaw[]) {
  return routerMap
    .filter(item => {
      return item.meta?.hidden != true
    })
    .map(item => {
      if (item.children?.length === 1) {
        item = item.children[0]
      }
      const currentMenu: MenuOption = {
        label: item.meta?.title,
        key: item.name as string,
        icon: renderIcon((item.meta?.icon as VNode) || AimOutlined),
      }
      // 是否有子菜单，并递归处理
      if (item.children && item.children.length > 0) {
        // Recursion
        currentMenu.children = useRoutesMenu(item.children)
      }
      return currentMenu
    })
}
