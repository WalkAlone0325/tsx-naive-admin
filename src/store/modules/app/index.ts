import type { AppState } from './types'

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    collapsed: false,
    showDrawer: false
  }),

  actions: {
    updateSettings(partial: Partial<AppState>) {
      this.$patch(partial)
    }
  }
})
