import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/getUser',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: {
          username: 'duxing',
          role: 'admin'
        }
      }
    }
  }
] as MockMethod[]
