import { NAlert } from 'naive-ui'
import { defineComponent } from 'vue'

{
  /* <template>
  <div style="padding:30px;">
    <el-alert :closable="false" title="menu 2" />
  </div>
</template> */
}

export default defineComponent({
  name: 'Menu2',
  setup() {
    return () => (
      <div style="padding: 30px">
        <NAlert title="menu 2"></NAlert>
      </div>
    )
  },
})
