import { defineComponent, ref } from 'vue'
import {
  NLayout,
  NLayoutSider,
  NLayoutHeader,
  NLayoutContent,
  NButton,
  NH2
} from 'naive-ui'
import BaseSider from '@/components/layouts/BaseSider'
import BaseHeader from '@/components/layouts/BaseHeader'
import GlobalDraw from '@/components/GlobalDraw'
import { useSettingStore } from '@/store'

const PageLayout = defineComponent({
  name: 'PageLayout',
  setup() {
    const settingStore = useSettingStore()
    const { isShowDraw, isFixedHeader } = storeToRefs(settingStore)

    return () => (
      <NLayout hasSider position="absolute">
        <BaseSider />

        <NLayout nativeScrollbar={false}>
          <BaseHeader />

          <NLayoutContent
            style={isFixedHeader.value ? { marginTop: '84px' } : {}}
            position={isFixedHeader.value ? 'absolute' : 'static'}
            nativeScrollbar={false}
            contentStyle={{ padding: '20px' }}
          >
            Content
            <NButton onClick={() => (isShowDraw.value = true)}>
              打开设置
            </NButton>
            <NH2>海淀桥</NH2>
            <NH2>海淀桥</NH2>
            <NH2>海淀桥</NH2>
            <NH2>海淀桥</NH2>
            <NH2>海淀桥</NH2>
            <NH2>海淀桥</NH2>
            <NH2>海淀桥</NH2>
            <NH2>海淀桥</NH2>
            <NH2>海淀桥</NH2>
            <NH2>海淀桥</NH2>
            <NH2>海淀桥</NH2>
            <NH2>海淀桥</NH2>
            <NH2>海淀桥</NH2>
            <NH2>海淀桥</NH2>
            <NH2>海淀桥</NH2>
            <NH2>海淀桥</NH2>
            <NH2>海淀桥</NH2>
            <NH2>海淀桥</NH2>
          </NLayoutContent>
        </NLayout>

        <GlobalDraw />
      </NLayout>
    )
  }
})

export default PageLayout
