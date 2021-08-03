import { computed } from 'vue'
import { useStore } from '@/store'

export function useSettings() {
  const store = useStore()

  return {
    globalTheme: computed(() => store.state.settings.globalTheme),
    sideOrHeaderTheme: computed(() => store.state.settings.sideOrHeaderTheme),
    themeEditor: computed(() => store.state.settings.themeEditor),
    menuMode: computed(() => store.state.settings.menuMode),
    showTrigger: computed(() => store.state.settings.showTrigger),
    showLogo: computed(() => store.state.settings.showLogo),
    tagsView: computed(() => store.state.settings.tagsView),
    breadcrumb: computed(() => store.state.settings.breadcrumb),
    fixedHeader: computed(() => store.state.settings.fixedHeader),
    adminTitle: computed(() => store.state.settings.adminTitle),
  }
}
