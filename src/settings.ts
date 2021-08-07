import { ISettings } from './types/vite-env'

const settings: ISettings = {
  /** 主题颜色 */
  // 主题颜色
  globalTheme: 'lightTheme',
  // 侧边栏和顶栏主题颜色 暗色，亮色，顶栏暗色
  sideOrHeaderTheme: 'dark',
  // 主题编辑器 默认为false
  themeEditor: false,

  // 菜单栏模式
  menuMode: 'vertical',

  /** 界面控件 */
  // 是否显示 showTrigger 默认为 true
  showTrigger: true,
  // 是否显示头部logo 默认为 true
  showLogo: true,
  // 是否显示多标签 默认为 true
  tagsView: true,
  // 是否显示面包屑 默认为 true
  breadcrumb: true,
  // 是否显示面包屑图标
  breadcrumbIcon: true,

  /** 界面功能 */
  // 是否固定头部（导航和多标签） 默认为 true
  fixedHeader: true,

  // 标题
  adminTitle: '',

  // 是否打开全局配置
  openConfig: false,
}

export default settings
