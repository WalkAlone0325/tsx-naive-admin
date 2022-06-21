import { NLayoutSider } from 'naive-ui'
import Menu from './Menu'
import BaseLogo from './BaseLogo'
import { TriggerStyle } from '@/settings'
import type { PropType } from 'vue'

type Trigger = boolean | 'bar' | 'arrow-circle'

const BaseSider = defineComponent({
  name: 'BaseSider',
  props: {
    isShowLogo: Boolean,
    triggerStyle: String as PropType<TriggerStyle>,
    isCollapse: Boolean
  },
  emits: ['changeCollapsed'],
  setup(props, { emit }) {

    const triggerStyle = $computed(() => props.triggerStyle === 'custom' ? false : props.triggerStyle)

    return () => (
      <NLayoutSider
        width={200}
        bordered
        nativeScrollbar={false}
        showTrigger={triggerStyle as Trigger}
        collapseMode="width"
        collapsed={props.isCollapse}
        onUpdateCollapsed={() => emit('changeCollapsed', 'isCollapse', !props.isCollapse)}
      >
        {props.isShowLogo && (
          <BaseLogo
            isCollapse={props.isCollapse}
            style={props.isCollapse ? { maxWidth: '48px' } : {}}
          />
        )}

        <Menu style={props.isShowLogo ? { marginTop: '50px' } : {}} />
      </NLayoutSider>
    )
  }
})

export default BaseSider
