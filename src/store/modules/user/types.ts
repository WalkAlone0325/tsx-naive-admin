export type RoleType = '' | '*' | 'admin' | 'user'

export interface UserState {
  name?: string
  avatar?: string
  role: RoleType
}
