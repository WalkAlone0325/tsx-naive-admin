import { CSSProperties, defineComponent } from 'vue'
import { NElement, NIcon, NTooltip } from 'naive-ui'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@vicons/antd'

export default defineComponent({
  name: 'Hamburger',
  props: {
    collapsed: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const hamburgerStyle: CSSProperties = {
      width: '50px',
      height: '50px',
      // backgroundColor: '#2a2a2e',
      textAlign: 'center',
      lineHeight: '63px',
      cursor: 'pointer',
    }

    return () => (
      <NElement style={hamburgerStyle} class="hoverClass">
        <NIcon size={22}>{props.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}</NIcon>
      </NElement>
    )
  },
})
