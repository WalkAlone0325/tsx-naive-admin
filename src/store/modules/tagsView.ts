import type { TagView } from '../types'

export const useTagsViewStore = defineStore('tagsView', () => {
  let visitedViews = $ref<TagView[]>([])
  let cachedViews = $ref<string[]>([])

  // 添加
  const addView = (view: TagView) => {
    const hasView = visitedViews.some((i) => i.fullPath === view.fullPath)
    if (hasView) return
    visitedViews.push(view)
    if (!view.noCache) {
      cachedViews.push(view.name)
    }
  }

  // 删除
  const delView = (view: TagView) => {
    return new Promise<void>((resolve) => {
      visitedViews = visitedViews.filter((i) => i.fullPath !== view.fullPath)
      cachedViews = cachedViews.filter((i) => i !== view.name)
      resolve()
    })
  }

  // 关闭右侧
  const closeRightView = (view: TagView) => {
    return new Promise<void>((resolve) => {
      const index = visitedViews.findIndex((i) => i.fullPath === view.fullPath)
      visitedViews = visitedViews.slice(0, index + 1)
      cachedViews = cachedViews.slice(0, index + 1)
      resolve()
    })
  }

  // 关闭其它
  const closeOtherView = (view: TagView) => {
    return new Promise<void>((resolve) => {
      visitedViews = visitedViews.filter(
        (i) => i.fullPath === view.fullPath || i.isAffix
      )
      // cachedViews = cachedViews.filter((i) => i === view.name || i === 'home')
      cachedViews = visitedViews.map((i) => i.name)
      resolve()
    })
  }

  // 关闭所有
  const closeAllView = () => {
    return new Promise<void>((resolve) => {
      visitedViews = visitedViews.filter((i) => i.isAffix)
      cachedViews = visitedViews.map((i) => i.name)
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
