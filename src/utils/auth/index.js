export default {
  authenticated: false,
  token: '',
  user: {},

  login(username, password) {
    return new Promise(function (resolve, reject) {
      if (username === 'admin' && password === 'admin') {
        this.authenticated = true

        resolve()
      } else {
        reject({
          message: '用户名或密码错误!'
        })
      }
    }.bind(this))
  },

  logout() {
    return new Promise((resolve) => {
      this.authenticated = false
      this.save()
      resolve()
    })
  },

  check() {
    return this.authenticated
  },

  sync() {
    // TODO: 读取登录状态
    return false
  },

  save() {
    // TODO: 保存登录状态
  },

  getAuthHeader() {
    return {
      'Authorization': this.token
    }
  }
}
