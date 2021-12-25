import { useSettings } from '@/stores'
import { NGradientText, NIcon } from 'naive-ui'
import { HTMLAttributes } from 'vue'

interface IProps {
  collapsed?: boolean
  adminTitle?: string
}

const TheLogo = (props: IProps & HTMLAttributes) => {
  const { showBorder } = storeToRefs(useSettings())

  return (
    <div
      class="logo-container"
      style={showBorder.value ? { borderBottom: '1px solid var(--border-color)' } : {}}
    >
      <NIcon size={30} class="logo-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 261.76 226.69">
          <path
            d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z"
            fill="#41b883"
          />
          <path
            d="M161.096.001l-30.225 52.351L100.647.001H52.346l78.526 136.01L209.398.001z"
            fill="#34495e"
          />
        </svg>
      </NIcon>

      <NGradientText class="logo-text" v-show={!props.collapsed} size={18} type="info">
        {props.adminTitle}
      </NGradientText>
    </div>
  )
}

export default TheLogo
