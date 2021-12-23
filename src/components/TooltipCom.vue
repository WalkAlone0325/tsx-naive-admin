<template>
  <div>
    <n-tooltip placement="top" trigger="hover">
      <template #trigger>
        <slot></slot>
      </template>
      <span>{{ tipTitle }}</span>
    </n-tooltip>
  </div>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    tipTitle: string | undefined
  }>(),
  {
    tipTitle: undefined
  }
)
</script>
