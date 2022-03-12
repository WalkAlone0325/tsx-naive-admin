import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    // your meta config
    role?: string[]
    requiresAuth?: boolean
    icon?: string
    title?: string
  }
}
