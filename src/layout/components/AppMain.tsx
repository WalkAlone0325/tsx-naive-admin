import { NLayoutContent } from 'naive-ui'
import type { VNode } from 'vue'
import { KeepAlive, Suspense, Transition } from 'vue'
import type { RouteLocationNormalizedLoaded } from 'vue-router'
import { RouterView } from 'vue-router'

const AppMain = defineComponent({
  name: 'AppMain',
  setup() {
    return () => (
      <NLayoutContent>
        <RouterView>
          {{
            default: ({
              Component,
              route
            }: {
              Component: VNode
              route: RouteLocationNormalizedLoaded
            }) => (
              <Transition name="fade" mode="out-in">
                <KeepAlive>
                  <Suspense>
                    {{
                      default: () => h(Component, { key: route.path }),
                      fallback: () => <h3>Loading...</h3>
                    }}
                  </Suspense>
                </KeepAlive>
              </Transition>
            )
          }}
        </RouterView>
        {/* <RouterView>
          {{
            default: ({
              Component,
              route
            }: {
              Component: VNode
              route: RouteLocationNormalizedLoaded
            }) =>
              Component && (
                <Transition name="fade" mode="out-in">
                  <KeepAlive>
                    <Suspense>
                      {{
                        default: () => h(Component, { key: route.path }),
                        fallback: () => <div>Loading...</div>
                      }}
                    </Suspense>
                  </KeepAlive>
                </Transition>
              )
          }}
        </RouterView> */}
      </NLayoutContent>
    )
  }
})

export default AppMain
