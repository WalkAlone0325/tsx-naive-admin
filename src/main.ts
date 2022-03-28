import App from './App'

// global less
import '@/style/index.less'

import { router, setupRouter, setupRouterGuard } from '@/router'
import { setupStore } from '@/store'
import { setupIcons } from './icons'

async function bootstrap() {
  const app = createApp(App)

  // icons
  setupIcons(app)

  // store
  setupStore(app)

  // router
  setupRouter(app)

  await router.isReady()

  // router guard
  setupRouterGuard(router)

  // mount
  app.mount('#app')
}

bootstrap()
