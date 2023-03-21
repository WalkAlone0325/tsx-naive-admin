import { NEl, NLayout, NLayoutContent } from 'naive-ui'
import BaseSider from '@/components/layouts/BaseSider'
import BaseHeader from '@/components/layouts/BaseHeader'
import GlobalDraw from '@/components/GlobalDraw'
import { useSettingStore, useTagsViewStore } from '@/store'
import AppMain from '@/components/layouts/AppMain'
import TagsView from '@/components/TagsView'

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
    } = storeToRefs(settingStore)
    const tagsViewStore = useTagsViewStore()
    const { visitedViews, cachedViews } = storeToRefs(tagsViewStore)

    watchEffect(() => {
      console.log(cachedViews.value)
    })

    const contentStyle = computed(() => {
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
        {menuMode.value === 'vertical' && (
          <BaseSider
            isShowLogo={isShowLogo.value}
            triggerStyle={triggerStyle.value}
            isCollapse={isCollapse.value}
            isInverted={isInverted.value}
            collapsedIconSize={collapsedIconSize.value}
            collapsedWidth={collapsedWidth.value}
            menuMode={menuMode.value}
            onChangeCollapsed={settingStore.changeSetting}
          />
        )}

        <NLayout nativeScrollbar={false}>
          <BaseHeader
            isCollapse={isCollapse.value}
            triggerStyle={triggerStyle.value}
            isInverted={isInverted.value}
            collapsedIconSize={collapsedIconSize.value}
            collapsedWidth={collapsedWidth.value}
            menuMode={menuMode.value}
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
              <TagsView />
            </NEl>
          )}

          <NLayoutContent
            style={contentStyle.value}
            position={isFixedHeader ? 'absolute' : 'static'}
            nativeScrollbar={false}
            contentStyle={{ padding: '20px' }}
          >
            <AppMain cachedViews={cachedViews.value} />
          </NLayoutContent>
        </NLayout>

        <GlobalDraw />
      </NLayout>
    )
  }
})

export default PageLayout
