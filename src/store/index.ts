import { InjectionKey } from 'vue'
import { createStore, useStore as useBaseStore, Store, ModuleTree } from 'vuex'
import { IRootState } from './interface'

/**
 * 自动导包
 * @returns modules
 */
const allModules = import.meta.globEager('./modules/*.ts')

const modules: ModuleTree<IRootState> = {}

Object.keys(allModules).map(path => {
  const filename = path.split('/')[2].split('.')[0]
  modules[filename] = allModules[path][filename] || allModules[path].default || allModules[path]
})

// 定义注入类型
export const key: InjectionKey<Store<IRootState>> = Symbol()

const store = createStore({
  modules,
})

export function useStore() {
  return useBaseStore(key)
}

export default store
