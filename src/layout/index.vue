<template>
  <n-layout class="layout-container" has-sider position="absolute">
    <SideBar
      v-if="menuMode === 'vertical'"
      :showLogo="showLogo"
      :showTrigger="showTrigger"
      :showBorder="showBorder"
    />
    <n-layout>
      <n-scrollbar>
        <NavHeader />
        <n-layout-content
          :position="isFixedHeader ? 'absolute' : 'static'"
          :style="isFixedHeader ? { top: '64px' } : {}"
          class="layout-content"
          native-scrollbar
          content-style="padding: 24px;"
        >
          <n-scrollbar>
            <AppMain />
          </n-scrollbar>
        </n-layout-content>
      </n-scrollbar>
    </n-layout>
  </n-layout>
</template>

<script lang="ts" setup>
import SideBar from './components/SideBar/index.vue'
import NavHeader from './components/NavHeader/index.vue'
import AppMain from './components/AppMain.vue'
import { useSettings } from '@/stores'

const { isFixedHeader, showLogo, showTrigger, showBorder, menuMode } = toRefs(useSettings())
</script>

<script lang="ts">
export default {
  name: 'BaseLayout'
}
</script>

<style lang="scss" scoped>
.layout-content {
  width: 100%;
  height: 100%;
}
</style>
