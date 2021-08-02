import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

export default defineComponent({
  name: 'Layout',
  setup() {
    return () => <RouterView />
  },
})
