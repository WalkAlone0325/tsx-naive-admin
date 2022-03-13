import { NLayout } from 'naive-ui'
import SideBar from './components/SideBar'
import NavBar from './components/NavBar'
import AppMain from './components/AppMain'
import GlobalSetting from '@/components/GlobalSetting'

const PageLayout = defineComponent({
  name: 'PageLayout',
  setup() {
    return () => (
      <NLayout class="layout-container" hasSider position="absolute">
        <SideBar />
        <NLayout>
          <NavBar />
          <AppMain />
        </NLayout>
        <GlobalSetting />
      </NLayout>
    )
  }
})

export default PageLayout
