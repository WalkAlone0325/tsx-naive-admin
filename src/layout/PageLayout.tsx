import { NEl, NLayout, NLayoutContent } from 'naive-ui'
import BaseSider from '@/components/layouts/BaseSider'
import BaseHeader from '@/components/layouts/BaseHeader'
import GlobalDraw from '@/components/GlobalDraw'
import { useSettingStore } from '@/store'
import AppMain from '@/components/layouts/AppMain'

const PageLayout = defineComponent({
  name: 'PageLayout',
  setup() {
    const settingStore = useSettingStore()
    const {
      isShowLogo,
      isFixedHeader,
      isCollapse,
      isShowTagViews,
      isInverted,
      triggerStyle,
      collapsedIconSize,
      collapsedWidth,
      menuMode
    } = $(storeToRefs(settingStore))

    const contentStyle = $computed(() => {
      if (isFixedHeader) {
        if (isShowTagViews) {
          return { marginTop: '84px' }
        } else {
          return { marginTop: '50px' }
        }
      } else {
        return {}
      }
    })

    return () => (
      <NLayout hasSider position="absolute">
        {menuMode === 'vertical' && (
          <BaseSider
            isShowLogo={isShowLogo}
            triggerStyle={triggerStyle}
            isCollapse={isCollapse}
            isInverted={isInverted}
            collapsedIconSize={collapsedIconSize}
            collapsedWidth={collapsedWidth}
            menuMode={menuMode}
            onChangeCollapsed={settingStore.changeSetting}
          />
        )}

        <NLayout nativeScrollbar={false}>
          <BaseHeader
            isCollapse={isCollapse}
            triggerStyle={triggerStyle}
            isInverted={isInverted}
            collapsedIconSize={collapsedIconSize}
            collapsedWidth={collapsedWidth}
            menuMode={menuMode}
          />

          {isShowTagViews && (
            <NEl
              style={{
                height: '34px',
                background: 'var(--body-color)',
                borderBottom: '1px solid var(--divider-color)',
                transition: 'all 0.3s var(--cubic-bezier-ease-in-out)'
              }}
            >
              tagviews
            </NEl>
          )}

          <NLayoutContent
            style={contentStyle}
            position={isFixedHeader ? 'absolute' : 'static'}
            nativeScrollbar={false}
            contentStyle={{ padding: '20px' }}
          >
            <AppMain />
          </NLayoutContent>
        </NLayout>

        <GlobalDraw />
      </NLayout>
    )
  }
})

export default PageLayout
