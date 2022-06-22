import { NAvatar, NEl, NH3 } from 'naive-ui'
import styles from './style/logo.module.less'
import logoUrl from '@/assets/logo.svg'

const BaseLogo = defineComponent({
  name: 'BaseLogo',
  props: {
    isCollapse: Boolean
  },
  setup(props) {
    return () => (
      <NEl class={styles.logoContainer}>
        <div class={styles.logoContent}>
          <img src={logoUrl} />
          {!props.isCollapse && <span>Admin Plus</span>}
        </div>
      </NEl>
    )
  }
})

export default BaseLogo
