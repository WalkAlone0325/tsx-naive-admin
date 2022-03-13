import { NIcon, NTooltip } from 'naive-ui'
import type { Component, CSSProperties, PropType } from 'vue'

const TipIcon = defineComponent({
  props: {
    icon: {
      type: Object as PropType<Component>,
      required: true
    },
    content: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const iconStyle: CSSProperties = {
      // width: '40px',
      // height: '50px'
      cursor: 'pointer'
      // paddingTop: '6px'
    }

    return () => (
      <NTooltip trigger="hover">
        {{
          trigger: () => (
            <div>
              <NIcon size={34} style={iconStyle} component={props.icon} />
            </div>
          ),
          default: () => props.content
        }}
      </NTooltip>
    )
  }
})

export default TipIcon
