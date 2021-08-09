import { NAlert } from 'naive-ui'
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

{
  /* <template>
  <div style="padding:30px;">
    <el-alert :closable="false" title="menu 1">
      <router-view />
    </el-alert>
  </div>
</template> */
}

export default defineComponent({
  name: 'Nested',
  setup() {
    return (
      <div style="padding: 30px">
        <NAlert title="menu1">
          <RouterView />
        </NAlert>
      </div>
    )
  },
})
