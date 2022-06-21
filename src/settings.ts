export type TriggerStyle = 'bar' | 'arrow-circle' | 'custom'

export interface SettingConfig {
  isShowDraw: boolean
  isShowLogo: boolean
  isFixedHeader: boolean
  isCollapse: boolean
  triggerStyle: TriggerStyle
}

export default {
  isShowDraw: false,
  isShowLogo: true,
  isFixedHeader: true,
  isCollapse: true,
  triggerStyle: 'custom'
} as SettingConfig
