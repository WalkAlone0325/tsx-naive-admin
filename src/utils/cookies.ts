import Cookies from 'js-cookie'

export class Keys {
  static collapsedKey = 'admin-collapsedKey'
  static tokenKey = 'admin-tokenKey'
}

// collapsed
export const getCollapsed = () => Cookies.get(Keys.collapsedKey)
export const setCollapsed = (key: string) => Cookies.set(Keys.collapsedKey, key)

// token
export const setToken = (token: string) => Cookies.set(Keys.tokenKey, token)
export const getToken = () => Cookies.get(Keys.tokenKey)
export const removeToken = () => Cookies.remove(Keys.tokenKey)

// [ ] emmmm 本来想把全局配置加到cookie记录，懒，就不加了
