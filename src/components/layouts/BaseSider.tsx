import { NLayoutSider } from 'naive-ui'
import Menu from './Menu'
import BaseLogo from './BaseLogo'

const BaseSider = defineComponent({
  name: 'BaseSider',
  props: {
    isShowLogo: Boolean
  },
  setup(props) {
    const isCollapse = $ref(false)

    return () => (
      <NLayoutSider
        width={200}
        bordered
        nativeScrollbar={false}
        showTrigger="bar"
        collapseMode="width"
        v-model:collapsed={isCollapse}
      >
        {props.isShowLogo && (
          <BaseLogo
            isCollapse={isCollapse}
            style={isCollapse ? { maxWidth: '48px' } : {}}
          />
        )}

        <Menu style={props.isShowLogo ? { marginTop: '50px', zIndex: 1 } : { zIndex: 1 }}/>
      </NLayoutSider>
    )
  }
})

export default BaseSider
