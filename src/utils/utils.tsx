import { NIcon } from 'naive-ui'
import { Component } from 'vue'

export function renderIcon(icon: Component) {
  return () => (
    <NIcon>
      <icon />
    </NIcon>
  )
}
