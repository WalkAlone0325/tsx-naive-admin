<template>
  <n-layout-header
    class="layout-header-container"
    bordered
    :inverted="menuMode === 'horizontal' ? inverted : false"
  >
    <!-- :inverted="verticalInverted" -->
    <div v-if="menuMode === 'vertical'"></div>

    <div :class="menuMode === 'horizontal' ? 'horizontal-container' : 'vertical-container'">
      <div class="left-container" v-if="menuMode === 'horizontal'">
        <TheLogo :adminTitle="adminTitle" />
        <n-menu
          dropdown-placement="bottom"
          v-model:value="activeKey"
          mode="horizontal"
          :inverted="inverted"
          :options="menuOptions"
        />
      </div>
      <div class="right-container">
        <n-space size="small" v-if="menuMode === 'vertical'">
          <icon-render tip-title="全屏">
            <ScanCircle />
          </icon-render>
          <icon-render tip-title="GitHub">
            <LogoGithub />
          </icon-render>
        </n-space>
        <personal-setting />
      </div>
    </div>

    <global-drawer />
  </n-layout-header>
</template>

<script lang="ts" setup>
import { useSettings } from '@/stores'
import { LogoGithub, ScanCircle, LogOutOutline } from '@vicons/ionicons5'
import { Component } from 'vue'
import TheLogo from '../SideBar/TheLogo.vue'

const { inverted, adminTitle, menuMode } = toRefs(useSettings())

const menuOptions = ref([
  {
    label: '且听风吟',
    key: 'hear-the-wind-sing',
    icon: renderIcon(LogOutOutline)
  },
  {
    label: '且听风吟',
    key: 'hear-the-wind-sing',
    icon: renderIcon(LogOutOutline)
  },
  {
    label: '且听风吟',
    key: 'hear-the-wind-sing',
    icon: renderIcon(LogOutOutline)
  },
  {
    label: '且听风吟',
    key: 'hear-the-wind-sing',
    icon: renderIcon(LogOutOutline)
  },
  {
    label: '且听风吟',
    key: 'hear-the-wind-sing',
    icon: renderIcon(LogOutOutline)
  },
  {
    label: '且听风吟',
    key: 'hear-the-wind-sing',
    icon: renderIcon(LogOutOutline)
  },
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
  name: 'NavHeader'
}
</script>

<style lang="scss" scoped>
.layout-header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;

  .vertical-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
  }

  .horizontal-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
  }

  .left-container {
    display: flex;
  }

  .right-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }
}
</style>
