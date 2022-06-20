import type { App } from 'vue'
import type { Router } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import PageLayout from '@/layout/PageLayout'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      component: PageLayout,
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/views/Home')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
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
