import {
  createDiscreteApi,
  NDialogProvider,
  NLoadingBarProvider,
  NMessageProvider,
  NNotificationProvider
} from 'naive-ui'
// import { useMessage, useDialog, useLoadingBar, useNotification } from 'naive-ui'

const GlobalProvider = defineComponent({
  name: 'GlobalProvider',
  setup(_, { slots }) {
    return () => (
      <NDialogProvider>
        <NNotificationProvider>
          <NMessageProvider>
            <NLoadingBarProvider>
              <GlobalInject>{slots.default!()}</GlobalInject>
            </NLoadingBarProvider>
          </NMessageProvider>
        </NNotificationProvider>
      </NDialogProvider>
    )
  }
})

// 注入到 window 上
// const GlobalInject = defineComponent({
//   name: 'GlovalInject',
//   setup(_, { slots }) {
//     window.$dialog = useDialog()
//     window.$message = useMessage()
//     window.$loadingBar = useLoadingBar()
//     window.$notification = useNotification()

//     return () => <>{slots.default!()}</>
//   }
// })

const GlobalInject = defineComponent({
  name: 'GlovalInject',
  setup(_, { slots }) {
    const { message, notification, dialog, loadingBar } = createDiscreteApi(
      ['message', 'dialog', 'notification', 'loadingBar'],
      {
        // configProviderProps: {}
      }
    )

    window.$dialog = dialog
    window.$message = message
    window.$loadingBar = loadingBar
    window.$notification = notification

    return () => <>{slots.default!()}</>
  }
})

export default GlobalProvider
