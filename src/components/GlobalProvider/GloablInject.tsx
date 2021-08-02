import { defineComponent } from 'vue'
import { useMessage, useDialog, useLoadingBar, useNotification } from 'naive-ui'

export default defineComponent({
  name: 'InjectGlobal',
  setup(_, { slots }) {
    window.$dialog = useDialog()
    window.$message = useMessage()
    window.$loadingBar = useLoadingBar()
    window.$notification = useNotification()

    return () => <>{slots.default!()}</>
  },
})
