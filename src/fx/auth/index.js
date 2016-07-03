/* eslint no-underscore-dangle: "off" */
class AuthProvider {
  constructor() {
    // nothing
  }

  init(Vue, Router) {
    /* eslint no-unused-vars : "off" */
    /* eslint prefer-arrow-callback: "off" */
    const $auth = this;
    Router.beforeEach(function hook(transition) {
      if (transition.to.auth === false || $auth.check()) {
        transition.next();
      } else {
        transition.redirect('/login');
      }
    });

    Vue.mixin({
      created: function handler() {
        this.$auth = $auth;
      }
    });
  }

  check() {
    return !!this._user;
  }

  get user() {
    return this._user;
  }

  set user(value) {
    this._user = value;
  }

  get token() {
    return this._token;
  }

  set token(value) {
    this._token = value;
  }

  login(userName, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userName || password) {
          this._user = {
            id: '000000',
            code: 'admin',
            name: userName,
            roleCode: 'admin',
            roleName: '超级管理员'
          };
          this._token = '123456';
          resolve();
        } else {
          reject('用户名或密码不能为空！');
        }
      }, 500);
    });
  }

  logout() {
    this._user = null;
    this._token = null;
  }
}

export default new AuthProvider();
