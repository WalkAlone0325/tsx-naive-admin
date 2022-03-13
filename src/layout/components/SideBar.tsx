import { NLayoutSider } from 'naive-ui'
import Logo from '@/components/Logo'
import Menu from './Menu'
import { useAppStore } from '@/store'

const SideBar = defineComponent({
  setup() {
    const appStore = useAppStore()
    const { collapsed } = storeToRefs(appStore)

    const updateCollapsed = () => {
      appStore.updateSettings({
        collapsed: !collapsed.value
      })
    }

    const inverted = ref(false)

    return () => (
      <NLayoutSider
        bordered
        showTrigger="bar"
        position="static"
        collapsed={collapsed.value}
        collapseMode="width"
        collapsedWidth={50}
        width={200}
        nativeScrollbar={false}
        inverted={inverted.value}
        onUpdateCollapsed={updateCollapsed}
      >
        <Logo collapsed={collapsed.value} />
        <Menu inverted={inverted.value} collapsed={collapsed.value} />
      </NLayoutSider>
    )
  }
})

export default SideBar
