import { computed, CSSProperties, defineComponent, watch } from 'vue'
import { NBadge, NDivider, NDrawer, NDrawerContent, NSpace, NSwitch, NTooltip } from 'naive-ui'
import { useStore } from '@/store'
import { useSettings } from '@/hooks/use-settings'
import navLeft from '@/assets/images/nav-theme-dark.svg'
import navTop from '@/assets/images/nav-horizontal.svg'
import sideOrHeaderThemeDark from '@/assets/images/nav-theme-dark.svg'
import sideOrHeaderThemeLight from '@/assets/images/nav-theme-light.svg'
import headerThemeDark from '@/assets/images/header-theme-dark.svg'
import { TKey } from '@/store/modules/settings'

export default defineComponent({
  name: 'ConfigSettings',
  setup() {
    const store = useStore()

    // computed
    const {
      globalTheme,
      openConfig,
      menuMode,
      sideOrHeaderTheme,
      fixedHeader,
      showLogo,
      showTrigger,
    } = useSettings()

    // methods
    const changeSetting = (key: TKey, value: boolean | string) => {
      store.dispatch('settings/changeSetting', { key, value })
    }

    // style
    const svgCon: CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      cursor: 'pointer',
    }
    const badgeStyle: CSSProperties = {
      marginTop: '5px',
    }

    return () => (
      <NDrawer
        width={290}
        placement="right"
        // v-model={[active.value, 'show']}
        show={openConfig.value}
        onUpdateShow={() => changeSetting('openConfig', false)}
        nativeScrollbar={false}>
        <NDrawerContent title="标题">
          <div>
            {/* 主题 */}
            <NDivider titlePlacement="center">主题</NDivider>
            <div>
              <NTooltip placement="bottom">
                {{
                  default: () =>
                    globalTheme.value === 'darkTheme' ? (
                      <span>浅色主题</span>
                    ) : (
                      <span>深色主题</span>
                    ),
                  trigger: () => (
                    <div>
                      <span style={{ marginRight: '20px' }}>主题色切换：</span>
                      <NSwitch
                        value={globalTheme.value === 'darkTheme'}
                        onUpdateValue={() =>
                          changeSetting(
                            'globalTheme',
                            globalTheme.value === 'darkTheme' ? 'lightTheme' : 'darkTheme',
                          )
                        }></NSwitch>
                    </div>
                  ),
                }}
              </NTooltip>
            </div>

            <NDivider titlePlacement="center">系统主题</NDivider>
            <div>
              <span></span>
            </div>

            {/* 导航栏模式 */}
            <NDivider titlePlacement="center">导航栏模式</NDivider>
            <div style={{ display: 'flex' }}>
              <NSpace size="large">
                <div style={svgCon}>
                  <NTooltip placement="top">
                    {{
                      default: () => <span>左侧菜单模式</span>,
                      trigger: () => (
                        <img src={navLeft} onClick={() => changeSetting('menuMode', 'vertical')} />
                      ),
                    }}
                  </NTooltip>
                  {menuMode.value === 'vertical' ? (
                    <NBadge style={badgeStyle} dot color="#19be6b" />
                  ) : (
                    <div></div>
                  )}
                </div>
                <div style={svgCon}>
                  <NTooltip placement="top">
                    {{
                      default: () => <span>顶部菜单模式</span>,
                      trigger: () => (
                        <img src={navTop} onClick={() => changeSetting('menuMode', 'horizontal')} />
                      ),
                    }}
                  </NTooltip>
                  {menuMode.value === 'horizontal' ? (
                    <NBadge style={badgeStyle} dot color="#19be6b" />
                  ) : (
                    <div></div>
                  )}
                </div>
              </NSpace>
            </div>

            {/* 导航栏风格 */}
            <NDivider titlePlacement="center">导航栏风格</NDivider>
            <div style={{ display: 'flex' }}>
              <NSpace size="large">
                <div style={svgCon}>
                  <NTooltip placement="top">
                    {{
                      default: () => <span>暗色侧边栏</span>,
                      trigger: () => (
                        <img
                          src={sideOrHeaderThemeDark}
                          onClick={() => changeSetting('sideOrHeaderTheme', 'dark')}
                        />
                      ),
                    }}
                  </NTooltip>
                  {sideOrHeaderTheme.value === 'dark' ? (
                    <NBadge style={badgeStyle} dot color="#19be6b" />
                  ) : (
                    <div></div>
                  )}
                </div>
                <div style={svgCon}>
                  <NTooltip placement="top">
                    {{
                      default: () => <span>白色侧边栏</span>,
                      trigger: () => (
                        <img
                          src={sideOrHeaderThemeLight}
                          onClick={() => changeSetting('sideOrHeaderTheme', 'light')}
                        />
                      ),
                    }}
                  </NTooltip>
                  {sideOrHeaderTheme.value === 'light' ? (
                    <NBadge style={badgeStyle} dot color="#19be6b" />
                  ) : (
                    <div></div>
                  )}
                </div>
                <div style={svgCon}>
                  <NTooltip placement="top">
                    {{
                      default: () => <span>暗色顶栏</span>,
                      trigger: () => (
                        <img
                          src={headerThemeDark}
                          onClick={() => changeSetting('sideOrHeaderTheme', 'header-dark')}
                        />
                      ),
                    }}
                  </NTooltip>
                  {sideOrHeaderTheme.value === 'header-dark' ? (
                    <NBadge style={badgeStyle} dot color="#19be6b" />
                  ) : (
                    <div></div>
                  )}
                </div>
              </NSpace>
            </div>

            {/* 界面功能 */}
            <NDivider titlePlacement="center">界面功能</NDivider>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>显示 LOGO</div>
                <div>
                  <NSwitch
                    value={showLogo.value}
                    onUpdateValue={() => changeSetting('showLogo', !showLogo.value)}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '14px' }}>
                <div>固定顶栏</div>
                <div>
                  <NSwitch
                    value={fixedHeader.value}
                    onUpdateValue={() => changeSetting('fixedHeader', !fixedHeader.value)}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '14px' }}>
                <div>显示侧边栏折叠样式</div>
                <div>
                  <NSwitch
                    value={showTrigger.value}
                    onUpdateValue={() => changeSetting('showTrigger', !showTrigger.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </NDrawerContent>
      </NDrawer>
    )
  },
})
