const globalTheme = 'lightTheme'
const sideHeaderTheme = 'dark'
const themeEditor = false
const menuMode = 'vertical'
const showTrigger = 'bar'
const showLogo = true
const showBorder = true
const showBreadcrumb = true
const showBreadcrumbIcon = true
const isFixedHeader = true
const adminTitle = '后台管理系统'

// export default settings as ISettings

export {
  globalTheme,
  sideHeaderTheme,
  themeEditor,
  menuMode,
  showTrigger,
  showLogo,
  showBorder,
  showBreadcrumb,
  showBreadcrumbIcon,
  isFixedHeader,
  adminTitle
}

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
