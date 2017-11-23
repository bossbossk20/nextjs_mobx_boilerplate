import Axios from 'axios'

const baseURL = 'localhost:3000'

const Instant = Axios.create({
  baseURL,
  headers: {'Authorization': 'JWT xxxx'}
})

const get = (pathname) => {
  return Instant.get(pathname)
}

const post = (pathname, data) => {
  return Instant.get(pathname, data)
}

const http = {
  get,
  post
}

export default http
