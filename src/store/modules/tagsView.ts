import type { TagView } from '../types'

export const useTagsViewStore = defineStore('tagsView', () => {
  let visitedViews = $ref<TagView[]>([])
  const cachedViews = $ref([])

  // 添加 visited
  const addVisitedView = (view: TagView) => {
    const hasView = visitedViews.some((i) => i.fullPath === view.fullPath)
    if (hasView) return
    visitedViews.push(view)
  }
  // 添加 cached
  const addCachedView = (view: TagView) => {}
  // 添加
  const addView = (view: TagView) => {
    addVisitedView(view)
    addCachedView(view)
  }

  // 删除
  const delView = (view: TagView) => {
    return new Promise<void>((resolve) => {
      visitedViews = visitedViews.filter((i) => i.fullPath !== view.fullPath)
      resolve()
    })
  }

  // 关闭右侧
  const closeRightView = (view: TagView) => {
    return new Promise<void>((resolve) => {
      const index = visitedViews.findIndex((i) => i.fullPath === view.fullPath)
      visitedViews = visitedViews.slice(0, index + 1)
      resolve()
    })
  }

  // 关闭其它
  const closeOtherView = (view: TagView) => {
    return new Promise<void>((resolve) => {
      visitedViews = visitedViews.filter(
        (i) => i.fullPath === view.fullPath || i.isAffix
      )
      resolve()
    })
  }

  // 关闭所有
  const closeAllView = () => {
    return new Promise<void>((resolve) => {
      visitedViews = visitedViews.filter((i) => i.isAffix)
      resolve()
    })
  }

  return $$({
    visitedViews,
    cachedViews,
    addView,
    delView,
    closeRightView,
    closeOtherView,
    closeAllView
  })
})
