import { useSettings } from '@/hooks/use-settings'
import { NBreadcrumb } from 'naive-ui'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Breadcrumb',
  setup() {
    const { breadcrumb } = useSettings()

    return () => <NBreadcrumb v-show={breadcrumb.value}></NBreadcrumb>
  },
})
