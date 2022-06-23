import { useTagsViewStore } from '@/store'
import { NDropdown, NSpace, NTag } from 'naive-ui'
import useDropdown from './useDropdown'
import useTagsView from './useTagsView'

const TagsView = defineComponent({
  name: 'TagsView',
  setup() {
    const route = useRoute()
    // const tagsViewStore = useTagsViewStore()
    // const { visitedViews, cachedViews } = $(storeToRefs(tagsViewStore))
    const { handleClickTag, handleClose, visitedList } = $(useTagsView())

    const {
      showDropRef,
      x,
      y,
      handleSelect,
      handleContextMenu,
      clickoutSide,
      dropOptions
    } = $(useDropdown(toRaw(visitedList)))

    return () => (
      <NSpace
        size={'small'}
        align="center"
        style={{ height: '34px', margin: '0 5px' }}
      >
        {visitedList.map((i) => (
          <NTag
            key={i.fullPath}
            bordered={false}
            closable={!i?.isAffix}
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
          options={dropOptions as any}
          show={showDropRef}
          onClickoutside={clickoutSide}
          onSelect={handleSelect}
        />
      </NSpace>
    )
  }
})

export default TagsView
