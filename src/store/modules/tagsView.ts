import type { TagView } from '../types'

export const useTagsViewStore = defineStore('tagsView', () => {
  let visitedViews = ref<TagView[]>([])
  let cachedViews = ref<string[]>([])

  // 添加
  const addView = (view: TagView) => {
    const hasView = visitedViews.value.some((i) => i.fullPath === view.fullPath)
    if (hasView) return
    visitedViews.value.push(view)
    if (!view.noCache) {
      cachedViews.value.push(view.name)
    }
  }

  // 删除
  const delView = (view: TagView) => {
    return new Promise<void>((resolve) => {
      visitedViews.value = visitedViews.value.filter(
        (i) => i.fullPath !== view.fullPath
      )
      cachedViews.value = cachedViews.value.filter((i) => i !== view.name)
      resolve()
    })
  }

  // 关闭右侧
  const closeRightView = (view: TagView) => {
    return new Promise<void>((resolve) => {
      const index = visitedViews.value.findIndex(
        (i) => i.fullPath === view.fullPath
      )
      visitedViews.value = visitedViews.value.slice(0, index + 1)
      cachedViews.value = cachedViews.value.slice(0, index + 1)
      resolve()
    })
  }

  // 关闭其它
  const closeOtherView = (view: TagView) => {
    return new Promise<void>((resolve) => {
      visitedViews.value = visitedViews.value.filter(
        (i) => i.fullPath === view.fullPath || i.isAffix
      )
      // cachedViews = cachedViews.filter((i) => i === view.name || i === 'home')
      cachedViews.value = visitedViews.value.map((i) => i.name)
      resolve()
    })
  }

  // 关闭所有
  const closeAllView = () => {
    return new Promise<void>((resolve) => {
      visitedViews.value = visitedViews.value.filter((i) => i.isAffix)
      cachedViews.value = visitedViews.value.map((i) => i.name)
      resolve()
    })
  }

  return {
    visitedViews,
    cachedViews,
    addView,
    delView,
    closeRightView,
    closeOtherView,
    closeAllView
  }
})
