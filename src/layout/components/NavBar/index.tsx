import Hamburger from '@/components/Hamburger'
import GitAddress from '@/components/GitAddress'
import { useStore } from '@/store'
import { NSpace } from 'naive-ui'
import { computed, CSSProperties, defineComponent } from 'vue'
import classes from './index.module.scss'
import Screenfull from '@/components/Screenfull'

export default defineComponent({
  name: 'NavBar',
  setup() {
    const store = useStore()

    // computed
    const collapsed = computed(() => store.getters.collapsed)

    // methods
    const toggleCollapsed = () => {
      store.dispatch('app/toggleCollapsed')
    }

    // css
    const headerStyle: CSSProperties = {
      height: '84px',
      borderBottom: '1px solid #000',
    }
    const navBarConStyle: CSSProperties = {
      display: 'flex',
      justifyContent: 'space-between',
      paddingRight: '20px',
      height: '50px',
      lineHeight: '50px',
    }

    return () => (
      // 顶栏部分
      <div style={headerStyle}>
        {/* 导航栏 */}
        <div style={navBarConStyle}>
          {/* 左侧 */}
          <div>
            <Hamburger
              class={classes.hoverClass}
              collapsed={collapsed.value}
              //@ts-ignore
              onClick={toggleCollapsed}
            />
          </div>
          <div style="display: flex;">
            <GitAddress class={classes.hoverClass} />
            <Screenfull class={classes.hoverClass} />
          </div>
        </div>
      </div>
    )
  },
})
