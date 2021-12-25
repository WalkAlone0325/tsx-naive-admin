import { useApp, useRouterList, useSettings } from '@/stores'
import { NLayoutSider, NMenu } from 'naive-ui'
import TheLogo from './TheLogo'
import { useMenus } from '@/hooks/use-menus'
import './index.scss'

interface Props {
  showTrigger: boolean | 'bar' | 'arrow-circle' | undefined
  showLogo: boolean
  showBorder: boolean
  collapsed: boolean
}

const SideBar = (props: Props) => {
  const appStore = useApp()
  const { adminTitle, inverted } = storeToRefs(useSettings())

  const activeKey = ref(null)

  // 生成侧边栏菜单
  const { routes } = useRouterList()
  const menuOptions = useMenus(toRaw(routes))

  return (
    <NLayoutSider
      collapseMode="width"
      inverted={inverted.value}
      showTrigger={props.showTrigger}
      bordered={props.showBorder}
      collapsed={props.collapsed}
      collapsedWidth={64}
      width={240}
      onExpand={appStore.toggleCollapsed}
      onCollapse={appStore.toggleCollapsed}
    >
      <TheLogo
        class="vertical-logo"
        v-show={props.showLogo}
        collapsed={props.collapsed}
        adminTitle={adminTitle.value}
      />
      <NMenu
        inverted={inverted.value}
        collapsed={props.collapsed}
        collapsedWidth={64}
        collapsedIconSize={24}
        options={menuOptions}
        v-model:value={activeKey.value}
      />
    </NLayoutSider>
  )
}

export default SideBar
