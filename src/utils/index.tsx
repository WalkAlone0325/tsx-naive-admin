import { NIcon } from 'naive-ui'
import { h } from 'vue'
import type { Component } from 'vue'

export const renderIcon = (icon: Component) => {
  const slots = {
    default: () => h(icon)
  }
  return () => <NIcon v-slots={slots}></NIcon>
}