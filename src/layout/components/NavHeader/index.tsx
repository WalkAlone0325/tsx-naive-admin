import Breadcrumb from '@/components/Breadcrumb'
import DrawerConfig from '@/components/DrawerConfig'
import PersonalCenter from '@/components/PersonalCenter'
import TooltipIcon from '@/components/TooltipIcon'
import { useMenus } from '@/hooks/use-menus'
import { useRouterList, useSettings } from '@/stores'
import { LogoGithub, ScanCircle } from '@vicons/ionicons5'
import { NLayoutHeader, NMenu, NSpace } from 'naive-ui'
import TheLogo from '../SideBar/TheLogo'
import './index.scss'

const NavHeader = () => {
  const route = useRoute()
  const { inverted, adminTitle, menuMode, showBorder } = storeToRefs(useSettings())

  const { routes } = useRouterList()
  const menuOptions = useMenus(toRaw(routes))

  // 全屏
  const { toggle, isSupported } = useFullscreen()
  const handleClickScreen = () => {
    isSupported && toggle()
  }
  // github
  const href = 'https://github.com/WalkAlone0325/tsx-naive-admin'
  const handleToGithub = () => {
    window.open(href)
  }

  // 高亮选中菜单
  const activeKey = ref(route.name)
  watch(
    () => route.fullPath,
    () => (activeKey.value = route.name)
  )

  return (
    <NLayoutHeader
      class="layout-header-container"
      bordered={showBorder.value}
      inverted={menuMode.value === 'horizontal' ? inverted.value : false}
    >
      {menuMode.value === 'vertical' ? (
        <div>
          <Breadcrumb />
        </div>
      ) : null}

      <div class={menuMode.value === 'horizontal' ? 'horizontal-container' : 'vertical-container'}>
        {menuMode.value === 'horizontal' ? (
          <div class="left-container">
            <TheLogo adminTitle={adminTitle.value} />
            <NMenu
              class="menu-container--horizontal"
              dropdownPlacement="bottom"
              mode="horizontal"
              inverted={inverted.value}
              options={menuOptions}
              v-model:value={activeKey.value}
            />
          </div>
        ) : null}
        {menuMode.value === 'vertical' ? (
          <div class="right-container">
            <NSpace size="small">
              <TooltipIcon tipTitle="全屏" icon={ScanCircle} onClick={handleClickScreen} />
              <TooltipIcon tipTitle="GitHub" icon={LogoGithub} onClick={handleToGithub} />
            </NSpace>
          </div>
        ) : null}
        <div style={{ marginRight: '20px' }}>
          <PersonalCenter />
        </div>
      </div>
      <DrawerConfig />
    </NLayoutHeader>
  )
}

export default NavHeader
