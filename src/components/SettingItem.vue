<template>
  <div>
    <span>{{ settingTitle }}</span>
    <!-- <n-switch v-model:value="" size="medium" @update:value="" /> -->
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  settingTitle: string
}>()
</script>
