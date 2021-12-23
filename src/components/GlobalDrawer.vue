<template>
  <n-drawer :show="drawerActive" @update:show="toggleDrawer" :width="300" placement="right">
    <n-drawer-content title="全局配置">
      <!-- <n-divider>虚线</n-divider> -->
      <div>
        <h4>整体风格设置</h4>
        <n-space>
          <tooltip-com tip-title="亮色菜单">
            <div class="svg-container" @click="() => changeSetting('globalTheme', 'lightTheme')">
              <n-image preview-disabled width="60" :src="lightSvg" />
              <n-badge dot color="#19be6b" v-if="globalTheme === 'lightTheme'" />
            </div>
          </tooltip-com>
          <tooltip-com tip-title="暗色菜单">
            <div class="svg-container" @click="() => changeSetting('globalTheme', 'sideDarkTheme')">
              <n-image preview-disabled width="60" :src="sideDarkSvg" />
              <n-badge dot color="#19be6b" v-if="globalTheme === 'sideDarkTheme'" />
            </div>
          </tooltip-com>
          <tooltip-com tip-title="暗黑模式">
            <div class="svg-container" @click="() => changeSetting('globalTheme', 'darkTheme')">
              <n-image preview-disabled width="60" :src="darkSvg" />
              <n-badge dot color="#19be6b" v-if="globalTheme === 'darkTheme'" />
            </div>
          </tooltip-com>
        </n-space>

        <h4>导航模式</h4>
        <n-space>
          <tooltip-com tip-title="侧边菜单">
            <div class="svg-container" @click="() => changeSetting('menuMode', 'vertical')">
              <n-image preview-disabled width="60" :src="sideDarkSvg" />
              <n-badge dot color="#19be6b" v-if="menuMode === 'vertical'" />
            </div>
          </tooltip-com>
          <tooltip-com tip-title="顶部菜单">
            <div class="svg-container" @click="() => changeSetting('menuMode', 'horizontal')">
              <n-image preview-disabled width="60" :src="headerDarkSvg" />
              <n-badge dot color="#19be6b" v-if="menuMode === 'horizontal'" />
            </div>
          </tooltip-com>
        </n-space>

        <h4>其它设置</h4>
        <n-space vertical size="large">
          <div class="setting-item">
            <span>固定头部</span>
            <n-switch
              v-model:value="isFixedHeader"
              size="medium"
              @update:value="() => changeSetting('isFixedHeader', isFixedHeader)"
            />
          </div>
          <div class="setting-item">
            <span>显示 Logo</span>
            <n-switch
              v-model:value="showLogo"
              size="medium"
              @update:value="() => changeSetting('showLogo', showLogo)"
            />
          </div>
          <div class="setting-item">
            <span>显示边框线</span>
            <n-switch
              v-model:value="showBorder"
              size="medium"
              @update:value="() => changeSetting('showBorder', showBorder)"
            />
          </div>
          <div class="setting-item">
            <n-space>
              <span>显示面包屑</span>
              <n-switch
                v-model:value="showBreadcrumb"
                size="medium"
                @update:value="() => changeSetting('showBreadcrumb', showBreadcrumb)"
              />
            </n-space>
            <n-space v-show="showBreadcrumb">
              <span>显示图标</span>
              <n-switch
                v-model:value="showBreadcrumbIcon"
                size="medium"
                @update:value="() => changeSetting('showBreadcrumbIcon', showBreadcrumbIcon)"
              />
            </n-space>
          </div>
          <div class="setting-item">
            <span>菜单线设置</span>
            <n-select style="width: 60%" v-model:value="showTrigger" :options="triggerOptions" />
          </div>
          <div class="setting-item">
            <span>更改 Title</span>
            <n-input v-model:value="adminTitle" maxlength="10" style="width: 60%" type="text" />
          </div>
        </n-space>
      </div>
    </n-drawer-content>
  </n-drawer>
</template>

<script lang="ts" setup>
import { useApp, useSettings } from '@/stores'
import lightSvg from '@/assets/images/light.svg'
import headerDarkSvg from '@/assets/images/header-dark.svg'
import darkSvg from '@/assets/images/dark.svg'
import sideDarkSvg from '@/assets/images/side-dark.svg'
import { SelectMixedOption } from 'naive-ui/lib/select/src/interface'

const { drawerActive, toggleDrawer } = toRefs(useApp())
const {
  isFixedHeader,
  showLogo,
  showBorder,
  showTrigger,
  showBreadcrumb,
  showBreadcrumbIcon,
  adminTitle,
  globalTheme,
  menuMode,
  changeSetting
} = toRefs(useSettings())
// const settingsStore = useSettings()

const triggerOptions = ref([
  { label: '三角', value: 'arrow-circle' },
  { label: '竖线', value: 'bar' },
  { label: '隐藏', value: false }
]) as unknown as SelectMixedOption[]
</script>

<style lang="scss" scoped>
.setting-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.svg-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

<style>
.n-image {
  cursor: pointer;
}
</style>
