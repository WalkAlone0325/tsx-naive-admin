import { defineComponent } from 'vue'
import { NDrawer, NDrawerContent } from 'naive-ui'
import { useSettingStore } from '@/store'

const GlobalDraw = defineComponent({
  name: 'GlobalDraw',
  setup(props, { emit }) {
    const settingStore = useSettingStore()
    const { isShowDraw } = storeToRefs(settingStore)

    return () => (
      <NDrawer v-model:show={isShowDraw.value} width={350}>
        <NDrawerContent title="全局配置"></NDrawerContent>
      </NDrawer>
    )
  }
})

export default GlobalDraw
