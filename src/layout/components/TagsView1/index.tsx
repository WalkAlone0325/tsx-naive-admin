import { computed, defineComponent, onMounted, ref, toRaw, watch, withModifiers } from 'vue'
import { RouteLocationNormalized, RouterLink, useRoute, useRouter } from 'vue-router'
import { useStore } from '@/store'
import { NElement, NIcon } from 'naive-ui'
import { CloseSquareOutlined } from '@vicons/antd'
import { useFilterAffixTags } from './use-filter-affix-tags'
import classes from './index.module.scss'

export default defineComponent({
  name: 'TagsView',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const store = useStore()

    // state
    const affixTags: any = ref([])

    // computed
    const visitedViews = computed(() => store.state.tagsView.visitedViews)
    console.log(visitedViews.value)
    const routes = computed(() => store.state.permission.routes)

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

    // 关闭tag
    const handleClose = (view: RouteLocationNormalized) => {
      store.dispatch('tagsView/delView', view).then(({ visitedViews }) => {
        if (isReactive(view)) {
          toLastViews(visitedViews, view)
        }
      })
      console.log(view)
    }

    const toLastViews = (
      visitedViews: RouteLocationNormalized[],
      view: RouteLocationNormalized,
    ) => {
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
    const isReactive = (route: RouteLocationNormalized) => route.path === route.path

    // life
    onMounted(() => {
      initTags()
      addTags()
    })

    return () => (
      <NElement>
        <div class={classes.tagsViewContainer}>
          {visitedViews.value.map(tag => (
            <RouterLink
              class={classes.linkItem}
              to={{ path: tag.path, query: tag.query }}
              key={tag.path}>
              <span>
                {tag.meta?.title}
                <span
                  v-show={!tag.meta.affix}
                  onClick={withModifiers(() => handleClose(tag), ['prevent', 'stop'])}>
                  <NIcon>
                    <CloseSquareOutlined />
                  </NIcon>
                </span>
              </span>
            </RouterLink>
          ))}
        </div>
      </NElement>
    )
  },
})
