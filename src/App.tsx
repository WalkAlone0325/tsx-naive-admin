import { darkTheme, NConfigProvider } from 'naive-ui'
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <NConfigProvider theme={darkTheme}>
        <RouterView />
      </NConfigProvider>
    )
  }
})
