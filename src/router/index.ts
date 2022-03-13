import type { App } from 'vue'
import type { Router } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/store'
import { isLogin } from '@/utils/auth'
import usePermission from '@/hooks/permission'
import { routes } from './routes'
import appRoutes from './modules'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

// router
export function setupRouter(app: App<Element>) {
  app.use(router)
}

// guard
export function setupRouterGuard(router: Router) {
  router.beforeEach((to, from, next) => {
    window.$loadingBar.start()

    const userStore = useUserStore()

    async function crossroads() {
      const permission = usePermission()
      if (permission.accessRouter(to)) await next()
      else {
        const destination = permission.findFirstPermissionRoute(
          appRoutes,
          userStore.role
        ) || {
          name: 'notFound'
        }
        await next(destination)
      }
    }

    next()

    // if (isLogin()) {
    //   if (userStore.role) {
    //     crossroads()
    //   } else {
    //     try {
    //       await userStore.info()
    //       crossroads()
    //     } catch (error) {
    //       next({
    //         name: 'login',
    //         query: {
    //           redirect: to.name,
    //           ...to.query
    //         } as LocationQueryRaw
    //       })
    //     }
    //   }
    // } else {
    //   if (to.name === 'login') {
    //     next()
    //     return
    //   }
    //   next({
    //     name: 'login',
    //     query: {
    //       redirect: to.name,
    //       ...to.query
    //     } as LocationQueryRaw
    //   })
    // }
  })
  router.afterEach(() => {
    window.$loadingBar.finish()
  })
  router.onError(() => {
    window.$loadingBar.error()
  })
}
