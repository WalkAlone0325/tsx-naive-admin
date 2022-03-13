import { NIcon } from 'naive-ui'
import type { Component } from 'vue'

export default function renderIcon(icon: Component | string) {
  if (typeof icon === 'string') {
    return () => h(NIcon, null, { default: () => h(resolveComponent(icon)) })
  } else {
    return () => h(NIcon, null, { default: () => h(icon) })
  }
}
