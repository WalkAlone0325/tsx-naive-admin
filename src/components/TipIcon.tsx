import { NIcon, NTooltip } from 'naive-ui'
import { defineComponent } from 'vue'
import type { Component, PropType } from 'vue'

const TipIcon = defineComponent({
  name: 'TipIcon',
  props: {
    iconName: Object as PropType<Component>,
    tipContent: String
  },
  emits: ['clickIcon'],
  setup(props, { emit }) {
    const slots = {
      trigger: () => (
        <NIcon
          size={26}
          style={{ cursor: 'pointer' }}
          onClick={() => emit('clickIcon')}
        >
          {h(props.iconName as Component)}
        </NIcon>
      ),
      default: () => <span>{props.tipContent}</span>
    }

    return () => <NTooltip v-slots={slots} />
  }
})

export default TipIcon
