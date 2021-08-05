import { computed, VNode } from 'vue'
import { RouteRecordRaw } from 'vue-router'
import { MenuOption } from 'naive-ui'
import { renderIcon } from '@/utils'

let onlyOneChild = {}

const alwaysShowRootMenu = (route: RouteRecordRaw) => {
  if (route.meta && route.meta.alwaysShow) {
    return true
  } else {
    return false
  }
}

const showingChildNumber = (route: RouteRecordRaw) => {
  if (route.children) {
    const showingChildren = route.children.filter(item => {
      if (item.meta && item.meta.hidden) {
        return false
      } else {
        return true
      }
    })
    return showingChildren.length
  }
  return 0
}

const theOnlyOneChild = (route: RouteRecordRaw) => {
  if (showingChildNumber(route) > 1) {
    return null
  }
  if (route.children) {
    for (const child of route.children) {
      if (!child.meta || !child.meta.hidden) {
        return child
      }
    }
  }
  return { ...route, path: '' }
}

/**
 * 递归组装菜单格式
 * @param {RouteRecordRaw[]} routes
 * @return {*}  {MenuOption[]}
 */
export function useMenu(routes: RouteRecordRaw[]): any {
  let menuItem: MenuOption
  return routes.map(item => {
    if (!item.meta || !item.meta.hidden) {
      if (!alwaysShowRootMenu(item) && theOnlyOneChild(item) && !theOnlyOneChild(item)!.children) {
        menuItem = {
          label: item.meta?.title,
          key: item.name as string,
          icon: renderIcon(item.meta?.icon as VNode),
        }
        return item
      } else {
        menuItem = {
          label: item.meta?.title,
          key: item.name as string,
          icon: renderIcon(item.meta?.icon as VNode),
        }
        if (item.children) {
          menuItem.children = useMenu(item.children)
        }
        return item
      }
    }
  })
}
