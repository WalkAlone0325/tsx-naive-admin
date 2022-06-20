import { createApp } from 'vue'

import App from './App'
import { setupStore } from './stores'
import { router, setupRouter, setupRouterGuard } from './router'

function bootstrap() {
  const app = createApp(App)

  // store
  setupStore(app)

  // router
  setupRouter(app)

  // router guard
  setupRouterGuard(router)

  app.mount('#app')
}

bootstrap()
