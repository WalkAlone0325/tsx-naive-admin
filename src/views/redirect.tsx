import { useMessage } from 'naive-ui'

const Redirect = () => {
  const message = useMessage()
  const router = useRouter()
  const route = useRoute()

  router.replace({ path: `/${route.params.path}`, query: route.query }).catch((err) => {
    message.warning(err)
  })

  return <></>
}

export default Redirect
