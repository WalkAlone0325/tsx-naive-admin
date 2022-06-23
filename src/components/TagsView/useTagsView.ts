import { useTagsViewStore } from '@/store'
import type { TagView } from '@/store'

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
    const tag = {
      ...homeView?.meta,
      fullPath: homeView?.path
    } as TagView
    tagsViewStore.addVisitedView(tag)
  }
  // 添加
  const addTags = () => {
    const { name } = route
    name &&
      tagsViewStore.addVisitedView({ ...route.meta, fullPath: route.fullPath })
  }
  // 上一个 tag
  const toLastView = () => {
    const latestView = visitedViews.value.slice(-1)[0]
    latestView && router.push(latestView.fullPath)
  }

  // 点击 Tag
  const handleClickTag = (tag: TagView) => {
    router.push(tag.fullPath)
  }
  // 点击关闭
  const handleClose = async (tag: TagView) => {
    await tagsViewStore.delView(tag)
    toLastView()
  }

  // 路由变化添加
  watch(
    () => route.fullPath,
    () => addTags()
  )

  return {
    visitedList: visitedViews,
    initTags,
    addTags,
    handleClickTag,
    handleClose
  }
}

export default useTagsView
