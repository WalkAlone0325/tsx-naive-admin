import { darkTheme, dateZhCN, NConfigProvider, zhCN } from 'naive-ui'
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import GlobalProvider from '@/components/GlobalProvider'
import { useSettingStore } from './store'

export default defineComponent({
  name: 'App',
  setup() {
    const settingStore = useSettingStore()
    const { globalTheme } = $(storeToRefs(settingStore))

    const theme = $computed(() => {
      if (globalTheme === 'darkTheme') {
        return darkTheme
      } else {
        return null
      }
    })

    return () => (
      <NConfigProvider theme={theme} locale={zhCN} dateLocale={dateZhCN}>
        <GlobalProvider>
          <RouterView />
        </GlobalProvider>
      </NConfigProvider>
    )
  }
})
