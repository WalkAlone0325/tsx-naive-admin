import {
  computed,
  ComputedRef,
  defineComponent,
  nextTick,
  onMounted,
  Ref,
  ref,
  toRaw,
  watch,
  withModifiers,
} from 'vue'
import {
  RouteLocationNormalized,
  RouteRecordRaw,
  RouterLink,
  useRoute,
  useRouter,
} from 'vue-router'
import { useStore } from '@/store'
import { NDropdown, NElement, NSpace, NTag, useMessage } from 'naive-ui'
import { useFilterAffixTags } from './use-filter-affix-tags'

export default defineComponent({
  name: 'TagsView',
  setup() {
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

    // 关闭tag
    const handleClose = (view: RouteLocationNormalized) => {
      store.dispatch('tagsView/delView', view).then(({ visitedViews }) => {
        if (isActive(view)) {
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
    const isActive = (item: RouteLocationNormalized) => item.path === route.path

    // life
    onMounted(() => {
      initTags()
      addTags()
    })

    // 右键菜单
    const message = useMessage()

    const options = [
      {
        label: '杰·盖茨比',
        key: 'jay gatsby',
      },
      {
        label: '黛西·布坎南',
        key: 'daisy buchanan',
      },
      {
        type: 'divider',
        key: 'd1',
      },
      {
        label: '尼克·卡拉威',
        key: 'nick carraway',
      },
      {
        label: '其他',
        key: 'others1',
        children: [
          {
            label: '乔丹·贝克',
            key: 'jordan baker',
          },
          {
            label: '汤姆·布坎南',
            key: 'tom buchanan',
          },
          {
            label: '其他',
            key: 'others2',
            children: [
              {
                label: '鸡肉',
                key: 'chicken',
              },
              {
                label: '牛肉',
                key: 'beef',
              },
            ],
          },
        ],
      },
    ]

    const showDropdownRef = ref(false)
    const xRef = ref(0)
    const yRef = ref(0)

    const handleSelect = key => {
      showDropdownRef.value = false
      message.info(key)
    }
    const handleBlur = () => {
      showDropdownRef.value = false
    }

    const handleContextMenu = e => {
      e.preventDefault()
      showDropdownRef.value = false
      nextTick().then(() => {
        showDropdownRef.value = true
        xRef.value = e.clientX
        yRef.value = e.clientY
      })
    }
    const onClickoutside = e => {
      message.info('clickoutside')
      showDropdownRef.value = false
    }

    return () => (
      <NElement style={{ borderColor: 'var(--border-color)' }}>
        <NSpace style={{ maxHeight: '30px', marginLeft: '16px' }}>
          {visitedViews.value.map(tag => (
            <div onContextmenu={handleContextMenu}>
              <NTag
                class={isActive(tag) ? 'active' : ''}
                key={tag.path}
                closable={!tag.meta.affix}
                onClose={withModifiers(() => handleClose(tag), ['prevent', 'stop'])}>
                {/* <RouterLink to={{ path: tag.path, query: tag.query }}>{tag.meta?.title}</RouterLink> */}
                <RouterLink to={{ path: tag.path, query: tag.query }}>{tag.meta?.title}</RouterLink>
              </NTag>
            </div>
          ))}
          <NDropdown
            placement="bottom-start"
            onSelect={handleSelect}
            trigger="manual"
            x={xRef.value}
            y={yRef.value}
            options={options}
            show={showDropdownRef.value}
            onClickoutside={onClickoutside}></NDropdown>
        </NSpace>
      </NElement>
    )
  },
})
