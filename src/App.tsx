import { defineComponent } from 'vue'
import { darkTheme, NConfigProvider, NThemeEditor, dateZhCN, zhCN } from 'naive-ui'
import { RouterView } from 'vue-router'
import GlobalProvider from './components/GlobalProvider'
import GloablInject from './components/GlobalProvider/GloablInject'
import '@/styles/index.scss'
import { useSettings } from './hooks/use-settings'

export default defineComponent({
  name: 'App',
  setup() {
    const { globalTheme, themeEditor } = useSettings()

    return () => (
      <NConfigProvider
        theme={globalTheme.value === 'darkTheme' ? darkTheme : undefined}
        locale={zhCN}
        dateLocale={dateZhCN}>
        <GlobalProvider>
          <GloablInject>
            {themeEditor.value ? (
              <NThemeEditor>
                <RouterView />
              </NThemeEditor>
            ) : (
              <RouterView />
            )}
          </GloablInject>
        </GlobalProvider>
      </NConfigProvider>
    )
  },
})
