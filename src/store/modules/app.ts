import { getCollapsed, Keys, setCollapsed } from '@/utils/cookies'
import { Module } from 'vuex'
import { IAppState, IRootState } from '../interface'

const appModules: Module<IAppState, IRootState> = {
  namespaced: true,
  state: {
    collapsed: getCollapsed() === 'close' ? true : false || false,
    device: 'desktop',
    size: 'medium',
  },
  mutations: {
    TOGGLE_COLLAPSED: state => {
      state.collapsed = !state.collapsed
      if (state.collapsed) {
        setCollapsed('open')
      } else {
        setCollapsed('close')
      }
    },
  },
  actions: {
    // 切换 collapsed
    toggleCollapsed({ commit }) {
      commit('TOGGLE_COLLAPSED')
    },
  },
}

export default appModules
