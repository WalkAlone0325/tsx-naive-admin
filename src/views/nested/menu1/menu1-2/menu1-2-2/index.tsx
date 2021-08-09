{
  /* <template functional>
  <div style="padding:30px;">
    <el-alert :closable="false" title="menu 1-2-2" type="warning" />
  </div>
</template> */
}

import { NAlert } from 'naive-ui'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Menu1-2-2',
  setup() {
    return (
      <div style="padding: 30px">
        <NAlert title="menu 1-2-2" type="warning"></NAlert>
      </div>
    )
  },
})
