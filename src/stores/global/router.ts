import { constantRoutes } from '@/router/routes'
import { RouteRecordRaw } from 'vue-router'

interface IRouterList {
  routes: RouteRecordRaw[]
}

export const useRouterList = defineStore({
  id: 'routerList',
  state: (): IRouterList => ({
    routes: []
  }),
  actions: {
    generateRoutes() {
      const routesList: RouteRecordRaw[] = []

      constantRoutes
        .filter((i) => !i.meta?.hidden)
        .map((route) => {
          console.log(route)
          if (route.children && route.children.length) {
            route.children.map((child) => {
              routesList.push(child)
            })
          }
        })

      this.routes = routesList
    }
  }
})
