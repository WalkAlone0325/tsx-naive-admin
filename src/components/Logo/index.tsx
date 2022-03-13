import logoImg from '@/assets/images/logo.png'
import { NCollapseTransition, NGradientText, NImage } from 'naive-ui'
import style from './style/index.module.less'

const Logo = defineComponent({
  props: {
    collapsed: Boolean
  },
  setup(props) {
    return () => (
      <div class={style['logo-container']}>
        <div class={style['logo']}>
          <img
            style={{ width: '40px', height: '40px' }}
            src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
          />
        </div>
        <NCollapseTransition show={!props.collapsed} class={style['title']}>
          <NGradientText size={18}>后台管理系统</NGradientText>
        </NCollapseTransition>
      </div>
    )
  }
})

export default Logo
