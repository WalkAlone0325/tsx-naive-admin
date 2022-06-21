import type { SettingConfig } from '@/settings'
import settings from '@/settings'
import type { TriggerStyle } from '@/settings'

export const useSettingStore = defineStore('setting', () => {
  const setting = reactive(settings)

  const changeSetting = (
    key: keyof SettingConfig,
    value: boolean | TriggerStyle
  ) => {
    setting[key] = value
  }

  return {
    ...toRefs(setting),
    changeSetting
  }
})
