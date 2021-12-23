import { useApp, useSettings } from '@/stores'
import { NLayoutSider, NMenu } from 'naive-ui'
import TheLogo from './TheLogo.vue'
import './index.scss'
import { renderIcon } from '@/utils/utils'
import { LogOutOutline } from '@vicons/ionicons5'

// const IProps = withDefaults(
//   defineProps<{
//     showTrigger: boolean | 'bar' | 'arrow-circle' | undefined
//     showLogo: boolean
//     showBorder: boolean
//   }>(),
//   {}
// )
interface Props {
  showTrigger: boolean | 'bar' | 'arrow-circle' | undefined
  showLogo: boolean
  showBorder: boolean
}

const SideBar = (props: Props) => {
  // const { showTrigger, showLogo, showBorder } = toRefs(props)
  const { collapsed } = storeToRefs(useApp())
  const appStore = useApp()
  const { adminTitle, inverted } = storeToRefs(useSettings())

  const activeKey = ref(null)

  const menuOptions = ref([
    {
      label: '且听风吟',
      key: 'hear-the-wind-sing',
      icon: renderIcon(LogOutOutline)
    },
    {
      label: '1973年的弹珠玩具',
      key: 'pinball-1973',
      icon: renderIcon(LogOutOutline),
      children: [
        {
          label: '鼠',
          key: 'rat'
        }
      ]
    }
  ])

  return (
    <NLayoutSider
      collapseMode="width"
      inverted={inverted.value}
      showTrigger={props.showTrigger}
      bordered={props.showBorder}
      collapsed={collapsed.value}
      collapsedWidth={64}
      width={240}
      onExpand={appStore.toggleCollapsed}
      onCollapse={appStore.toggleCollapsed}
    >
      <TheLogo
        class="vertical-logo"
        v-show={props.showLogo}
        collapsed={collapsed.value}
        adminTitle={adminTitle.value}
      />
      <NMenu
        inverted={inverted.value}
        collapsed={collapsed.value}
        collapsedWidth={64}
        collapsedIconSize={24}
        options={menuOptions.value}
        v-model:value={activeKey.value}
      />
    </NLayoutSider>
  )
}

export default SideBar
