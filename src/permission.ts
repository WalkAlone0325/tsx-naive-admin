// import { getToken } from '@/utils/auth'
import { useNProgress } from '@vueuse/integrations/useNProgress'
import router from './router'
import { useRouterList } from './stores'

const title = useTitle()
// const nprogress = useNProgress()

// const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  // nprogress.start()

  title.value = '后台管理系统 | ' + to.meta.title
  const routerStore = useRouterList()
  // 生成路由
  routerStore.generateRoutes()

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
