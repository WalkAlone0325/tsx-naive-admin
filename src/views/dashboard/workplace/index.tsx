import { useSettingStore } from '@/store'
import { NButton } from 'naive-ui'

const WorkPlaceView = defineComponent({
  name: 'WorkPlaceView',
  setup() {
    const settingStore = useSettingStore()
    let { isShowLogo } = $(storeToRefs(settingStore))

    const click = () => {
      settingStore.changeSetting('isShowLogo', !isShowLogo)
    }

    return () => <div>WorkPlaceView
      <NButton onClick={click}>按钮</NButton>
    </div>
  }
})

export default WorkPlaceView
