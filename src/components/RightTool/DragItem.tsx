import {
  DragOutlined,
  VerticalRightOutlined,
  VerticalLeftOutlined
} from '@vicons/antd'
import { NSpace, NIcon, NCheckbox } from 'naive-ui'
import TipIcon from '../TipIcon'

const DragItem = defineComponent({
  name: 'DragItem',
  setup() {
    return () => (
      <div
        style={{
          padding: '4px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
        class={'item-hover'}
      >
        <NSpace>
          <NIcon size={18} style={{ paddingTop: '2px' }}>
            <DragOutlined />
          </NIcon>
          <NCheckbox label="id" />
        </NSpace>
        <NSpace>
          <TipIcon
            size={18}
            iconName={VerticalRightOutlined}
            tipContent={'左移'}
            onClickIcon={() => {
              console.log('first')
            }}
          />
          <TipIcon
            size={18}
            iconName={VerticalLeftOutlined}
            tipContent={'右移'}
            onClickIcon={() => {
              console.log('first')
            }}
          />
        </NSpace>
      </div>
    )
  }
})

export default DragItem
