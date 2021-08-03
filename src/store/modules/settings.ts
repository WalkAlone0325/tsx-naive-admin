import { ISettings } from '@/types/vite-env'
import { Module } from 'vuex'
import { IRootState } from '../interface'
import defaultSettings from '@/settings'

const {
  globalTheme,
  sideOrHeaderTheme,
  themeEditor,
  menuMode,
  showTrigger,
  showLogo,
  tagsView,
  breadcrumb,
  fixedHeader,
  adminTitle,
} = defaultSettings

type TKey = keyof ISettings

const settingsModule: Module<ISettings, IRootState> = {
  namespaced: true,
  state: {
    globalTheme,
    sideOrHeaderTheme,
    themeEditor,
    menuMode,
    showTrigger,
    showLogo,
    tagsView,
    breadcrumb,
    fixedHeader,
    adminTitle,
  },
  mutations: {
    CHANGE_SETTING: (state, { key, value }: { key: TKey; value: string | boolean }) => {
      if (state.hasOwnProperty(key)) {
        ;(state[key] as string | boolean) = value
      }
    },
  },
  actions: {
    changeSetting({ commit }, data: string | boolean) {
      commit('CHANGE_SETTING', data)
    },
  },
}

export default settingsModule
