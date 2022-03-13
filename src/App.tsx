import { RouterView } from 'vue-router'
import GlobalProvider from '@/components/GlobalProvider'

export default defineComponent({
  render() {
    return (
      <GlobalProvider>
        <RouterView />
      </GlobalProvider>
    )
  }
})
