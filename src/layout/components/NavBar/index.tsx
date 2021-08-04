import Hamburger from '@/components/Hamburger'
import GitAddress from '@/components/GitAddress'
import { useStore } from '@/store'
import { computed, CSSProperties, defineComponent } from 'vue'
import classes from './index.module.scss'
import Screenfull from '@/components/Screenfull'
import DropProfile from '@/components/DropProfile'
import { useSettings } from '@/hooks/use-settings'
import SideBar from '../SideBar'
import ConfigSettings from '../ConfigSettings'

export default defineComponent({
  name: 'NavBar',
  setup() {
    const store = useStore()

    // computed
    const { menuMode } = useSettings()
    const collapsed = computed(() => store.getters.collapsed)

    // methods
    const toggleCollapsed = () => {
      store.dispatch('app/toggleCollapsed')
    }

    // css
    const headerStyle: CSSProperties = {
      height: '84px',
      // borderBottom: '1px solid #000',
    }
    const navBarConStyle: CSSProperties = {
      display: 'flex',
      justifyContent: 'space-between',
      marginRight: '10px',
      height: '50px',
      lineHeight: '50px',
    }

    return () => (
      // 顶栏部分
      <div style={headerStyle}>
        {/* 导航栏 */}
        <div style={navBarConStyle}>
          {menuMode.value === 'horizontal' ? (
            <SideBar menuMode="horizontal" v-model={[collapsed.value, 'collapsed']} />
          ) : (
            <div>
              {/* 左侧 */}
              <Hamburger
                class={classes.hoverClass}
                collapsed={collapsed.value}
                //@ts-ignore
                onClick={toggleCollapsed}
              />
            </div>
          )}

          {/* 右侧菜单 */}
          <div style="display: flex;">
            <GitAddress class={classes.hoverClass} />
            <Screenfull class={classes.hoverClass} />
            <DropProfile />
          </div>
        </div>

        {/* 多标签 */}

        {/* 全局配置抽屉 */}
        <ConfigSettings />
      </div>
    )
  },
})
