import { RouterView } from 'vue-router'
import GlobalProvider from './components/GlobalProvider'

const App = () => {
  return (
    <GlobalProvider>
      <RouterView />
    </GlobalProvider>
  )
}

export default App
