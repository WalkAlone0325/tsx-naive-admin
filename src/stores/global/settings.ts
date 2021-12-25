import {
  globalTheme as globalThemeLocal,
  sideHeaderTheme as sideHeaderThemeLocal,
  themeEditor as themeEditorLocal,
  menuMode as menuModeLocal,
  showTrigger as showTriggerLocal,
  showLogo as showLogoLocal,
  showBorder as showBorderLocal,
  showBreadcrumb as showBreadcrumbLocal,
  showBreadcrumbIcon as showBreadcrumbIconLocal,
  isFixedHeader as isFixedHeaderLocal,
  adminTitle as adminTitleLocal,
  ISettings
} from '@/settings'

type TSettingKey = keyof ISettings

// localStorage
const settingConfig: ISettings = JSON.parse(window.localStorage.getItem('settingConfig') || '{}')

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
} = settingConfig && settingConfig

export const useSettings = defineStore({
  id: 'settings',
  state: () => ({
    globalTheme: globalTheme || globalThemeLocal,
    sideHeaderTheme: sideHeaderTheme || sideHeaderThemeLocal,
    themeEditor: themeEditor || themeEditorLocal,
    menuMode: menuMode || menuModeLocal,
    showTrigger: showTrigger || showTriggerLocal,
    showLogo: showLogo || showLogoLocal,
    showBorder: showBorder || showBorderLocal,
    showBreadcrumb: showBreadcrumb || showBreadcrumbLocal,
    showBreadcrumbIcon: showBreadcrumbIcon || showBreadcrumbIconLocal,
    isFixedHeader: isFixedHeader || isFixedHeaderLocal,
    adminTitle: adminTitle || adminTitleLocal
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
