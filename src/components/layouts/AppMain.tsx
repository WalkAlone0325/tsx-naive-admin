import type { PropType } from 'vue'
import { KeepAlive, Suspense, Transition } from 'vue'
import { RouterView } from 'vue-router'
import type { VNode } from 'vue'
import type { RouteLocationNormalizedLoaded } from 'vue-router'
import { NSpin } from 'naive-ui'

const AppMain = defineComponent({
  name: 'AppMain',
  props: {
    cachedViews: Array as PropType<string[]>
  },
  setup(props) {
    const routerSlots = {
      default: ({
        Component,
        route
      }: {
        Component: VNode
        route: RouteLocationNormalizedLoaded
      }) =>
        Component && (
          <Transition name="fade" mode="out-in">
            <KeepAlive include={props.cachedViews}>
              {/* handle multi root component warning */}
              <div>{h(Component, { key: route.path })}</div>
            </KeepAlive>
          </Transition>
        )
    }

    const slots = {
      default: () => <RouterView v-slots={routerSlots} />,
      fallback: () => <NSpin size={'large'} />
    }

    return () => <Suspense v-slots={slots}></Suspense>
  }
})

export default AppMain
