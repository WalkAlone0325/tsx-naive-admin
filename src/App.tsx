import { defineComponent } from 'vue'
import { darkTheme, NConfigProvider, dateZhCN, zhCN } from 'naive-ui'
import { RouterView } from 'vue-router'
import GlobalProvider from './components/GlobalProvider'
import GloablInject from './components/GlobalProvider/GloablInject'
import '@/styles/index.scss'
import { useSettings } from './hooks/use-settings'

export default defineComponent({
  name: 'App',
  setup() {
    const { globalTheme } = useSettings()

    return () => (
      <NConfigProvider
        theme={globalTheme.value === 'darkTheme' ? darkTheme : undefined}
        locale={zhCN}
        dateLocale={dateZhCN}>
        <GlobalProvider>
          <GloablInject>
            <RouterView />
          </GloablInject>
        </GlobalProvider>
      </NConfigProvider>
    )
  },
})
