import DrawerConfig from '@/components/DrawerConfig'
import PersonalCenter from '@/components/PersonalCenter'
import TooltipIcon from '@/components/TooltipIcon'
import { useSettings } from '@/stores'
import { renderIcon } from '@/utils/utils'
import { LogoGithub, LogOutOutline, ScanCircle } from '@vicons/ionicons5'
import { NLayoutHeader, NMenu, NSpace } from 'naive-ui'
import TheLogo from '../SideBar/TheLogo'
import './index.scss'

const NavHeader = () => {
  const { inverted, adminTitle, menuMode } = storeToRefs(useSettings())

  const menuOptions = ref([
    {
      label: '且听风吟',
      key: 'hear-the-wind-sing',
      icon: renderIcon(LogOutOutline)
    },
    {
      label: '且听风吟',
      key: 'hear-the-wind-sing',
      icon: renderIcon(LogOutOutline)
    },
    {
      label: '且听风吟',
      key: 'hear-the-wind-sing',
      icon: renderIcon(LogOutOutline)
    },
    {
      label: '且听风吟',
      key: 'hear-the-wind-sing',
      icon: renderIcon(LogOutOutline)
    },
    {
      label: '且听风吟',
      key: 'hear-the-wind-sing',
      icon: renderIcon(LogOutOutline)
    },
    {
      label: '且听风吟',
      key: 'hear-the-wind-sing',
      icon: renderIcon(LogOutOutline)
    },
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

  const activeKey = ref(null)

  return (
    <NLayoutHeader class="layout-header-container" bordered>
      {menuMode.value === 'vertical' ? <div /> : null}
      <div class={menuMode.value === 'horizontal' ? 'horizontal-container' : 'vertical-container'}>
        {menuMode.value === 'horizontal' ? (
          <div class="left-container">
            <TheLogo adminTitle={adminTitle.value} />
            <NMenu
              dropdownPlacement="bottom"
              mode="horizontal"
              inverted={inverted.value}
              options={menuOptions.value}
              v-model:value={activeKey.value}
            />
          </div>
        ) : (
          <div class="right-container">
            <NSpace size="small">
              <TooltipIcon tipTitle="全屏" icon={ScanCircle} />
              <TooltipIcon tipTitle="GitHub" icon={LogoGithub} />
            </NSpace>
          </div>
        )}
        <div style={{ marginRight: '20px' }}>
          <PersonalCenter />
        </div>
      </div>
      <DrawerConfig />
    </NLayoutHeader>
  )
}

export default NavHeader
