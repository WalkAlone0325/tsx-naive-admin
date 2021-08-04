import { defineComponent, ref, CSSProperties } from 'vue'
import logo from '@/assets/logo.png'

export default defineComponent({
  name: 'Logo',
  props: {
    collapsed: {
      type: Boolean,
    },
  },
  setup(props) {
    const title = ref('后台管理系统')

    // styles
    const logoStyle: CSSProperties = {
      display: 'flex',
      width: '100%',
      height: '64px',
      justifyContent: 'center',
      alignItems: 'center',
    }
    const imgStyle: CSSProperties = {
      width: '30px',
      height: '30px',
    }
    const titleStyle: CSSProperties = {
      marginLeft: '20px',
    }

    return () => {
      return (
        <div style={logoStyle}>
          <img style={imgStyle} src={logo} alt="" />
          <h3 style={titleStyle} v-show={!props.collapsed}>
            {title.value}
          </h3>
        </div>
      )
    }
  },
})
