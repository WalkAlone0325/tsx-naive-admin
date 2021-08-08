import { useStore } from '@/store'
import { computed, ComputedRef, onMounted, Ref, ref, toRaw, watch } from 'vue'
import { RouteLocationNormalized, RouteRecordRaw, useRoute, useRouter } from 'vue-router'
import { useFilterAffixTags } from './use-filter-affix-tags'

export function useTagsView() {
  const route = useRoute()
  const router = useRouter()
  const store = useStore()

  // state
  const affixTags: Ref<RouteRecordRaw[]> = ref([])

  // computed
  const visitedViews: ComputedRef<RouteLocationNormalized[]> = computed(
    () => store.getters.visitedViews,
  )
  console.log(visitedViews.value)
  const routes = computed(() => store.getters.routes)

  // watch
  watch(
    () => route.path,
    () => {
      addTags()
    },
  )

  // methods
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
    console.log(route.name)
    if (route.name) {
      store.dispatch('tagsView/addView', route)
    }
    return false
  }

  // 移动到当前tag
  const moveToCurrentTag = () => {}

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
    affixTags,
    visitedViews,
    addTags,
    toLastViews,
    isActive,
  }
}
