import type { App } from 'vue'
import { useAppStore } from './modules/app'
import { useUserStore } from './modules/user'

const store = createPinia()

export { useAppStore, useUserStore }

export function setupStore(app: App<Element>) {
  app.use(store)
}
