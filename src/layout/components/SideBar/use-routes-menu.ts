import { renderIcon } from '@/utils'
import { RouteRecordRaw } from 'vue-router'
import { AimOutlined } from '@vicons/antd'

let onlyOneChild = {}
function hasOneShowingChild(children: RouteRecordRaw[] = [], parent) {
  const showingChildren = children.filter(item => {
    if (item.meta?.hidden) {
      return false
    } else {
      // Temp set(will be used if only has one showing child)
      onlyOneChild = item
      return true
    }
  })

  // When there is only one child router, the child router is displayed by default
  if (showingChildren.length === 1) {
    return true
  }

  // Show parent if there are no child router to display
  if (showingChildren.length === 0) {
    onlyOneChild = { ...parent, path: '', noShowingChildren: true }
    return true
  }

  return false
}

// export function useRoutesMenu(routes: RouteRecordRaw[]) {
//   let menuItem
//   routes
//     .filter(item => !item.meta || !item.meta.hidden)
//     .map(route => {
//       if (
//         hasOneShowingChild(route.children, route) &&
//         (!onlyOneChild.children || onlyOneChild.noShowingChildren) &&
//         !route.meta?.alwaysShow
//       ) {
//         menuItem = route
//         console.log('if', menuItem)
//       } else {
//         menuItem = route
//         // if (route.children) {
//         menuItem.children = useRoutesMenu(route.children)
//         // }
//         console.log('else', menuItem)
//       }
//       // return menuItem
//     })
// }
// && !['/:path(.*)*', '/', PageEnum.REDIRECT, PageEnum.BASE_LOGIN].includes(item.path)
export function useRoutesMenu(routerMap: Array<any>) {
  return routerMap
    .filter(item => {
      return item.meta?.hidden != true
    })
    .map(item => {
      if (item.children?.length === 1) {
        item = item.children[0]
      }
      const currentMenu = {
        ...item,
        ...item.meta,
        label: item.meta?.title,
        key: item.name,
        icon: renderIcon(item.meta?.icon || AimOutlined),
      }
      // 是否有子菜单，并递归处理
      if (item.children && item.children.length > 0) {
        // Recursion
        currentMenu.children = useRoutesMenu(item.children)
      }
      return currentMenu
    })
}
