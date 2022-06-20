import { defineComponent } from 'vue'
import { NH2, NLayoutSider } from 'naive-ui'

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
        <div style={props.isShowLogo ? { marginTop: '50px' } : {}}>
          1<NH2>海淀桥</NH2>
          <NH2>海淀桥</NH2>
          <NH2>海淀桥</NH2>
          <NH2>海淀桥</NH2>
          <NH2>海淀桥</NH2>
          <NH2>海淀桥</NH2>
          <NH2>海淀桥</NH2>
          <NH2>海淀桥</NH2>
          <NH2>海淀桥</NH2>
          <NH2>海淀桥</NH2>
          <NH2>海淀桥</NH2>
          <NH2>海淀桥</NH2>
          <NH2>海淀桥</NH2>
          <NH2>海淀桥</NH2>
          <NH2>海淀桥</NH2>
          <NH2>海淀桥</NH2>
          <NH2>海淀桥</NH2>
          <NH2>海淀桥</NH2>
        </div>
      </NLayoutSider>
    )
  }
})

export default BaseSider
