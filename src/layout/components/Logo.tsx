import logoImg from '@/assets/images/logo.png'
import { NGradientText } from 'naive-ui'

const Logo = defineComponent({
  setup() {
    return () => (
      <div>
        <img src={logoImg} style={{ width: '40px', height: '40px' }} />
        <NGradientText>后台管理系统</NGradientText>
      </div>
    )
  }
})

export default Logo
