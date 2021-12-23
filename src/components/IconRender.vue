<template>
  <n-tooltip placement="bottom" trigger="hover">
    <template #trigger>
      <n-icon class="icon-container" :color="color" :depth="depth" :size="size">
        <slot />
      </n-icon>
    </template>
    <span>{{ tipTitle }}</span>
  </n-tooltip>
</template>

<script lang="tsx" setup>
import { Depth } from 'naive-ui/lib/icon/src/Icon'

// props
withDefaults(
  defineProps<{
    color?: string | undefined
    depth?: Depth
    size?: number | string
    tipTitle: string
  }>(),
  { color: undefined, depth: undefined, size: 34, tipTitle: '' }
)
</script>

<style lang="scss" scoped>
.icon-container {
  // padding: 5px;
  cursor: pointer;
}
</style>
