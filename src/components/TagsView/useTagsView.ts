import { useTagsViewStore } from '@/store'

const useTagsView = () => {
  const route = useRoute()
  const router = useRouter()
  const tagsViewStore = useTagsViewStore()
  const { visitedViews, cachedViews } = storeToRefs(tagsViewStore)

  // const visitedList = $computed(() => visitedViews)

  // 首页
  const homeView = $computed(() =>
    router.getRoutes().find((item) => item.name === 'home')
  )

  // 固定首页
  const initTags = () => {
    const tag = { ...homeView?.meta, fullPath: homeView?.path }
    tagsViewStore.addVisitedView(tag)
  }
  // 添加
  const addTags = () => {
    const { name } = route
    name &&
      tagsViewStore.addVisitedView({ ...route.meta, fullPath: route.fullPath })
  }
  // 上一个 tag
  const toLastView = (i) => {
    const latestView = visitedViews.value.slice(-1)[0]
    latestView && router.push(latestView.fullPath)
  }

  // 点击 Tag
  const handleClickTag = (i) => {
    router.push(i.fullPath)
  }
  // 点击关闭
  const handleClose = async (i) => {
    await tagsViewStore.delView(i)
    toLastView(i)
  }

  // 路由变化添加
  watch(
    () => route.fullPath,
    () => addTags()
  )

  watchEffect(() => {
    console.log(visitedViews)
  })

  return {
    visitedList: visitedViews,
    initTags,
    addTags,
    handleClickTag,
    handleClose
  }
}

export default useTagsView
