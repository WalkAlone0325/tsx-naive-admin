import { NIcon } from 'naive-ui'
import { h, VNode } from 'vue'

export function renderIcon(icon: VNode) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
