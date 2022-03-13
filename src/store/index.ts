import type { App } from 'vue'
import { useAppStore } from './modules/app'

const store = createPinia()

export { useAppStore }

export function setupStore(app: App<Element>) {
  app.use(store)
}
