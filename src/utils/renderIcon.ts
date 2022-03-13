import { NIcon } from 'naive-ui'
import type { Component } from 'vue'

export default function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
