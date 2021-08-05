import { VNode } from 'vue'
import { RouteRecordRaw } from 'vue-router'
import { MenuOption } from 'naive-ui'
import { renderIcon } from '@/utils'

let onlyOneChild = {}
function hasOneShowingChild(children: RouteRecordRaw[] = [], parent: {}) {
  const showingChildren = children.filter(item => {
    if (item.meta?.hidden) {
      return false
    } else {
      onlyOneChild = item
      return true
    }
  })

  if (showingChildren.length === 1) {
    return true
  }

  if (showingChildren.length === 0) {
    onlyOneChild = { ...parent, path: '', noShowingChildren: true }
    return true
  }

  return false
}

/**
 * 递归组装菜单格式
 * @param {RouteRecordRaw[]} routes
 * @return {*}  {MenuOption[]}
 */
export function useMenu(routes: RouteRecordRaw[]): any {
  let menuItem: MenuOption
  return routes
}
