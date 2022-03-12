import App from './App.vue'

// your global css

import { router, setupRouter, setupRouterGuard } from '@/router'
import { setupStore } from '@/store'

function bootstrap() {
  const app = createApp(App)

  // store
  setupStore(app)

  // router
  setupRouter(app)

  // router guard
  setupRouterGuard(router)

  // mount
  app.mount('#app')
}

bootstrap()
