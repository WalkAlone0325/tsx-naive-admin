import { useMessage } from 'naive-ui'
import { defineComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  name: 'Redirect',
  setup() {
    const { params, query } = useRoute()
    const router = useRouter()

    router.replace({ path: `/${params.path}`, query }).catch(err => {
      useMessage().warning(err)
    })

    return () => <></>
  },
})
