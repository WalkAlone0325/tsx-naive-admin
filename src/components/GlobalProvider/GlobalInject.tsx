import { useMessage, useDialog, useNotification, useLoadingBar } from 'naive-ui'

const GlobalInject = () => {
  const slots = useSlots()

  // mount on window
  window.$message = useMessage()
  window.$dialog = useDialog()
  window.$notification = useNotification()
  window.$loadingBar = useLoadingBar()

  return <>{slots.default!()}</>
}

export default GlobalInject
