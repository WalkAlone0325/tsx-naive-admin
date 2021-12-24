import { renderIcon } from '@/utils/utils'
import { NAvatar, NDropdown } from 'naive-ui'
import {
  PersonCircleOutline as UserIcon,
  Pencil as EditIcon,
  LogOutOutline as LogoutIcon
} from '@vicons/ionicons5'
import { useApp } from '@/stores'

const PeronalCenter = () => {
  const dropOptions = ref([
    {
      label: '个人中心',
      key: 'profile',
      icon: renderIcon(UserIcon)
    },
    {
      label: '主题设置',
      key: 'editProfile',
      icon: renderIcon(EditIcon)
    },
    {
      label: '退出登录',
      key: 'logout',
      icon: renderIcon(LogoutIcon)
    }
  ])

  const { toggleDrawer } = useApp()

  const handleSelect = (key: string) => {
    if (key === 'editProfile') {
      console.log(key)
      toggleDrawer()
    }
  }

  return (
    <NDropdown trigger="hover" showArrow options={dropOptions.value} onSelect={handleSelect}>
      <NAvatar
        style={{ cursor: 'pointer', marginLeft: '20px' }}
        round
        size="large"
        src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      />
    </NDropdown>
  )
}

export default PeronalCenter
