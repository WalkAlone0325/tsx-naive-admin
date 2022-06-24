import { NIcon, NTooltip } from 'naive-ui'
import { defineComponent } from 'vue'
import type { Component, PropType } from 'vue'

const TipIcon = defineComponent({
  name: 'TipIcon',
  props: {
    iconName: Object as PropType<Component>,
    tipContent: String,
    size: {
      type: Number as PropType<number>,
      default: 26
    }
  },
  emits: ['clickIcon'],
  setup(props, { emit }) {
    const slots = {
      trigger: () => (
        <div onClick={() => emit('clickIcon')}>
          <NIcon
            size={props.size}
            style={{ cursor: 'pointer', marginTop: '2px' }}
          >
            {h(props.iconName as Component)}
          </NIcon>
        </div>
      ),
      default: () => <span>{props.tipContent}</span>
    }

    return () => <NTooltip v-slots={slots} />
  }
})

export default TipIcon
