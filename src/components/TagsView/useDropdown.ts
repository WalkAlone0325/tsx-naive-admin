const useDropdown = (options, visitedList) => {
  const showDropRef = ref(false)
  const x = ref(0)
  const y = ref(0)

  // 选择
  const handleSelect = (key: string | number) => {
    showDropRef.value = false
    console.log(key)
  }

  // 右击 tag
  const dropOptions = ref(options)

  const isLastTag = (tag) => {
    const index = visitedList.value.findIndex(
      (item) => tag.fullPath === item.fullPath
    )
    if (index !== -1 && index + 1 !== visitedList.value.length) return false
    else return true
  }

  // 判断返回的 options
  const checkDropOptions = (tag) => {
    if (tag.fullPath === '/home') {
      // 点击的是首页，不显示关闭当前
      dropOptions.value = options.filter((item) => item.key !== 'current')
    } else if (isLastTag(tag)) {
      dropOptions.value = options.filter((item) => item.key !== 'right')
    } else {
      dropOptions.value = options
    }
  }

  const handleContextMenu = async (e: MouseEvent, tag) => {
    e.preventDefault()
    showDropRef.value = false
    await nextTick()
    checkDropOptions(tag)
    showDropRef.value = true
    x.value = e.clientX
    y.value = e.clientY
  }

  // 点击外面
  const clickoutSide = () => {
    showDropRef.value = false
  }

  return {
    showDropRef,
    x,
    y,
    handleSelect,
    handleContextMenu,
    clickoutSide,
    dropOptions
  }
}

export default useDropdown
