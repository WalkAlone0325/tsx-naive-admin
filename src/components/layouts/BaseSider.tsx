import { defineComponent } from 'vue'
import { NH2, NLayoutSider } from 'naive-ui'
import Menu from './Menu'

const BaseSider = defineComponent({
  name: 'BaseSider',
  props: {
    isShowLogo: Boolean
  },
  setup(props) {
    return () => (
      <NLayoutSider
        width={200}
        bordered
        nativeScrollbar={false}
        showTrigger="bar"
        collapseMode="width"
      >
        {props.isShowLogo && (
          <div
            style={{
              height: '50px',
              position: 'fixed',
              top: '0',
              backgroundColor: '#fff',
              width: '200px'
            }}
          >
            logo
          </div>
        )}

        <Menu style={props.isShowLogo ? { marginTop: '50px' } : {}} />
      </NLayoutSider>
    )
  }
})

export default BaseSider
