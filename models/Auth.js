import http from './../core/http'

export const loginModel = (username, password) => {
  return http.get('/auth')
}
