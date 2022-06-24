import type { Component } from 'vue'
import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    icon: string | Component
    title: string
    role?: string[]
    requiresAuth?: boolean
    locale?: string
    isAffix?: boolean
    noCache?: boolean
    // menu select key
    menuSelectKey?: string
  }
}
