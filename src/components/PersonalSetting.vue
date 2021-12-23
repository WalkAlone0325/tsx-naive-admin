<template>
  <n-dropdown trigger="hover" :show-arrow="true" :options="dropOptions" @select="handleSelect">
    <n-avatar
      style="cursor: pointer; margin-left: 20px"
      round
      size="large"
      src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
    />
  </n-dropdown>
</template>

<script lang="ts" setup>
import {
  PersonCircleOutline as UserIcon,
  Pencil as EditIcon,
  LogOutOutline as LogoutIcon
} from '@vicons/ionicons5'
import { useApp } from '@/stores'
import { Component } from 'vue'

const renderIcon = (icon: Component) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    })
  }
}

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
</script>
