import { RouteRecordRaw } from 'vue-router'

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

export function useRoutesMenu(routes: RouteRecordRaw[]) {
  let menuItem
  routes
    .filter(item => !item.meta || !item.meta.hidden)
    .map(route => {
      if (
        hasOneShowingChild(route.children, route) &&
        (!onlyOneChild.children || onlyOneChild.noShowingChildren) &&
        !route.meta?.alwaysShow
      ) {
        menuItem = route
        console.log('if', menuItem)
      } else {
        menuItem = route
        // if (route.children) {
        menuItem.children = useRoutesMenu(route.children)
        // }
        console.log('else', menuItem)
      }
      // return menuItem
    })
}
