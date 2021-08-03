import { GetterTree } from 'vuex'
import { IRootState } from './interface'

//! 还没有做好相关的 ts 类型支持，待改进
const getters: GetterTree<IRootState, IRootState> = {
  // app
  collapsed: state => state.app.collapsed,
  size: state => state.app.size,
  device: state => state.app.device,

  // tagsView
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,

  // permission
  routes: state => state.permission.routes,
  addRoutes: state => state.permission.addRoutes,
}

export default getters
