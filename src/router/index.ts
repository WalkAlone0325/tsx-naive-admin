import type { App } from 'vue'
import type { Router } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import { constantRoutes } from './routes'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoutes,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

// router
export function setupRouter(app: App<Element>) {
  app.use(router)
}

// guard
export function setupRouterGuard(router: Router) {
  router.beforeEach((to, from, next) => {
    next()
  })
}
