import { NEmpty } from 'naive-ui'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AuthRedirect',
  setup() {
    const hash = window.location.search.slice(1)
    if (window.localStorage) {
      window.localStorage.setItem('x-admin-oauth-code', hash)
      window.close()
    }

    return () => <NEmpty />
  },
})
