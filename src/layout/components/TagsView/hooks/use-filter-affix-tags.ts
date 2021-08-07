import { RouteRecordRaw } from 'vue-router'

export function useFilterAffixTags(routes: RouteRecordRaw[], basePath = '/') {
  let tags: any[] = []
  routes.map(route => {
    if (route.meta?.affix) {
      const tagPath = `${basePath}/${route.path}`.replace(/^\/+/, '/')
      tags.push({
        fullPath: tagPath,
        path: tagPath,
        name: route.name,
        meta: { ...route.meta },
      })
    }
    if (route.children) {
      const tempTags = useFilterAffixTags(route.children, route.path)
      if (tempTags.length >= 1) {
        tags = [...tags, ...tempTags]
      }
    }
  })

  return tags
}
