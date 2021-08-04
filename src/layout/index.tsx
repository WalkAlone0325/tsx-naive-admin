import { computed, CSSProperties, defineComponent, Ref, ref, watch } from 'vue'
import { NLayout, NLayoutContent, NLayoutFooter, NLayoutHeader, NLayoutSider } from 'naive-ui'
import NavBar from './components/NavBar'
import AppMain from './components/AppMain'
import Logo from './components/Logo'
import { useSettings } from '@/hooks/use-settings'
import SideBar from './components/SideBar'
import { useStore } from '@/store'

export default defineComponent({
  name: 'Layout',
  setup() {
    const store = useStore()

    // computed
    const { menuMode, fixedHeader, showTrigger, showLogo } = useSettings()
    const collapsed = computed(() => store.getters.collapsed)

    // 是否固定头部
    let position: Ref<'absolute' | 'static'> = ref('static')
    let marginStyle: Ref<CSSProperties> = ref({})

    watch(
      () => fixedHeader.value,
      () => {
        if (fixedHeader.value) {
          position.value = 'absolute'
          marginStyle.value = { marginTop: '84px' }
        } else {
          position.value = 'static'
          marginStyle.value = {}
        }
      },
    )
    // const position = fixedHeader.value ? 'absolute' : 'static'
    // const marginStyle: CSSProperties = fixedHeader.value ? { marginTop: '84px' } : {}

    return () => (
      <NLayout hasSider position="absolute">
        {menuMode.value === 'vertical' ? (
          <NLayoutSider
            bordered
            collapseMode="width"
            nativeScrollbar={false}
            width={220}
            collapsedWidth={64}
            inverted={false}
            collapsed={collapsed.value}
            showTrigger={showTrigger.value}
            onCollapse={() => store.dispatch('app/toggleCollapsed')}
            onExpand={() => store.dispatch('app/toggleCollapsed')}>
            <Logo collapsed={collapsed.value} v-show={showLogo.value} />
            <SideBar v-model={[collapsed.value, 'collapsed']} inverted={false} />
          </NLayoutSider>
        ) : (
          <div></div>
        )}

        <NLayout nativeScrollbar={false}>
          {/* 顶栏部分 */}
          <NLayoutHeader>
            <NavBar />
          </NLayoutHeader>

          {/* 主体内容 */}
          <NLayoutContent
            contentStyle={{ padding: '24px' }}
            nativeScrollbar={false}
            style={marginStyle.value}
            position={position.value}>
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
