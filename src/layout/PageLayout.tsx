import { defineComponent, KeepAlive, Suspense, Transition } from 'vue'
import { NLayout, NLayoutContent, NSpin } from 'naive-ui'
import BaseSider from '@/components/layouts/BaseSider'
import BaseHeader from '@/components/layouts/BaseHeader'
import GlobalDraw from '@/components/GlobalDraw'
import { useSettingStore } from '@/store'
import { RouterView } from 'vue-router'

const PageLayout = defineComponent({
  name: 'PageLayout',
  setup() {
    const settingStore = useSettingStore()
    const { isShowLogo, isFixedHeader } = storeToRefs(settingStore)

    const supSlots = (Component, route) => {
      return {
        default: () => <Component key={route.path} />,
        fallback: () => <NSpin size={'large'} />
      }
    }

    const slots = {
      default: ({ Component, route }) =>
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
        <BaseSider isShowLogo={isShowLogo.value} />

        <NLayout nativeScrollbar={false}>
          <BaseHeader />

          <NLayoutContent
            style={isFixedHeader.value ? { marginTop: '84px' } : {}}
            position={isFixedHeader.value ? 'absolute' : 'static'}
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
