import { defineComponent, ref } from 'vue'
import { NLayout, NLayoutSider, NLayoutHeader, NLayoutContent, NButton } from 'naive-ui'
import BaseSider from '@/components/layouts/BaseSider'
import BaseHeader from '@/components/layouts/BaseHeader'
import GlobalDraw from '@/components/GlobalDraw'

const PageLayout = defineComponent({
  name: 'PageLayout',
  setup() {
    const isShowDraw = ref(false)

    return () => (
      <NLayout hasSider>
        <BaseSider />
        <NLayout>
          <BaseHeader />
          <NLayoutContent>
            Content
            <NButton onClick={() => (isShowDraw.value = true)}>
              打开设置
            </NButton>
          </NLayoutContent>
        </NLayout>

        <GlobalDraw isShowDraw={isShowDraw.value} />
      </NLayout>
    ) 
  }
})

export default PageLayout