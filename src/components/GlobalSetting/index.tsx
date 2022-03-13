import { useAppStore } from '@/store'
import { NDrawer, NDrawerContent } from 'naive-ui'

const GlobalSetting = defineComponent({
  setup() {
    const appStore = useAppStore()
    const { showDrawer } = storeToRefs(appStore)

    return () => (
      <NDrawer v-model:show={showDrawer.value} width={300}>
        <NDrawerContent title="全局配置">全局配置</NDrawerContent>
      </NDrawer>
    )
  }
})

export default GlobalSetting
