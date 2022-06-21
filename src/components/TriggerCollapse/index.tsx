import { MenuFoldOutlined, MenuUnfoldOutlined } from '@vicons/antd'
import { NEl, NIcon } from 'naive-ui'
import styles from './style/index.module.less'

const TriggerCollapse = defineComponent({
  name: 'TriggerCollapse',
  props: {
    isCollapse: Boolean
  },
  emits: ['changeSetting'],
  setup(props, { emit }) {
    return () => (
      <NEl
        class={styles.trigger}
        onClick={() => emit('changeSetting', 'isCollapse', !props.isCollapse)}
      >
        <NIcon size={24}>
          {!props.isCollapse ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
        </NIcon>
      </NEl>
    )
  }
})

export default TriggerCollapse
