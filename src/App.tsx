import {
  darkTheme,
  dateZhCN,
  GlobalTheme,
  NConfigProvider,
  zhCN
} from 'naive-ui'
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import GlobalProvider from '@/components/GlobalProvider'

export default defineComponent({
  name: 'App',
  setup() {
    const globalTheme = $ref<GlobalTheme | null | undefined>()

    return () => (
      <NConfigProvider theme={globalTheme} locale={zhCN} dateLocale={dateZhCN}>
        <GlobalProvider>
          <RouterView />
        </GlobalProvider>
      </NConfigProvider>
    )
  }
})
