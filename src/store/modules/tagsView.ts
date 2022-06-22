export const useTagsViewStore = defineStore('tagsView', () => {
  const visitedViews = ref([])
  const cachedViews = ref([])

  // 添加访问过的
  const addVisitedView = (view) => {
    const hasView = visitedViews.value.find((i) => i.fullPath === view.fullPath)
    if (hasView) return
    visitedViews.value.push(view)
  }

  // 删除
  const delView = (view) => {
    return new Promise((resolve) => {
      visitedViews.value = visitedViews.value.filter(
        (i) => i.fullPath !== view.fullPath
      )
      resolve(undefined)
    })
  }

  return {
    visitedViews,
    cachedViews,
    addVisitedView,
    delView
  }
})
