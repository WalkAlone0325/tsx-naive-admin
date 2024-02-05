import { defineComponent } from 'vue'
import {
  NDivider,
  NDrawer,
  NDrawerContent,
  NInputNumber,
  NSelect,
  NSpace,
  NSwitch
} from 'naive-ui'
import type { SelectOption } from 'naive-ui'
import { useSettingStore } from '@/store'

const DescSetting = defineComponent({
  name: 'DescSetting',
  props: {
    title: String
  },
  setup(props, { slots }) {
    return () => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '16px'
        }}
      >
        <span>{props.title}</span>
        {slots.default!()}
      </div>
    )
  }
})

const GlobalDraw = defineComponent({
  name: 'GlobalDraw',
  setup(props, { emit }) {
    const settingStore = useSettingStore()
    const {
      isShowDraw,
      isFixedHeader,
      isShowLogo,
      isShowTagViews,
      isShowBreadcrumb,
      isShowBreadcrumbIcon,
      isInverted,
      triggerStyle,
      collapsedWidth,
      collapsedIconSize,
      globalTheme,
      menuMode
    } = storeToRefs(settingStore)

    // 折叠菜单风格
    const triggerOptions = ref<SelectOption[]>([
      { label: '竖线', value: 'bar' },
      { label: '圆角', value: 'arrow-circle' },
      { label: '自定义', value: 'custom' }
    ])

    // 主题色
    const themeOptions = ref<SelectOption[]>([
      // { label: '默认', value: 'default' },
      // { label: '蓝色', value: 'blue' },
      // { label: '红色', value: 'red' }
      { label: '亮色主题', value: 'lightTheme' },
      { label: '暗色主题', value: 'darkTheme' }
    ])

    // 菜单风格
    const menuStyleOptions = ref<SelectOption[]>([
      { label: '侧栏菜单', value: 'vertical' },
      { label: '顶栏菜单', value: 'horizontal' }
    ])

    return () => (
      <NDrawer v-model:show={isShowDraw.value} width={300}>
        <NDrawerContent title="界面显示设置">
          <NDivider>主题</NDivider>
          <NSpace vertical>
            <DescSetting title="主题色">
              <NSelect
                style={{ width: '50%' }}
                v-model:value={globalTheme.value}
                options={themeOptions.value}
              />
            </DescSetting>
          </NSpace>

          <NDivider>配置项</NDivider>
          <NSpace vertical>
            <DescSetting title="固定头部">
              <NSwitch v-model:value={isFixedHeader.value} />
            </DescSetting>

            <DescSetting title="显示多标签">
              <NSwitch v-model:value={isShowTagViews.value} />
            </DescSetting>

            <DescSetting title="显示面包屑">
              <NSwitch v-model:value={isShowBreadcrumb.value} />
            </DescSetting>

            {isShowBreadcrumb && (
              <DescSetting title="显示面包屑图标">
                <NSwitch v-model:value={isShowBreadcrumbIcon.value} />
              </DescSetting>
            )}

            <DescSetting title="显示 Logo">
              <NSwitch v-model:value={isShowLogo.value} />
            </DescSetting>

            <DescSetting title="反转主题色">
              <NSwitch v-model:value={isInverted.value} />
            </DescSetting>

            <DescSetting title="折叠图标风格">
              <NSelect
                style={{ width: '50%' }}
                v-model:value={triggerStyle.value}
                options={triggerOptions.value}
              />
            </DescSetting>

            <DescSetting title="菜单风格">
              <NSelect
                style={{ width: '50%' }}
                v-model:value={menuMode.value}
                options={menuStyleOptions.value}
              />
            </DescSetting>

            <DescSetting title="菜单图标大小">
              <NInputNumber
                style={{ width: '50%' }}
                v-model:value={collapsedIconSize.value}
                max={50}
                min={10}
              />
            </DescSetting>

            <DescSetting title="菜单折叠宽度">
              <NInputNumber
                style={{ width: '50%' }}
                v-model:value={collapsedWidth.value}
                max={64}
                min={48}
              />
            </DescSetting>
          </NSpace>
        </NDrawerContent>
      </NDrawer>
    )
  }
})

export default GlobalDraw
