import { NLayoutSider } from 'naive-ui'
import Menu from './Menu'

const SideBar = defineComponent({
  setup() {
    const inverted = ref(false)

    return () => (
      <NLayoutSider
        bordered
        showTrigger
        collapseMode="width"
        collapsedWidth={64}
        width={240}
        nativeScrollbar={false}
        inverted={inverted.value}
      >
        <Menu inverted={inverted.value} />
      </NLayoutSider>
    )
  }
})

export default SideBar
