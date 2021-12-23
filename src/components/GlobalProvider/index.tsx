import {
  NConfigProvider,
  NLoadingBarProvider,
  NMessageProvider,
  NNotificationProvider,
  darkTheme,
  zhCN,
  dateZhCN,
  NDialogProvider
} from 'naive-ui'
import GlobalInject from './GlobalInject'
import { useSettings } from '@/stores'

const GlobalProvider = () => {
  const slots = useSlots()
  const { globalTheme } = storeToRefs(useSettings())
  return (
    <NConfigProvider
      theme={globalTheme.value === 'darkTheme' ? darkTheme : undefined}
      dateLocale={dateZhCN}
      locale={zhCN}
    >
      <NDialogProvider>
        <NNotificationProvider>
          <NMessageProvider>
            <NLoadingBarProvider>
              <GlobalInject>{slots.default!()}</GlobalInject>
            </NLoadingBarProvider>
          </NMessageProvider>
        </NNotificationProvider>
      </NDialogProvider>
    </NConfigProvider>
  )
}

export default GlobalProvider
