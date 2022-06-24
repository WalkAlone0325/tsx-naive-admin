import {
  ColumnHeightOutlined,
  SettingOutlined,
  SearchOutlined,
  SyncOutlined,
  DragOutlined,
  VerticalLeftOutlined,
  VerticalRightOutlined
} from '@vicons/antd'
import {
  NButton,
  NCheckbox,
  NCheckboxGroup,
  NDropdown,
  NIcon,
  NPopover,
  NSpace,
  NTooltip
} from 'naive-ui'
import type { MaybeArray } from 'naive-ui/es/_utils'
import type { Component, PropType } from 'vue'
import TipIcon from '../TipIcon'
import DragItem from './DragItem'

// 密度
const options = [
  { label: '紧凑', key: 'small' },
  { label: '默认', key: 'medium' },
  { label: '宽松', key: 'large' }
]

const RightTool = defineComponent({
  name: 'RightTool',
  props: {
    showSearch: {
      type: Boolean as PropType<boolean>,
      default: true
    }
  },
  emits: ['queryTable', 'update:showSearch', 'changeSize'],
  setup(props, { emit }) {
    const toggleSearch = () => {
      emit('update:showSearch', !props.showSearch)
    }

    const handleRefresh = () => {
      emit('queryTable')
    }
    // 列
    const showPop = $ref(false)
    const handleColumns = () => {
      //
    }

    // 选择
    const handleSelect = (key: string) => {
      emit('changeSize', key)
    }

    const allShowColumn = $ref(true)
    const canSelect = $ref(false)
    const popHeader = () => (
      <NSpace>
        <NCheckbox v-model:checked={allShowColumn}>列展示</NCheckbox>
        <NCheckbox v-model:checked={canSelect}>勾选列</NCheckbox>
        <NButton text type={'primary'}>
          重置
        </NButton>
      </NSpace>
    )
    const popDefault = () => (
      <div>
        <NCheckboxGroup>
          <NSpace vertical>
            {[1, 2, 3, 4].map((i) => (
              <DragItem />
            ))}
          </NSpace>
        </NCheckboxGroup>
      </div>
    )

    // 弹出
    const popSlots = (click: (e: MouseEvent) => void, icon: Component) => ({
      trigger: () => (
        <NButton
          circle
          onClick={click}
          v-slots={{
            icon: () => <NIcon>{h(icon)}</NIcon>
          }}
        />
      ),
      header: popHeader,
      default: popDefault
    })

    const tipSlots = (
      icon: Component,
      tipTitle: string,
      click?: (e: MouseEvent) => void
    ) => {
      return {
        trigger: () => {
          switch (tipTitle) {
            case '密度':
              return (
                <div>
                  {/* 没有外面这一层 div 不显示 tip */}
                  <NDropdown
                    trigger={'click'}
                    options={options}
                    onSelect={handleSelect}
                  >
                    <NButton
                      circle
                      v-slots={{
                        icon: () => <NIcon>{h(icon)}</NIcon>
                      }}
                    />
                  </NDropdown>
                </div>
              )

            case '列设置':
              return (
                <div>
                  <NPopover
                    placement={'bottom'}
                    v-model:value={showPop}
                    trigger={'click'}
                    v-slots={popSlots(click, icon)}
                  />
                </div>
              )

            default:
              return (
                <NButton
                  circle
                  onClick={click}
                  v-slots={{
                    icon: () => <NIcon>{h(icon)}</NIcon>
                  }}
                />
              )
          }
        },
        default: () => <span>{tipTitle}</span>
      }
    }

    return () => (
      <NSpace size={'small'}>
        <NTooltip
          placement={'top'}
          v-slots={tipSlots(SearchOutlined, '显示搜索', toggleSearch)}
        />
        <NTooltip
          placement={'top'}
          v-slots={tipSlots(SyncOutlined, '刷新', handleRefresh)}
        />
        <NTooltip
          placement={'top'}
          v-slots={tipSlots(ColumnHeightOutlined, '密度')}
        />
        <NTooltip
          placement={'top'}
          v-slots={tipSlots(SettingOutlined, '列设置', handleColumns)}
        />
      </NSpace>
    )
  }
})

export default RightTool
