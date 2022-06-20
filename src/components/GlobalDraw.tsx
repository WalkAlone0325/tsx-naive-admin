import { defineComponent, toRef } from 'vue'
import type { PropType } from 'vue'
import { NDrawer } from 'naive-ui'

const GlobalDraw = defineComponent({
  name: 'GlobalDraw',
  props: {
    isShowDraw: Boolean as PropType<boolean>
  },
  setup(props) {
    // const isShowDraw = toRef('')
    return () => <NDrawer v-model:show={props.isShowDraw}></NDrawer>
  }
})

export default GlobalDraw