import { NButton, NH2 } from 'naive-ui'

const HomeView = defineComponent({
  name: 'HomeView',
  setup() {
    return () => (
      <div>
        home Content
        <NButton onClick={() => {}}>打开设置</NButton>
        <NH2>首页</NH2>
      </div>
    )
  }
})

export default HomeView
