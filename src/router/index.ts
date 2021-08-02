import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoutes } from './routes'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: constantRoutes,
})

export function resetRouter(): void {
  router.getRoutes().map(route => {
    const { name } = route
    if (name) {
      router.hasRoute(name) && router.removeRoute(name)
    }
  })
}

export default router
