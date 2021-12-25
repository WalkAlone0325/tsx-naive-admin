import {
  NBadge,
  NButton,
  NDrawer,
  NDrawerContent,
  NImage,
  NInput,
  NSelect,
  NSpace,
  NSwitch,
  useMessage
} from 'naive-ui'
import TheTooltip from '../TheTooltip'
import lightSvg from '@/assets/images/light.svg'
import headerDarkSvg from '@/assets/images/header-dark.svg'
import darkSvg from '@/assets/images/dark.svg'
import sideDarkSvg from '@/assets/images/side-dark.svg'
import { useApp, useSettings } from '@/stores'
import { SelectBaseOption } from 'naive-ui/lib/select/src/interface'
import './index.scss'

const DrawerConfig = () => {
  const { drawerActive } = storeToRefs(useApp())
  const { toggleDrawer } = useApp()

  const {
    isFixedHeader,
    showLogo,
    showBorder,
    showTrigger,
    showBreadcrumb,
    showBreadcrumbIcon,
    adminTitle,
    globalTheme,
    menuMode
  } = storeToRefs(useSettings())
  const { changeSetting } = useSettings()

  const triggerOptions = ref([
    { label: '三角', value: 'arrow-circle' },
    { label: '竖线', value: 'bar' },
    { label: '隐藏', value: false }
  ] as SelectBaseOption[])

  // 配置
  const message = useMessage()
  const configObj = {
    isFixedHeader: isFixedHeader.value,
    showLogo: showLogo.value,
    showBorder: showBorder.value,
    showTrigger: showTrigger.value,
    showBreadcrumb: showBreadcrumb.value,
    showBreadcrumbIcon: showBreadcrumbIcon.value,
    adminTitle: adminTitle.value,
    globalTheme: globalTheme.value,
    menuMode: menuMode.value
  }
  const submitConfig = () => {
    window.localStorage.setItem('settingConfig', JSON.stringify(configObj))
    message.success('保存配置成功！')
    window.location.reload()
  }
  const resetConfig = () => {
    window.localStorage.removeItem('settingConfig')
    message.success('重置配置成功！')
    window.location.reload()
  }

  return (
    <NDrawer show={drawerActive.value} onUpdateShow={toggleDrawer} width={300} placement="right">
      <NDrawerContent title="全局配置">
        <div>
          <h4>整体风格设置</h4>
          <NSpace>
            <TheTooltip tipTitle="亮色菜单">
              <div class="svg-container" onClick={() => changeSetting('globalTheme', 'lightTheme')}>
                <NImage previewDisabled width={60} src={lightSvg} />
                {globalTheme.value === 'lightTheme' ? <NBadge dot color="#19be6b" /> : null}
              </div>
            </TheTooltip>
            <TheTooltip tipTitle="暗色菜单">
              <div
                class="svg-container"
                onClick={() => changeSetting('globalTheme', 'sideDarkTheme')}
              >
                <NImage previewDisabled width={60} src={sideDarkSvg} />
                {globalTheme.value === 'sideDarkTheme' ? <NBadge dot color="#19be6b" /> : null}
              </div>
            </TheTooltip>
            <TheTooltip tipTitle="暗黑模式">
              <div class="svg-container" onClick={() => changeSetting('globalTheme', 'darkTheme')}>
                <NImage previewDisabled width={60} src={darkSvg} />
                {globalTheme.value === 'darkTheme' ? <NBadge dot color="#19be6b" /> : null}
              </div>
            </TheTooltip>
          </NSpace>

          <h4>导航模式</h4>
          <NSpace>
            <TheTooltip tipTitle="侧边菜单">
              <div class="svg-container" onClick={() => changeSetting('menuMode', 'vertical')}>
                <NImage previewDisabled width={60} src={lightSvg} />
                {menuMode.value === 'vertical' ? <NBadge dot color="#19be6b" /> : null}
              </div>
            </TheTooltip>
            <TheTooltip tipTitle="顶部菜单">
              <div class="svg-container" onClick={() => changeSetting('menuMode', 'horizontal')}>
                <NImage previewDisabled width={60} src={headerDarkSvg} />
                {menuMode.value === 'horizontal' ? <NBadge dot color="#19be6b" /> : null}
              </div>
            </TheTooltip>
          </NSpace>

          <h4>其他设置</h4>
          <NSpace vertical size="large">
            <div class="setting-item">
              <span>固定头部</span>
              <NSwitch
                v-model:value={isFixedHeader.value}
                size="medium"
                onUpdateValue={() => changeSetting('isFixedHeader', isFixedHeader.value)}
              />
            </div>
            <div class="setting-item">
              <span>显示 Logo</span>
              <NSwitch
                v-model:value={showLogo.value}
                size="medium"
                onUpdateValue={() => changeSetting('showLogo', showLogo.value)}
              />
            </div>
            <div class="setting-item">
              <span>显示边框线</span>
              <NSwitch
                v-model:value={showBorder.value}
                size="medium"
                onUpdateValue={() => changeSetting('showBorder', showBorder.value)}
              />
            </div>
            <div class="setting-item">
              <NSpace>
                <span>显示面包屑</span>
                <NSwitch
                  v-model:value={showBreadcrumb.value}
                  size="medium"
                  onUpdateValue={() => changeSetting('showBreadcrumb', showBreadcrumb.value)}
                />
              </NSpace>
              <NSpace v-show={showBreadcrumb.value}>
                <span>显示图标</span>
                <NSwitch
                  v-model:value={showBreadcrumbIcon.value}
                  size="medium"
                  onUpdateValue={() =>
                    changeSetting('showBreadcrumbIcon', showBreadcrumbIcon.value)
                  }
                />
              </NSpace>
            </div>
            <div class="setting-item">
              <span>菜单设置</span>
              <NSelect
                style={{ width: '60%' }}
                v-model:value={showTrigger.value}
                options={triggerOptions.value}
              />
            </div>
            <div class="setting-item">
              <span>更改 Title</span>
              <NInput v-model:value={adminTitle.value} maxlength={10} style={{ width: '60%' }} />
            </div>
          </NSpace>
        </div>

        <div class="footer-btn-group">
          <NSpace>
            <NButton type="primary" onClick={submitConfig}>
              保存配置
            </NButton>
            <NButton onClick={resetConfig}>重置配置</NButton>
          </NSpace>
        </div>
      </NDrawerContent>
    </NDrawer>
  )
}

export default DrawerConfig
