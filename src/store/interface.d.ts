import { ISettings } from '@/types/vite-env'
import { RouteLocationNormalized, RouteRecordRaw } from 'vue-router'

export interface IRootState {
  app: IAppState
  permission: IPermissState
  tagsView: ITagsViewState
  settings: ISettings
  user: IUserState
}

export interface IAppState {
  collapsed: boolean
  device: string
  size: string
}

export interface IPermissState {
  routes: RouteRecordRaw[]
  addRoutes: RouteRecordRaw[]
}

export interface ITagsViewState {
  visitedViews: RouteLocationNormalized[]
  cachedViews: RouteLocationNormalized[]
}

export interface IUserState {
  token: string | undefined
  name: string
  avatar: string
  roles: string[]
}
