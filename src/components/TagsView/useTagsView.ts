import { useTagsViewStore } from '@/store'
import type { TagView } from '@/store'

const useTagsView = () => {
  const route = useRoute()
  const router = useRouter()
  const tagsViewStore = useTagsViewStore()
  const { visitedViews } = storeToRefs(tagsViewStore)

  // 固定页
  const affixViews = $computed(() =>
    router.getRoutes().filter((item) => item.meta?.isAffix)
  )

  // 固定页
  const initTags = () => {
    affixViews.forEach((route) => {
      tagsViewStore.addView({
        ...route.meta,
        fullPath: route?.path,
        name: route.name
      } as TagView)
    })
  }
  // 添加
  const addTags = () => {
    const { name } = route
    name &&
      tagsViewStore.addView({
        ...route.meta,
        fullPath: route.fullPath,
        name: route.name as string
      })
  }
  // 上一个 tag
  const toLastView = () => {
    const lastView = visitedViews.value.slice(-1)[0]
    lastView && router.push(lastView.fullPath)
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

  onMounted(() => {
    initTags()
    addTags()
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
