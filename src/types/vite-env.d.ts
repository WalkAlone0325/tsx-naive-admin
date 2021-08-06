/// <reference types="vite/client" />

import { DialogApi, LoadingBarApi, MessageApi, NotificationApi } from 'naive-ui'

declare global {
  interface Window {
    $message: MessageApi
    $dialog: DialogApi
    $loadingBar: LoadingBarApi
    $notification: NotificationApi
  }
}

export interface ISettings {
  /** 主题颜色 */
  // 主题颜色
  globalTheme: 'darkTheme' | 'lightTheme'
  // 侧边栏和顶栏主题颜色 暗色，亮色，顶栏暗色
  sideOrHeaderTheme: 'dark' | 'light' | 'header-dark'
  // 主题编辑器 默认为false
  themeEditor: boolean

  // 菜单栏模式
  menuMode: 'vertical' | 'horizontal'

  /** 控件相关 */
  // 是否显示 showTrigger 默认为 true
  showTrigger: boolean
  // 是否显示头部logo 默认为 true
  showLogo: boolean
  // 是否显示多标签 默认为 true
  tagsView: boolean
  // 是否显示面包屑 默认为 true
  breadcrumb: boolean
  // 是否显示面包屑图标 默认为 true
  breadcrumbIcon: boolean

  /** 界面功能 */
  // 是否固定头部（导航和多标签） 默认为 true
  fixedHeader: boolean

  // 标题
  adminTitle?: string

  // 全局配置抽屉
  openConfig: boolean
}
