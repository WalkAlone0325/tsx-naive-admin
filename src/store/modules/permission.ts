import { asyncRoutes, constantRoutes } from '@/router/routes'
import type { RouteRecordRaw } from 'vue-router'
import { Module } from 'vuex'
import { IPermissState, IRootState } from '../interface'

/**
 * 判断是否拥有权限
 * @param roles 权限成员
 * @param route 路由对象
 * @returns Boolean
 */
function hasPermission(roles: string[], route: RouteRecordRaw) {
  if (route.meta?.roles) {
    return roles.some(role => route.meta!.roles?.includes(role))
  } else {
    return true
  }
}

/**
 * 过滤异步路由
 * @param routes 路由表
 * @param roles 权限
 * @returns RouteRecordRaw[] 树形路由表
 */
export function filterAsyncRoutes(routes: RouteRecordRaw[], roles: string[]) {
  const res: RouteRecordRaw[] = []
  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })
  return res
}

const permissModule: Module<IPermissState, IRootState> = {
  namespaced: true,
  state: {
    routes: [],
    addRoutes: [],
  },
  mutations: {
    // 设置 routes
    SET_ROUTES: (state, routes) => {
      state.addRoutes = routes
      state.routes = constantRoutes.concat(routes)
    },
  },
  actions: {
    // 生成路由
    generateRoutes({ commit }, roles: string[]) {
      return new Promise(resolve => {
        let accessedRoutes
        if (roles.includes('admin')) {
          accessedRoutes = asyncRoutes || []
        } else {
          accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
        }
        // console.log(accessedRoutes)
        commit('SET_ROUTES', accessedRoutes)
        resolve(accessedRoutes)
      })
    },
  },
}

export default permissModule
