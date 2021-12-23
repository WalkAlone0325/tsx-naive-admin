<template>
  <div class="logo-container">
    <n-icon size="30" class="logo-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 261.76 226.69"
        xmlns:v="https://vecta.io/nano"
      >
        <path
          d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z"
          fill="#41b883"
        />
        <path
          d="M161.096.001l-30.225 52.351L100.647.001H52.346l78.526 136.01L209.398.001z"
          fill="#34495e"
        />
      </svg>
    </n-icon>

    <n-gradient-text class="logo-text" v-show="!collapsed" :size="18" type="info">
      {{ adminTitle }}
    </n-gradient-text>
  </div>
</template>

<script lang="ts" setup>
// props
withDefaults(
  defineProps<{
    collapsed?: boolean
    adminTitle?: string
  }>(),
  {}
)
</script>

<style lang="scss" scoped>
.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  .logo-text {
    margin-left: 12px;
  }
}
</style>
