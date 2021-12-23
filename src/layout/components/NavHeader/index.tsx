import { useSettings } from '@/stores'
import { renderIcon } from '@/utils/utils'
import { LogOutOutline } from '@vicons/ionicons5'
import { NLayoutHeader, NMenu } from 'naive-ui'
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
      {menuMode.value === 'vertical' ? <div /> : <></>}
      <div class={menuMode.value === 'horizontal' ? 'horizontal-container' : 'vertical-container'}>
        {menuMode.value === 'horizontal' ? (
          <div class="left-container">
            {/* <TheLogo adminTitle={adminTitle.value} /> */}
            <NMenu
              dropdownPlacement="bottom"
              mode="horizontal"
              inverted={inverted.value}
              options={menuOptions.value}
              v-model:value={activeKey.value}
            />
          </div>
        ) : (
          <div class="right-container"></div>
        )}
      </div>
    </NLayoutHeader>
  )
}

export default NavHeader
