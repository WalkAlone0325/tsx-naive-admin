import { computed, defineComponent, KeepAlive, Transition } from 'vue'
import { RouteLocationNormalizedLoaded, RouterView, useRoute } from 'vue-router'
import { useStore } from '@/store'

export default defineComponent({
  name: 'AppMain',
  setup() {
    const store = useStore()
    const route = useRoute()

    const cachedViews = computed(() => store.getters.cachedViews)
    const key = computed(() => route.path)
    // console.log(key.value)

    return () => {
      return (
        <div>
          <RouterView>
            {{
              default: (
                { Component }: { Component: () => JSX.Element },
                route: RouteLocationNormalizedLoaded,
              ) => {
                return (
                  <Transition name="fade-transform" mode="out-in">
                    <KeepAlive include={cachedViews.value as unknown as string[]}>
                      <Component key={key.value} />
                      {/* <Component key={route.path} /> */}
                    </KeepAlive>
                  </Transition>
                )
              },
            }}
          </RouterView>
        </div>
      )
    }
  },
})
