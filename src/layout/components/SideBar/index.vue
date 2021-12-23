<template>
  <n-layout-sider
    collapse-mode="width"
    :inverted="inverted"
    :show-trigger="showTrigger"
    :bordered="showBorder"
    :collapsed="collapsed"
    :collapsed-width="64"
    :width="240"
    @expand="toggleCollapsed"
    @collapse="toggleCollapsed"
  >
    <TheLogo
      class="vertical-logo"
      v-show="showLogo"
      :collapsed="collapsed"
      :adminTitle="adminTitle"
    />
    <n-menu
      :inverted="inverted"
      :collapsed="collapsed"
      :collapsed-width="64"
      :collapsed-icon-size="24"
      :options="menuOptions"
      v-model:value="activeKey"
    />
  </n-layout-sider>
</template>

<script lang="ts" setup>
import TheLogo from './TheLogo.vue'
import { LogOutOutline } from '@vicons/ionicons5'
import { Component } from 'vue'
import { useApp, useSettings } from '@/stores'

withDefaults(
  defineProps<{
    showTrigger: boolean | 'bar' | 'arrow-circle' | undefined
    showLogo: boolean
    showBorder: boolean
  }>(),
  {}
)

const { collapsed, toggleCollapsed } = toRefs(useApp())
const { adminTitle, inverted } = toRefs(useSettings())

const menuOptions = ref([
  {
    label: '且听风吟',
    key: 'hear-the-wind-sing',
    icon: renderIcon(LogOutOutline)
  },
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
    icon: renderIcon(LogOutOutline),
    children: [
      {
        label: '鼠',
        key: 'rat'
      }
    ]
  }
])

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const activeKey = ref(null)
</script>
<script lang="ts">
export default {
  name: 'SideBar'
}
</script>

<style lang="scss" scoped>
.vertical-logo {
  width: 100%;
  height: 63px;
  line-height: 63px;
  border-bottom: 1px solid var(--border-color);
}
</style>
