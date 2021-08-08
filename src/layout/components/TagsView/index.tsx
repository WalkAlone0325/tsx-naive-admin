import { defineComponent, withModifiers } from 'vue'
import { RouterLink } from 'vue-router'
import { NDropdown, NElement, NSpace, NTag } from 'naive-ui'
import { useContextmenu } from './hooks/use-contentmenu'

export default defineComponent({
  name: 'TagsView',
  setup() {
    // tagsView
    // const { affixTags, isActive, visitedViews, toLastViews, handleClose } = useTagsView()

    // 右键菜单
    const {
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
    } = useContextmenu()

    return () => (
      <NElement style={{ borderColor: 'var(--border-color)' }}>
        <NSpace style={{ maxHeight: '34px', marginLeft: '16px' }}>
          {visitedViews.value.map(tag => (
            <div onContextmenu={e => handleContextMenu(tag, e)}>
              <NTag
                class={isActive(tag) ? 'active' : ''}
                key={tag.path}
                closable={!tag.meta.affix}
                onClose={withModifiers(() => closeSelectedTag(tag), ['prevent', 'stop'])}>
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
