import AuthStore from './AuthStore'
import LocationStore from './LocationStore'

const stores = {
  AuthStore: new AuthStore(),
  LocationStore: new LocationStore()
}
export default stores
