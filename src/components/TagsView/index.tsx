import { useTagsViewStore } from '@/store'
import { NDropdown, NIcon, NSpace, NTag } from 'naive-ui'
import useDropdown from './useDropdown'
import useTagsView from './useTagsView'

const TagsView = defineComponent({
  name: 'TagsView',
  setup() {
    const route = useRoute()
    // const tagsViewStore = useTagsViewStore()
    // const { visitedViews, cachedViews } = $(storeToRefs(tagsViewStore))
    const { initTags, addTags, handleClickTag, handleClose, visitedList } =
      useTagsView()
    const s = useTagsView()

    /********** */
    const options = [
      {
        label: '刷新页面',
        key: 'refresh'
      },
      {
        label: '关闭当前',
        key: 'current'
      },
      {
        label: '关闭右侧',
        key: 'right'
      },
      {
        label: '关闭其它',
        key: 'other'
      },
      {
        label: '关闭所有',
        key: 'all'
      }
    ]
    const {
      showDropRef,
      x,
      y,
      handleSelect,
      handleContextMenu,
      clickoutSide,
      dropOptions
    } = $(useDropdown(options, s.visitedList))

    onMounted(() => {
      initTags()
      addTags()
    })

    return () => (
      <NSpace
        size={'small'}
        align="center"
        style={{ height: '34px', margin: '0 5px' }}
      >
        {s.visitedList.value.map((i) => (
          <NTag
            key={i.fullPath}
            bordered={false}
            closable={i.fullPath !== '/home'}
            onClose={() => handleClose(i)}
            color={
              i.fullPath === route.fullPath
                ? {
                    color: 'var(--n-color-checked)',
                    textColor: 'var(--n-text-color-checked)'
                  }
                : {}
            }
            style={{ cursor: 'pointer' }}
          >
            <span
              onClick={() => handleClickTag(i)}
              onContextmenu={(...args) => handleContextMenu(...args, i)}
            >
              {i.title}
            </span>
          </NTag>
        ))}

        <NDropdown
          placement={'bottom-start'}
          showArrow
          trigger={'manual'}
          x={x}
          y={y}
          options={dropOptions}
          show={showDropRef}
          onClickoutside={clickoutSide}
          onSelect={handleSelect}
        />
      </NSpace>
    )
  }
})

export default TagsView
