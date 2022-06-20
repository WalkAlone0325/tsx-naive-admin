import { createApp } from 'vue'

import App from './App'
import { setupStore } from './store'
import { router, setupRouter, setupRouterGuard } from './router'
import { DashboardFilled } from '@vicons/antd'

function bootstrap() {
  const app = createApp(App)

  // 全局组件
  app.component('BlankLayout', () => import('@/layout/BlankLayout'))
  app.component('DashboardFilled', DashboardFilled)

  // store
  setupStore(app)

  // router
  setupRouter(app)

  // router guard
  setupRouterGuard(router)

  app.mount('#app')
}

bootstrap()
