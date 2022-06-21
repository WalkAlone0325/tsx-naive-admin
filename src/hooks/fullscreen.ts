import { useFullscreen } from '@vueuse/core'

const { isFullscreen, isSupported, toggle } = useFullscreen()

const toggleScreen = () => {
  if (!isSupported) {
    window.$message.error('Your browser does not support fullscreen mode')
  } else {
    toggle()
  }
}

export { isFullscreen, toggleScreen }
