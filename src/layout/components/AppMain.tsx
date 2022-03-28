import { NLayoutContent } from 'naive-ui'
import type { VNode } from 'vue'
import { KeepAlive, Suspense, Transition } from 'vue'
import { RouterView } from 'vue-router'

const AppMain = defineComponent({
  name: 'AppMain',
  setup() {
    return () => (
      <NLayoutContent>
        <Suspense>
          {{
            default: () => (
              <RouterView>
                {{
                  default: ({ Component }: { Component: VNode }) => (
                    <Transition name="fade" mode="out-in">
                      <KeepAlive>{h(Component)}</KeepAlive>
                    </Transition>
                  )
                }}
              </RouterView>
            ),
            fallback: () => <h1>Loading...</h1>
          }}
        </Suspense>
      </NLayoutContent>
    )
  }
})

export default AppMain
