import { defineComponent } from 'vue'
import { NConfigProvider } from 'naive-ui'
import { RouterView } from 'vue-router'

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <NConfigProvider>
        <RouterView />
      </NConfigProvider>
    )
  },
})
