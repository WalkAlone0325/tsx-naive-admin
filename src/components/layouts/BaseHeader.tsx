import type { PropType } from 'vue'
import { NAvatar, NDivider, NDropdown, NLayoutHeader, NSpace } from 'naive-ui'
import styles from './style/header.module.less'
import TipIcon from '@/components/TipIcon'
import {
  GithubOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  FullscreenExitOutlined,
  FullscreenOutlined,
  ProfileOutlined
} from '@vicons/antd'
import { renderIcon } from '@/utils'
import { useSettingStore } from '@/store'
import TriggerCollapse from '../TriggerCollapse'
import type { MenuMode, TriggerStyle } from '@/settings'
import Breadcrumb from '../Breadcrumb'
import { isFullscreen, toggleScreen } from '@/hooks'
import Menu from './Menu'
import BaseLogo from './BaseLogo'

const BaseHeader = defineComponent({
  name: 'BaseHeader',
  props: {
    isCollapse: Boolean,
    isInverted: Boolean,
    triggerStyle: String as PropType<TriggerStyle>,
    collapsedWidth: Number,
    collapsedIconSize: Number,
    menuMode: {
      type: String as PropType<MenuMode>,
      default: 'vertical'
    }
  },
  setup(props) {
    const settingStore = useSettingStore()
    const { isShowBreadcrumb, isShowBreadcrumbIcon } = $(
      storeToRefs(settingStore)
    )

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

    // 跳转
    const goToGithub = () => {
      window.open('https://github.com/WalkAlone0325', '_blank')
    }

    return () => (
      <NLayoutHeader
        bordered
        inverted={props.isInverted}
        class={styles.headerContainer}
        style={
          props.menuMode === 'horizontal'
            ? { width: '1280px', margin: '0 auto' }
            : {}
        }
      >
        {props.menuMode === 'vertical' ? (
          <NSpace align="center" justify="center">
            {props.triggerStyle === 'custom' && (
              <TriggerCollapse
                isCollapse={props.isCollapse}
                onChangeSetting={settingStore.changeSetting}
              />
            )}

            {isShowBreadcrumb && (
              <Breadcrumb
                style={
                  props.triggerStyle !== 'custom' ? { marginLeft: '10px' } : {}
                }
                isShowBreadcrumbIcon={isShowBreadcrumbIcon}
              />
            )}
          </NSpace>
        ) : (
          <NSpace style={{ height: '50px' }} align="center">
            <BaseLogo />
            <Menu
              isInverted={props.isInverted}
              collapsedIconSize={props.collapsedIconSize}
              collapsedWidth={props.collapsedWidth}
              menuMode={props.menuMode}
            />
          </NSpace>
        )}

        <NSpace style={{ height: '50px' }} align="center" justify="center">
          {isFullscreen.value ? (
            <TipIcon
              iconName={FullscreenExitOutlined}
              tipContent={'退出全屏'}
              onClickIcon={toggleScreen}
            />
          ) : (
            <TipIcon
              iconName={FullscreenOutlined}
              tipContent={'进入全屏'}
              onClickIcon={toggleScreen}
            />
          )}
          <TipIcon iconName={ProfileOutlined} tipContent={'Docs'} />
          <TipIcon
            iconName={GithubOutlined}
            tipContent={'GitHub'}
            onClickIcon={goToGithub}
          />

          <NDropdown options={dropOptions} showArrow onSelect={handleSelect}>
            <NAvatar
              round
              size="medium"
              src={userUrl}
              style={{ cursor: 'pointer' }}
            />
          </NDropdown>
        </NSpace>
      </NLayoutHeader>
    )
  }
})

export default BaseHeader
