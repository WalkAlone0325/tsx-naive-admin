import { computed, defineComponent, PropType, ref, toRaw, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { NMenu } from 'naive-ui'
import { useMenu } from './use-menu'
import { useRoutesMenu } from './use-routes-menu'
import { useStore } from '@/store'
import { isExternal } from '@/utils/validate'

export default defineComponent({
  name: 'SideBar',
  props: {
    collapsed: {
      type: Boolean,
      default: true,
    },
    menuMode: {
      type: String as PropType<'vertical' | 'horizontal'>,
      default: 'vertical',
    },
    inverted: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const route = useRoute()
    const router = useRouter()
    const store = useStore()

    // 高亮菜单
    const activeKey = ref(route.name)
    watch(
      () => route.fullPath,
      () => (activeKey.value = route.name),
    )

    // 路由表
    const routes = computed(() => store.getters.routes)
    // 菜单
    // const menuOptions = useMenu(toRaw(routes.value))
    const menuOptions = useRoutesMenu(toRaw(routes.value))
    console.log(menuOptions)

    // methods
    const handleClickItem = (key: string) => {
      if (isExternal(key)) {
        // 使用name做外链跳转
        return window.open(key)
      } else {
        return router.push({ name: key })
      }
    }

    return () => (
      <NMenu
        inverted={props.inverted}
        mode={props.menuMode}
        collapsed={props.collapsed}
        collapsedWidth={64}
        collapsedIconSize={22}
        options={menuOptions}
        onUpdateValue={handleClickItem}
        v-model={[activeKey.value, 'value']}
      />
    )
  },
})
