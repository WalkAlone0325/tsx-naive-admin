import { RouteRecordRaw } from 'vue-router'
import { useTitle } from '@vueuse/core'
import router from '@/router'
import store from '@/store'

const title = useTitle()

router.beforeEach(async (to, from, next) => {
  // 开启加载条
  window.$loadingBar.start()

  // 动态标题栏
  title.value = `后台管理-${to.meta.title}`

  const accessRoutes: RouteRecordRaw[] = await store.dispatch('permission/generateRoutes', [
    'admin',
  ])

  // 动态添加路由表
  accessRoutes.map(route => {
    router.addRoute(route)
  })

  next()
})

router.afterEach(() => {
  window.$loadingBar.finish()
})

router.onError(() => {
  window.$loadingBar.error()
})
