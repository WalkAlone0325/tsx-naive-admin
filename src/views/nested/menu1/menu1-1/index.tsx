import { NAlert } from 'naive-ui'
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

{
  /* <template>
  <div style="padding:30px;">
    <el-alert :closable="false" title="menu 1-1" type="success">
      <router-view />
    </el-alert>
  </div>
</template>
 */
}

export default defineComponent({
  name: 'Menu1-1',
  setup() {
    return (
      <div style="padding:30px">
        <NAlert title="menu 1-1" type="success">
          1111
          <RouterView />
        </NAlert>
      </div>
    )
  },
})
