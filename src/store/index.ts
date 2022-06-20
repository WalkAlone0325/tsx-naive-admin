import { createPinia } from 'pinia'
import type { App } from 'vue'
export { useSettingStore } from './modules/setting'

const store = createPinia()

export function setupStore(app: App<Element>) {
  app.use(store)
}
