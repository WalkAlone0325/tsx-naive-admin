import settings, { ISettings } from '@/settings'

const {
  globalTheme,
  sideHeaderTheme,
  themeEditor,
  menuMode,
  showTrigger,
  showLogo,
  showBorder,
  showBreadcrumb,
  showBreadcrumbIcon,
  isFixedHeader,
  adminTitle
} = settings

type TSettingKey = keyof ISettings

export const useSettings = defineStore({
  id: 'settings',
  state: () => ({
    globalTheme,
    sideHeaderTheme,
    themeEditor,
    menuMode,
    showTrigger,
    showLogo,
    showBorder,
    showBreadcrumb,
    showBreadcrumbIcon,
    isFixedHeader,
    adminTitle
  }),
  getters: {
    inverted: (state) => state.globalTheme === 'sideDarkTheme'
  },
  actions: {
    changeSetting(settingKey: TSettingKey, data?: string | boolean) {
      console.log(settingKey, data)
      this[settingKey] = data
    }
  }
})
