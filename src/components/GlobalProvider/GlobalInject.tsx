import { useDialog, useLoadingBar, useMessage, useNotification } from 'naive-ui'

const GlobalInject = defineComponent({
  name: 'GlobalInject',
  setup() {
    const slots = useSlots()

    // mount
    window.$message = useMessage()
    window.$dialog = useDialog()
    window.$notification = useNotification()
    window.$loadingBar = useLoadingBar()

    return () => <>{slots.default!()}</>
  }
})

export default GlobalInject
