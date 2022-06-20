import { defineComponent } from 'vue'
import { NH2, NLayoutSider } from 'naive-ui'

const BaseSider = defineComponent({
  name: 'BaseSider',
  setup() {
    return () => (
      <NLayoutSider
        width={200}
        bordered
        nativeScrollbar={false}
        showTrigger="bar"
        collapseMode="width"
      >
        <div style={{ height: '50px' }}>logo</div>
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
        <NH2>海淀桥</NH2>
      </NLayoutSider>
    )
  }
})

export default BaseSider
