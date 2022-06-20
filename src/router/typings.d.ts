import type { Component } from 'vue'
import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    role?: string[]
    requiresAuth?: boolean
    icon: string | Component
    locale?: string
    title: string
    // menu select key
    menuSelectKey?: string
  }
}
