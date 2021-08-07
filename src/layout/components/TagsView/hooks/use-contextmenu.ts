import { useMessage } from 'naive-ui'
import { nextTick, ref } from 'vue'
import { useStore } from '@/store'
import { RouteLocationNormalized, useRoute, useRouter } from 'vue-router'

export function useContextmenu(
  affixTags,
  isActive: (payload: RouteLocationNormalized) => boolean,
  toLastViews: (visitedViews: RouteLocationNormalized[], view: RouteLocationNormalized) => void,
) {
  const route = useRoute()
  const router = useRouter()
  const store = useStore()

  // 右键菜单
  const message = useMessage()

  const options = [
    {
      label: '刷新当前',
      key: 'refresh tag',
      // icon: ReloadOutlined,
    },
    {
      label: '关闭当前',
      key: 'close tag',
    },
    {
      label: '关闭其它',
      key: 'close other',
    },
    {
      label: '关闭全部',
      key: 'close all',
    },
  ]

  const selectedTag = ref()
  const showDropdownRef = ref(false)
  const xRef = ref(0)
  const yRef = ref(0)

  // 刷新当前
  const refreshSelectedTag = (view: RouteLocationNormalized) => {
    store.dispatch('tagsView/delCachedView', view)
  }
  // 关闭当前
  const closeSelectedTag = (view: RouteLocationNormalized) => {
    store.dispatch('tagsView/delView', view).then(({ visitedViews }) => {
      if (isActive(view)) {
        toLastViews(visitedViews, view)
      }
    })
  }
  // 关闭其它
  const closeOthersTags = () => {
    router.push(selectedTag.value)
    // store.dispatch('tagsView/delOthersViews', selectedTag.value).then(() => {
    //   // moveToCurrentTag()
    // })
  }
  // 关闭所有
  const closeAllTags = (view: RouteLocationNormalized) => {
    store.dispatch('tagsView/delAllViews').then(({ visitedViews }) => {
      if (affixTags.some(tag => tag.path === view.path)) {
        return
      }
      toLastViews(visitedViews, view)
    })
  }

  // 选中
  const handleSelect = (key: string) => {
    showDropdownRef.value = false
    message.info(key)
    switch (key) {
      case 'refresh tag':
        refreshSelectedTag(route)
        break

      case 'close tag':
        closeSelectedTag(route)
        break

      case 'close other':
        closeOthersTags()
        break

      case 'close all':
        closeAllTags(route)
        break

      default:
        break
    }
  }
  const handleBlur = () => {
    showDropdownRef.value = false
  }

  const handleContextMenu = (tag, e) => {
    console.log(tag)
    selectedTag.value = tag
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

  return {
    options,
    xRef,
    yRef,
    handleBlur,
    handleContextMenu,
    handleSelect,
    onClickoutside,
    showDropdownRef,
  }
}
