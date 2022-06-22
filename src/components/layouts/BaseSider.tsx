import { NLayoutSider } from 'naive-ui'
import Menu from './Menu'
import BaseLogo from './BaseLogo'
import { MenuMode, TriggerStyle } from '@/settings'
import type { PropType } from 'vue'

type Trigger = boolean | 'bar' | 'arrow-circle'

const BaseSider = defineComponent({
  name: 'BaseSider',
  props: {
    isShowLogo: Boolean,
    triggerStyle: String as PropType<TriggerStyle>,
    isCollapse: Boolean,
    isInverted: Boolean,
    collapsedWidth: Number,
    collapsedIconSize: Number,
    menuMode: {
      type: String as PropType<MenuMode>,
      default: 'vertical'
    }
  },
  emits: ['changeCollapsed'],
  setup(props, { emit }) {
    const triggerStyle = $computed(() =>
      props.triggerStyle === 'custom' ? false : props.triggerStyle
    )

    return () => (
      <NLayoutSider
        width={200}
        bordered
        nativeScrollbar={false}
        showTrigger={triggerStyle as Trigger}
        collapseMode="width"
        collapsedWidth={props.collapsedWidth}
        collapsed={props.isCollapse}
        onUpdateCollapsed={() =>
          emit('changeCollapsed', 'isCollapse', !props.isCollapse)
        }
        inverted={props.isInverted}
      >
        {props.isShowLogo && (
          <BaseLogo
            isCollapse={props.isCollapse}
            style={
              props.isCollapse ? { maxWidth: `${props.collapsedWidth}px` } : {}
            }
          />
        )}

        <Menu
          style={props.isShowLogo ? { marginTop: '50px' } : {}}
          isInverted={props.isInverted}
          collapsedIconSize={props.collapsedIconSize}
          collapsedWidth={props.collapsedWidth}
          menuMode={props.menuMode}
        />
      </NLayoutSider>
    )
  }
})

export default BaseSider
