const tokenKey = 'naive-ts-token'

export function getToken() {
  return localStorage.getItem(tokenKey)
}

export function setToken(token: string) {
  return localStorage.setItem(tokenKey, token)
}

export function removeToken() {
  return localStorage.removeItem(tokenKey)
}
