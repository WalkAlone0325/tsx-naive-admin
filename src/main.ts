import { createApp } from 'vue'

import App from './App'
import { setupStore } from './store'
import { router, setupRouter, setupRouterGuard } from './router'

function bootstrap() {
  const app = createApp(App)

  // 全局组件
  app.component('BlankLayout', () => import('@/layout/BlankLayout'))

  // store
  setupStore(app)

  // router
  setupRouter(app)

  // router guard
  setupRouterGuard(router)

  app.mount('#app')
}

bootstrap()
