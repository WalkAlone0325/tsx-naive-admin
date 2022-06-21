export type TriggerStyle = 'bar' | 'arrow-circle' | 'custom'

export interface SettingConfig {
  isShowDraw: boolean
  isShowLogo: boolean
  isFixedHeader: boolean
  isCollapse: boolean
  isShowTagViews: boolean
  isShowBreadcrumb: boolean
  isShowBreadcrumbIcon: boolean
  isInverted: boolean
  collapsedIconSize: number
  collapsedWidth: number
  globalTheme: 'darkTheme' | 'lightTheme'
  triggerStyle: TriggerStyle
}

export default {
  isShowDraw: false,
  isShowLogo: true,
  isFixedHeader: true,
  isCollapse: true,
  isShowTagViews: true,
  isShowBreadcrumb: true,
  isShowBreadcrumbIcon: true,
  isInverted: false,
  collapsedIconSize: 24,
  collapsedWidth: 50,
  globalTheme: 'lightTheme',
  triggerStyle: 'custom'
} as SettingConfig
