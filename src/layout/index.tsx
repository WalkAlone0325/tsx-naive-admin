import { NLayout, NLayoutContent, NScrollbar } from 'naive-ui'
import SideBar from './components/SideBar'
import NavHeader from './components/NavHeader'
import AppMain from './components/AppMain'
import { useApp, useSettings } from '@/stores'

const BaseLayout = () => {
  const { isFixedHeader, showLogo, showTrigger, showBorder, menuMode } = storeToRefs(useSettings())
  const { collapsed } = storeToRefs(useApp())

  return (
    <NLayout class="layout-container" hasSider position="absolute">
      {menuMode.value === 'vertical' ? (
        <SideBar
          showLogo={showLogo.value}
          showTrigger={showTrigger.value}
          showBorder={showBorder.value}
          collapsed={collapsed.value}
        />
      ) : null}
      <NLayout>
        <NScrollbar>
          <NavHeader />
          <NLayoutContent
            class="layout-content"
            nativeScrollbar
            position={isFixedHeader.value ? 'absolute' : 'static'}
            style={isFixedHeader.value ? { top: '64px' } : {}}
            contentStyle={{ padding: '10px' }}
          >
            <NScrollbar>
              <AppMain />
            </NScrollbar>
          </NLayoutContent>
        </NScrollbar>
      </NLayout>
    </NLayout>
  )
}

export default BaseLayout
