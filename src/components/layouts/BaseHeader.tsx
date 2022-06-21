import type { PropType } from 'vue'
import { NAvatar, NDivider, NDropdown, NLayoutHeader, NSpace } from 'naive-ui'
import styles from './style/header.module.less'
import TipIcon from '@/components/TipIcon'
import {
  GithubOutlined,
  FileWordOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined
} from '@vicons/antd'
import { renderIcon } from '@/utils'
import { useSettingStore } from '@/store'
import TriggerCollapse from '../TriggerCollapse'
import type { TriggerStyle } from '@/settings'

const BaseHeader = defineComponent({
  name: 'BaseHeader',
  props: {
    isCollapse: Boolean,
    triggerStyle: String as PropType<TriggerStyle>
  },
  setup(props) {
    const settingStore = useSettingStore()

    const userUrl = 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'

    const dropOptions = [
      {
        label: '个人中心',
        key: 'personCenter',
        icon: renderIcon(UserOutlined)
      },
      {
        label: '全局设置',
        key: 'setting',
        icon: renderIcon(SettingOutlined)
      },
      {
        type: 'render',
        key: 'divider',
        render: () => <NDivider style={{ padding: '3px', margin: 0 }} />
      },
      {
        label: '退出登录',
        key: 'logout',
        icon: renderIcon(LogoutOutlined)
      }
    ]

    const handleSelect = (key: string) => {
      console.log(key)
      switch (key) {
        case 'setting':
          settingStore.changeSetting('isShowDraw', true)
          break

        default:
          break
      }
    }

    return () => (
      <NLayoutHeader bordered>
        <header class={styles.headerContainer}>
          <div>
            {props.triggerStyle === 'custom' &&
              <TriggerCollapse
                isCollapse={props.isCollapse}
                onChangeSetting={settingStore.changeSetting}
              />
            }
          </div>
          <NSpace style={{ height: '50px' }} align="center" justify="center">
            <TipIcon iconName={FileWordOutlined} tipContent={'Docs'} />
            <TipIcon iconName={GithubOutlined} tipContent={'GitHub'} />

            <NDropdown options={dropOptions} showArrow onSelect={handleSelect}>
              <NAvatar
                round
                size="medium"
                src={userUrl}
                style={{ cursor: 'pointer' }}
              />
            </NDropdown>
          </NSpace>
        </header>
        <div class={styles.tagViews}>tagviews</div>
      </NLayoutHeader>
    )
  }
})

export default BaseHeader
