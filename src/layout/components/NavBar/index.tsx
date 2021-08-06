import Hamburger from '@/components/Hamburger'
import GitAddress from '@/components/GitAddress'
import { useStore } from '@/store'
import { computed, CSSProperties, defineComponent, Ref, ref, watch } from 'vue'
import Screenfull from '@/components/Screenfull'
import DropProfile from '@/components/DropProfile'
import { useSettings } from '@/hooks/use-settings'
import SideBar from '../SideBar'
import ConfigSettings from '../ConfigSettings'
import TagsView from '../TagsView'
import Breadcrumb from '@/components/Breadcrumb'

export default defineComponent({
  name: 'NavBar',
  props: {
    inverted: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const store = useStore()

    // computed
    const { menuMode, tagsView } = useSettings()
    const collapsed = computed(() => store.getters.collapsed)

    // methods
    const toggleCollapsed = () => {
      store.dispatch('app/toggleCollapsed')
    }

    const headerStyle: Ref<CSSProperties> = ref({})

    watch(
      () => tagsView.value,
      () => {
        if (tagsView.value) {
          headerStyle.value = { height: '84px' }
        } else {
          headerStyle.value = { height: '50px' }
        }
      },
      { immediate: true },
    )

    // css
    // const headerStyle: CSSProperties = {
    //   height: '84px',
    //   // borderBottom: '1px solid #000',
    // }
    const navBarConStyle: CSSProperties = {
      display: 'flex',
      justifyContent: 'space-between',
      marginRight: '10px',
      height: '50px',
      lineHeight: '50px',
    }

    return () => (
      // 顶栏部分
      <div style={headerStyle.value}>
        {/* 导航栏 */}
        <div style={navBarConStyle}>
          {menuMode.value === 'horizontal' ? (
            <SideBar
              inverted={props.inverted}
              menuMode="horizontal"
              v-model={[collapsed.value, 'collapsed']}
            />
          ) : (
            <div style={{ display: 'flex' }}>
              {/* 左侧 */}
              <Hamburger
                style={{ marginRight: '4px' }}
                collapsed={collapsed.value}
                //@ts-ignore
                onClick={toggleCollapsed}
              />

              {/* 面包屑 */}
              <Breadcrumb />
            </div>
          )}

          {/* 右侧菜单 */}
          <div style="display: flex;">
            <GitAddress />
            <Screenfull />
            <DropProfile />
          </div>
        </div>

        {/* 多标签 */}
        <TagsView v-show={tagsView.value} />

        {/* 全局配置抽屉 */}
        <ConfigSettings />
      </div>
    )
  },
})
