import { observable, action } from 'mobx'
import { loginModel } from './../models/Auth'
export default class AuthStore {
  @observable authData

  @action login (username, password) {
    loginModel(username, password).then(res => {
      this.authData = res.data
    })
  }
}
