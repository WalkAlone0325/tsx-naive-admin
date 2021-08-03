import { defineComponent, CSSProperties } from 'vue'
import { NIcon, NTooltip } from 'naive-ui'
import { useFullscreen } from '@vueuse/core'
import { FullscreenOutlined, FullscreenExitOutlined } from '@vicons/antd'

export default defineComponent({
  name: 'Screenfull',
  setup() {
    const { toggle, isFullscreen } = useFullscreen()

    // css
    const screenfullStyle: CSSProperties = {
      width: '50px',
      height: '50px',
      // backgroundColor: '#2a2a2e',
      textAlign: 'center',
      lineHeight: '63px',
      cursor: 'pointer',
    }

    return () => (
      <div style={screenfullStyle} onClick={toggle}>
        <NTooltip placement="bottom" trigger="hover">
          {{
            default: () => <span>全屏</span>,
            trigger: () => (
              <NIcon size={26}>
                {!isFullscreen.value ? <FullscreenOutlined /> : <FullscreenExitOutlined />}
              </NIcon>
            ),
          }}
        </NTooltip>
      </div>
    )
  },
})
