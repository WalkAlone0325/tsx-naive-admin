import { DashboardFilled, AppstoreFilled, ClusterOutlined } from '@vicons/antd'
import type { App } from 'vue'

const iconsList = [DashboardFilled, AppstoreFilled, ClusterOutlined]

export function setupIcons(app: App<Element>) {
  iconsList.forEach((icon) => {
    app.component(icon.name, icon)
  })
}
