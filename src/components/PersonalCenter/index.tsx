import { NDropdown, NAvatar } from 'naive-ui'
import { useAppStore } from '@/store'
import renderIcon from '@/utils/renderIcon'
import { SettingOutlined, UserOutlined, LogoutOutlined } from '@vicons/antd'

const PersonalCenter = defineComponent({
  setup() {
    const appStore = useAppStore()

    const dropOptions = ref([
      {
        label: '个人中心',
        key: 'profile',
        icon: renderIcon(UserOutlined)
      },
      {
        label: '主题设置',
        key: 'editProfile',
        icon: renderIcon(SettingOutlined)
      },
      {
        type: 'divider',
        key: 'd1'
      },
      {
        label: '退出登录',
        key: 'logout',
        icon: renderIcon(LogoutOutlined)
      }
    ])

    const handleSelect = (key: string) => {
      switch (key) {
        case 'editProfile':
          appStore.updateSettings({ showDrawer: true })
          break
      }
    }

    return () => (
      <NDropdown
        trigger="hover"
        showArrow
        options={dropOptions.value}
        onSelect={handleSelect}
      >
        <NAvatar
          style={{ cursor: 'pointer', marginLeft: '20px' }}
          round
          size="large"
          src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
        />
      </NDropdown>
    )
  }
})

export default PersonalCenter
