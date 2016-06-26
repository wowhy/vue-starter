class AuthProvider {
  constructor() {
    this.user = null;
    this.token = null;
  }

  init(router) {
    router.beforeEach(transition => {
      if (transition.to.guest || this.check()) {
        transition.next();
      } else {
        transition.abort();
      }
    });
  }

  check() {
    return true;
  }

  getCurrentUser() {
    return this.user;
  }

  setCurrentUser(user) {
    this.user = user;
  }

  getToken() {
    return this.token;
  }

  setToken(token) {
    this.token = token;
  }
}

const auth = new AuthProvider();

import Vue from 'vue';

Vue.mixin({
  created: function handler() {
    this.$auth = auth;
  },
});

export default auth;
