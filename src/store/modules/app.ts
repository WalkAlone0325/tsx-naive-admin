import { Module } from 'vuex'
import { IAppState, IRootState } from '../interface'

const appModules: Module<IAppState, IRootState> = {
  namespaced: true,
  state: {
    collapsed: false,
    device: 'desktop',
    size: 'medium',
  },
  mutations: {
    TOGGLE_COLLAPSED: state => {
      state.collapsed = !state.collapsed
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
