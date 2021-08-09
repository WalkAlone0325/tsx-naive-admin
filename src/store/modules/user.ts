import { getToken, setToken } from '@/utils/cookies'
import { Module } from 'vuex'
import { IRootState, IUserState } from '../interface'

const userModule: Module<IUserState, IRootState> = {
  namespaced: true,
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    roles: [],
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
  },
  actions: {
    login({ commit }, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        // login({ username, password })
        //   .then(response => {
        //     commit('SET_TOKEN', response.data.token)
        //     setToken(response.data.token)
        //     resolve()
        //   })
        //   .catch(error => {
        //     reject(error)
        //   })
      })
    },
  },
}

export default userModule
