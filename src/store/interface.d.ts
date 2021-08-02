import { RouteLocationNormalized, RouteRecordRaw } from 'vue-router'

export interface IRootState {}

export interface IAppState {}

export interface IPermissState {
  routes: RouteRecordRaw[]
  addRoutes: RouteRecordRaw[]
}
