import type { App } from 'vue'
export { useSettingStore } from './modules/setting'
export { useTagsViewStore } from './modules/tagsView'

const store = createPinia()

export function setupStore(app: App<Element>) {
  app.use(store)
}
