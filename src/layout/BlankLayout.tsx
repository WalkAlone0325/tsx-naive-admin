import { RouterView } from 'vue-router'

const BlankLayout = defineComponent({
  name: 'BlankLayout',
  setup() {
    return () => <RouterView />
  }
})

export default BlankLayout
