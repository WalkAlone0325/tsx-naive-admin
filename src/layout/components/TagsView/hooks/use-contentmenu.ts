import { useMessage } from 'naive-ui'
import { nextTick, ref } from 'vue'
import { RouteLocationNormalized } from 'vue-router'
import { useInitView } from './use-init-view'

export function useContextmenu() {
  const selectedTag = ref()
  const showDropdownRef = ref(false)
  const xRef = ref(0)
  const yRef = ref(0)

  const message = useMessage()

  const { route, router, store, affixTags, visitedViews, toLastViews, isActive } = useInitView(
    selectedTag.value,
  )

  // 刷新当前
  const refreshSelectedTag = (view: RouteLocationNormalized) => {
    store.dispatch('tagsView/delCachedView', view).then(() => {
      nextTick(() => {
        router.replace({
          path: '/redirect' + route.fullPath,
        })
      })
    })
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
    store.dispatch('tagsView/delOthersViews', selectedTag.value).then(() => {
      // moveToCurrentTag()
    })
  }

  // 关闭所有
  const closeAllTags = (view: RouteLocationNormalized) => {
    store.dispatch('tagsView/delAllViews').then(({ visitedViews }) => {
      if (affixTags.value.some(tag => tag.path === view.path)) {
        return
      }
      toLastViews(visitedViews, view)
    })
  }

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

  // 选中
  const handleSelect = (key: string) => {
    showDropdownRef.value = false
    message.info(key)
    switch (key) {
      case 'refresh tag':
        // 刷新
        refreshSelectedTag(route)
        break

      case 'close tag':
        // 关闭
        closeSelectedTag(route)
        break

      case 'close other':
        // 关闭其它
        closeOthersTags()
        break

      case 'close all':
        // 关闭全部
        closeAllTags(route)
        break

      default:
        break
    }
  }

  // 开启右键菜单
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

  // 点击外面关闭右键菜单
  const onClickoutside = () => {
    showDropdownRef.value = false
  }

  return {
    isActive,
    visitedViews,
    closeSelectedTag,
    handleContextMenu,
    handleSelect,
    onClickoutside,
    options,
    xRef,
    yRef,
    showDropdownRef,
  }
}
