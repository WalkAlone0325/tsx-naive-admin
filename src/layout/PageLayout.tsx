import { CSSProperties, defineComponent, KeepAlive, Suspense, Transition } from 'vue'
import type { VNode } from 'vue'
import { NLayout, NLayoutContent, NSpin } from 'naive-ui'
import BaseSider from '@/components/layouts/BaseSider'
import BaseHeader from '@/components/layouts/BaseHeader'
import GlobalDraw from '@/components/GlobalDraw'
import { useSettingStore } from '@/store'
import { RouteLocationNormalizedLoaded, RouterView } from 'vue-router'

const PageLayout = defineComponent({
  name: 'PageLayout',
  setup() {
    const settingStore = useSettingStore()
    const { isShowLogo, isFixedHeader, isCollapse, isShowTagViews, triggerStyle } = $(storeToRefs(settingStore))

    const contentStyle = $computed(() => {
      if (isFixedHeader) {
        if (isShowTagViews) {
          return { marginTop: '85px' }
        } else {
          return { marginTop: '51px' }
        }
      } else {
        return {}
      }
    })

    const supSlots = (
      Component: VNode,
      route: RouteLocationNormalizedLoaded
    ) => {
      return {
        // default: () => <Component key={route.path} />,
        default: () => h(Component, { key: route.path }),
        fallback: () => <NSpin size={'large'} key={route.path} />
      }
    }

    const slots = {
      default: ({
        Component,
        route
      }: {
        Component: VNode
        route: RouteLocationNormalizedLoaded
      }) =>
        Component && (
          <Transition name="fade" mode="out-in">
            <KeepAlive>
              <Suspense v-slots={supSlots(Component, route)}></Suspense>
            </KeepAlive>
          </Transition>
        )
    }

    return () => (
      <NLayout hasSider position="absolute">
        <BaseSider
          isShowLogo={isShowLogo}
          triggerStyle={triggerStyle}
          isCollapse={isCollapse}
          onChangeCollapsed={settingStore.changeSetting}
        />

        <NLayout nativeScrollbar={false}>
          <BaseHeader
            isCollapse={isCollapse}
            triggerStyle={triggerStyle}
            isShowTagViews={isShowTagViews}
          />

          <NLayoutContent
            style={contentStyle}
            position={isFixedHeader ? 'absolute' : 'static'}
            nativeScrollbar={false}
            contentStyle={{ padding: '20px' }}
          >
            <RouterView v-slots={slots}></RouterView>
          </NLayoutContent>
        </NLayout>

        <GlobalDraw />
      </NLayout>
    )
  }
})

export default PageLayout
