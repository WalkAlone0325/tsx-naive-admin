import { defineComponent } from 'vue'
import { NConfigProvider } from 'naive-ui'
import { RouterView } from 'vue-router'
import GlobalProvider from './components/GlobalProvider'
import GloablInject from './components/GlobalProvider/GloablInject'
import '@/styles/index.scss'

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <NConfigProvider>
        <GlobalProvider>
          <GloablInject>
            <RouterView />
          </GloablInject>
        </GlobalProvider>
      </NConfigProvider>
    )
  },
})
