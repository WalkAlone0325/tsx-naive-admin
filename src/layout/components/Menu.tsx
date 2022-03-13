import type { PropType } from 'vue'
import { BookFilled, PrinterFilled } from '@vicons/antd'
import { NMenu } from 'naive-ui'
import renderIcon from '@/utils/renderIcon'

const Menu = defineComponent({
  props: {
    inverted: Boolean as PropType<boolean>
  },
  setup(props) {
    const menuOptions = [
      {
        label: '且听风吟',
        key: 'hear-the-wind-sing',
        icon: renderIcon(BookFilled)
      },
      {
        label: '1973年的弹珠玩具',
        key: 'pinball-1973',
        icon: renderIcon(BookFilled),
        disabled: true,
        children: [
          {
            label: '鼠',
            key: 'rat'
          }
        ]
      },
      {
        label: '寻羊冒险记',
        key: 'a-wild-sheep-chase',
        disabled: true,
        icon: renderIcon(BookFilled)
      },
      {
        label: '舞，舞，舞',
        key: 'dance-dance-dance',
        icon: renderIcon(BookFilled),
        children: [
          {
            type: 'group',
            label: '人物',
            key: 'people',
            children: [
              {
                label: '叙事者',
                key: 'narrator',
                icon: renderIcon(PrinterFilled)
              },
              {
                label: '羊男',
                key: 'sheep-man',
                icon: renderIcon(PrinterFilled)
              }
            ]
          },
          {
            label: '饮品',
            key: 'beverage',
            icon: renderIcon(PrinterFilled),
            children: [
              {
                label: '威士忌',
                key: 'whisky'
              }
            ]
          },
          {
            label: '食物',
            key: 'food',
            children: [
              {
                label: '三明治',
                key: 'sandwich'
              }
            ]
          },
          {
            label: '过去增多，未来减少',
            key: 'the-past-increases-the-future-recedes'
          }
        ]
      }
    ]

    return () => (
      <NMenu
        inverted={props.inverted}
        collapsedWidth={64}
        collapsedIconSize={22}
        options={menuOptions}
      />
    )
  }
})

export default Menu
