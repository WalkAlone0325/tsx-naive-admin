import { KeepAlive, Transition } from 'vue'
import { RouterView } from 'vue-router'

{
  /* <template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script lang="ts" setup></script> */
}

const AppMain = () => {
  return (
    <>
      <RouterView>
        {{
          default: ({ Component, route }: { Component: any; route: any }) => (
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
