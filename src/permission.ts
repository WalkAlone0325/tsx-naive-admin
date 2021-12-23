// import { getToken } from '@/utils/auth'
import { useNProgress } from '@vueuse/integrations/useNProgress'
import router from './router'

const title = useTitle()
const nprogress = useNProgress()

// const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  nprogress.start()

  title.value = '后台管理系统 | ' + to.meta.title

  // const hasToken = getToken()

  next()

  // if (hasToken) {
  //   if (to.path === '/login') {
  //     next({ path: '/' })
  //     nprogress.done()
  //   } else {
  //     const hasGetUserInfo = ''
  //     if (hasGetUserInfo) {
  //       next()
  //     } else {
  //       try {
  //         // await
  //       } catch (error) {}
  //     }
  //   }
  // }
})
