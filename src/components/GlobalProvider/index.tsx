import {
  NConfigProvider,
  NDialogProvider,
  NLoadingBarProvider,
  NMessageProvider,
  NNotificationProvider
} from 'naive-ui'
import GlobalInject from './GlobalInject'

const GlobalProvider = defineComponent({
  setup(_, { slots }) {
    return () => (
      <NConfigProvider>
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
})

export default GlobalProvider
