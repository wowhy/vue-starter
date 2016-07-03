/* eslint no-underscore-dangle: "off" */
class AuthProvider {
  constructor() {
    //this._user = {
    //  id: '000000',
    //  code: 'admin',
    //  name: '超级用户',
    //  roleCode: 'admin',
    //  roleName: '超级管理员'
    //};
    //this._token = '123456';
  }

  init(Vue, Router) {
    /* eslint no-unused-vars : "off" */
    /* eslint prefer-arrow-callback: "off" */
    const $auth = this;
    Router.beforeEach(function hook(transition) {
      if (transition.to.auth === false || $auth.check()) {
        transition.next();
      } else {
        transition.redirect('/');
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

  login() {
  }

  logout() {
    this._user = null;
    this._token = null;
  }
}

export default new AuthProvider();
