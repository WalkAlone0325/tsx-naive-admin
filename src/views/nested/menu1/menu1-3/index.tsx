{
  /* <template functional>
  <div style="padding:30px;">
    <el-alert :closable="false" title="menu 1-3" type="success" />
  </div>
</template> */
}

import { NAlert } from 'naive-ui'
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

export default defineComponent({
  name: 'Menu1-3',
  setup() {
    return (
      <div style="padding:30px">
        <NAlert title="menu 1-3" type="success">
          <RouterView />
        </NAlert>
      </div>
    )
  },
})
