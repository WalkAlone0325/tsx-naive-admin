import { LikeOutlined } from '@vicons/antd'
import { NButton, NIcon } from 'naive-ui'
import type { Component, PropType } from 'vue'

const DButton = defineComponent({
  name: 'DButton',
  extends: NButton,
  props: {
    icon: {
      type: Object as PropType<Component>,
      default: LikeOutlined
    },
    content: {
      type: String as PropType<string>,
      default: undefined
    }
  },
  setup(props) {
    return () => (
      <NButton
        {...props}
        v-slots={{
          icon: () => <NIcon>{h(props.icon)}</NIcon>,
          default: () => props.content
        }}
      />
    )
  }
})

export default DButton
