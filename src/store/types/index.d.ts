import type { RouteMeta } from 'vue-router'

export interface TagView extends RouteMeta {
  fullPath: string
  [key: string]: any
}
