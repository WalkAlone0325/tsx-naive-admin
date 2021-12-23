import { KeepAlive, Transition } from 'vue'
import { RouteLocationNormalized, RouterView } from 'vue-router'

const AppMain = () => {
  return (
    <>
      <RouterView>
        {{
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          default: ({ Component, route }: { Component: any; route: RouteLocationNormalized }) => (
            <Transition name="fade">
              <KeepAlive>
                <Component is={Component} key={route.meta.usePathKey ? route.path : undefined} />
              </KeepAlive>
            </Transition>
          )
        }}
      </RouterView>
    </>
  )
}

export default AppMain
