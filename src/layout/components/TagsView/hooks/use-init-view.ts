import { useStore } from '@/store'
import { computed, ComputedRef, nextTick, onMounted, ref, Ref, toRaw, watch } from 'vue'
import { RouteLocationNormalized, RouteRecordRaw, useRoute, useRouter } from 'vue-router'
import { useFilterAffixTags } from './use-filter-affix-tags'

export function useInitView(selectedTag: any) {
  const route = useRoute()
  const router = useRouter()
  const store = useStore()

  // 固定的tag
  const affixTags: Ref<RouteRecordRaw[]> = ref([])

  /** computed */
  // 访问过的路由
  const visitedViews: ComputedRef<RouteLocationNormalized[]> = computed(
    () => store.getters.visitedViews,
  )

  // routes
  const routes = computed(() => store.getters.routes)

  // watch
  watch(
    () => route.path,
    () => {
      addTags()
    },
  )

  /** methods */
  // 加载固定tag
  const initTags = () => {
    affixTags.value = useFilterAffixTags(toRaw(routes.value))
    for (const tag of affixTags.value) {
      if (tag.name) {
        store.dispatch('tagsView/addVisitedView', tag)
      }
    }
  }
  // 添加访问的tag
  const addTags = () => {
    if (route.name) {
      store.dispatch('tagsView/addView', route)
    }
    return false
  }

  // 去当前tag
  const toCurrentTag = () => {
    nextTick(() => {
      for (const tag of selectedTag) {
        if (tag.to.path === route.path) {
          if (tag.to.fullPath !== route.fullPath) {
            store.dispatch('tagsView/updateVisitedView', route)
          }
          break
        }
      }
    })
  }
  // 去上一个 tag
  const toLastViews = (visitedViews: RouteLocationNormalized[], view: RouteLocationNormalized) => {
    const latestView = visitedViews.slice(-1)[0]
    if (latestView) {
      router.push(latestView.fullPath)
    } else {
      if (view.name === 'Dashboard') {
        router.replace({ path: '/redirect' + view.fullPath })
      } else {
        router.push('/')
      }
    }
  }

  // 是否为活跃状态
  const isActive = (item: RouteLocationNormalized) => item.path === route.path

  // life
  onMounted(() => {
    initTags()
    addTags()
  })

  return {
    route,
    router,
    store,
    affixTags,
    visitedViews,
    addTags,
    toLastViews,
    isActive,
  }
}
