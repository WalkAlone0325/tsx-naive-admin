import PersonalCenter from '@/components/PersonalCenter'
import TipIcon from '@/components/TipIcon'
import { GithubFilled } from '@vicons/antd'
import { NLayoutHeader, NSpace } from 'naive-ui'
import style from './style/index.module.less'

const NavBar = defineComponent({
  setup() {
    return () => (
      <NLayoutHeader bordered class={style['header-container']}>
        <div class={style['right-toolbar']}>
          <NSpace>
            <TipIcon icon={GithubFilled} content="GitHub" />
            <TipIcon icon={GithubFilled} content="GitHub" />
            <TipIcon icon={GithubFilled} content="GitHub" />
          </NSpace>

          <PersonalCenter />
        </div>
      </NLayoutHeader>
    )
  }
})

export default NavBar
