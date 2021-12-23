import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

import user from './system/user'
import routes from './system/routes'

export function setupProdMockServer() {
  createProdMockServer([...user, ...routes])
}
