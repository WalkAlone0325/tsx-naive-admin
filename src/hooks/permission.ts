import { useUserStore } from '@/store'
import type { RouteLocationNormalized, RouteRecordRaw } from 'vue-router'

export default function usePermission() {
  const userStore = useUserStore()

  function accessRouter(route: RouteLocationNormalized | RouteRecordRaw) {
    return (
      !route.meta?.requiresAuth ||
      !route.meta.role ||
      route.meta.role.includes('*') ||
      route.meta.role.includes(userStore.role)
    )
  }

  function findFirstPermissionRoute(_routers: any, role = 'admin') {
    const cloneRouters = [..._routers]

    while (cloneRouters.length) {
      const firstElement: RouteRecordRaw = cloneRouters.shift()
      if (
        firstElement?.meta?.role?.find((el: string) => {
          return el.includes('*') || el.includes(role)
        })
      )
        return { name: firstElement.name }

      if (firstElement.children) {
        cloneRouters.push(...firstElement.children)
      }
    }
    return null
  }

  return {
    accessRouter,
    findFirstPermissionRoute
  }
}
