import type { UserState } from './types'

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    name: undefined,
    avatar: undefined,
    role: '*'
  }),

  getters: {
    userInfo(state: UserState): UserState {
      return { ...state }
    }
  },

  actions: {
    setInfo(partial: Partial<UserState>) {
      this.$patch(partial)
    },

    resetInfo() {
      this.$reset()
    },

    async info() {
      // const res = await getUserInfo()
      this.setInfo({ name: 'starry', avatar: '', role: '*' })
    }
  }
})
