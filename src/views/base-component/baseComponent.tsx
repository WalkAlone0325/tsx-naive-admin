import DButton from '@/components/DButton'
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@vicons/antd'
import { NCard, NSpace } from 'naive-ui'

const BaseComponent = defineComponent({
  name: 'BaseComponent',
  setup() {
    return () => (
      <div style={{ display: 'flex' }}>
        <NCard title="表格按钮" style={{ maxWidth: '420px' }} hoverable>
          <NSpace>
            <DButton content={'测试'} />
            <DButton content={'新增'} type="primary" icon={PlusOutlined} />
            <DButton content={'修改'} type={'warning'} icon={EditOutlined} />
            <DButton content={'删除'} type={'error'} icon={DeleteOutlined} />
          </NSpace>
        </NCard>

        <NCard
          title="文字按钮"
          style={{ maxWidth: '350px', marginLeft: '20px' }}
          hoverable
        >
          <NSpace>
            <DButton content={'测试'} text />
            <DButton content={'新增'} text type="primary" icon={PlusOutlined} />
            <DButton content="编辑" text icon={EditOutlined} />
            <DButton
              content={'删除'}
              text
              type={'error'}
              icon={DeleteOutlined}
            />
          </NSpace>
        </NCard>
      </div>
    )
  }
})

export default BaseComponent
