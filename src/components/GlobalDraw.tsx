import { defineComponent } from 'vue'
import { NDivider, NDrawer, NDrawerContent, NSpace, NSwitch } from 'naive-ui'
import { useSettingStore } from '@/store'

const DescSetting = defineComponent({
  name: 'DescSetting',
  props: {
    title: String
  },
  setup(props, {slots}) {
    return () => (
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '16px'}}>
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
    const { isShowDraw, isFixedHeader, isShowLogo } = $(storeToRefs(settingStore))

    return () => (
      <NDrawer v-model:show={isShowDraw} width={350}>
        <NDrawerContent title="界面显示设置">
          <NDivider>配置项</NDivider>
          <NSpace vertical>
            <DescSetting title="固定头部">
              <NSwitch v-model:value={isFixedHeader} />
            </DescSetting>

            <DescSetting title="显示多标签">
              <NSwitch />
            </DescSetting>

            <DescSetting title="显示面包屑">
              <NSwitch />
            </DescSetting>

            <DescSetting title="显示面包屑图标">
              <NSwitch />
            </DescSetting>

            <DescSetting title="显示 Logo">
              <NSwitch v-model:value={isShowLogo} />
            </DescSetting>
          </NSpace>
        </NDrawerContent>
      </NDrawer>
    )
  }
})

export default GlobalDraw
