import { CSSProperties, defineComponent } from 'vue'
import { NLayout, NLayoutContent, NLayoutFooter, NLayoutHeader, NLayoutSider } from 'naive-ui'
import NavBar from './components/NavBar'
import AppMain from './components/AppMain'
import { useSettings } from '@/hooks/use-settings'
import SideBar from './components/SideBar'

export default defineComponent({
  name: 'Layout',
  setup() {
    const { menuMode, fixedHeader } = useSettings()

    // 是否固定头部
    const position = fixedHeader.value ? 'absolute' : 'static'
    const marginStyle: CSSProperties = fixedHeader.value ? { marginTop: '84px' } : {}

    return () => (
      <NLayout hasSider position="absolute">
        <NLayoutSider bordered>
          <SideBar />
        </NLayoutSider>

        <NLayout nativeScrollbar={false}>
          {/* 顶栏部分 */}
          <NLayoutHeader>
            <NavBar />
          </NLayoutHeader>

          {/* 主体内容 */}
          <NLayoutContent
            contentStyle={{ padding: '24px' }}
            nativeScrollbar={false}
            style={marginStyle}
            position={position}>
            {/* 路由展示 */}
            <AppMain />

            {/* 底部 */}
            <NLayoutFooter>
              <h2>底部</h2>
            </NLayoutFooter>
          </NLayoutContent>
        </NLayout>
      </NLayout>
    )
  },
})
