import { defineComponent } from 'vue'
import { NLayoutSider } from 'naive-ui'

const BaseSider = defineComponent({
  name: 'BaseSider',
  setup() {
    return () => (
      <NLayoutSider>side</NLayoutSider>
    )
  }
})

export default BaseSider
