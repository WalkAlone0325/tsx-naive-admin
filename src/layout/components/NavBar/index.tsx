import { CSSProperties, defineComponent } from 'vue'

export default defineComponent({
  name: 'NavBar',
  setup() {
    // css
    const headerStyle: CSSProperties = {
      height: '84px',
      borderBottom: '1px solid #000',
    }
    const navBarConStyle: CSSProperties = {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0 20px',
      height: '50px',
      lineHeight: '50px',
    }

    return () => (
      <div style={headerStyle}>
        <div style={navBarConStyle}>头部</div>
      </div>
    )
  },
})
