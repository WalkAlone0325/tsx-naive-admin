export default {
  globalTheme: 'lightTheme',
  sideHeaderTheme: 'dark',
  themeEditor: false,
  menuMode: 'vertical',
  showTrigger: 'bar',
  showLogo: true,
  showBorder: true,
  showBreadcrumb: true,
  showBreadcrumbIcon: true,
  isFixedHeader: true,
  adminTitle: '后台管理系统'
} as ISettings

export interface ISettings {
  /** 主题 */
  // 主题颜色
  globalTheme: 'darkTheme' | 'lightTheme' | 'sideDarkTheme'
  // 侧边栏和顶栏主题颜色
  sideHeaderTheme: 'dark' | 'light' | 'header-dark'
  // 主题编辑器
  themeEditor: boolean

  // 菜单栏模式
  menuMode: 'vertical' | 'horizontal'

  /** 控件 */
  // showTrigger
  showTrigger: boolean | 'bar' | 'arrow-circle'
  // Logo
  showLogo: boolean
  // border
  showBorder: boolean
  // 面包屑
  showBreadcrumb: boolean
  // 面包屑图标
  showBreadcrumbIcon: boolean

  /** 界面功能 */
  // 固定头部
  isFixedHeader: boolean
  // 标题
  adminTitle?: string
}
