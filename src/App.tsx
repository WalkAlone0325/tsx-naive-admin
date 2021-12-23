import {
  NConfigProvider,
  NLoadingBarProvider,
  NMessageProvider,
  NNotificationProvider,
  darkTheme,
  zhCN,
  dateZhCN
} from 'naive-ui'
import { RouterView } from 'vue-router'
import { useSettings } from '@/stores'

const App = () => {
  const { globalTheme } = storeToRefs(useSettings())

  return (
    <NConfigProvider
      theme={globalTheme.value === 'darkTheme' ? darkTheme : undefined}
      dateLocale={dateZhCN}
      locale={zhCN}
    >
      <NMessageProvider>
        <NNotificationProvider>
          <NLoadingBarProvider>
            <RouterView />
          </NLoadingBarProvider>
        </NNotificationProvider>
      </NMessageProvider>
    </NConfigProvider>
  )
}

export default App

{
  /* <script setup lang="ts">
import { useSettings } from '@/stores'
import { darkTheme, zhCN, dateZhCN } from 'naive-ui'

const { globalTheme } = toRefs(useSettings())

// const THEME_LIST = {
//   darkTheme: darkTheme,
//   lightTheme: null,
//   sideDarkTheme: ''
// }
</script>

<template>
  <n-config-provider
    :theme="globalTheme === 'darkTheme' ? darkTheme : undefined"
    :date-locale="dateZhCN"
    :locale="zhCN"
  >
    <n-message-provider>
      <n-notification-provider>
        <n-loading-bar-provider>
          <router-view />
        </n-loading-bar-provider>
      </n-notification-provider>
    </n-message-provider>
  </n-config-provider>
</template> */
}
