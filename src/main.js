import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'

import App from './App'

import routes from './routes'
import store from './store'
import auth from './utils/auth'

Vue.use(Router)
Vue.use(Resource)

const router = new Router({
  base: '',
  mode: 'history',
  linkActiveClass: 'is-active',

  routes
})

store.commit('authed', auth.sync())

router.beforeEach((to, from, next) => {
  if (to.meta.authed || to.name === 'Home') {
    next()
  }

  if (store.getters.authed) {
    debugger
    let menus = store.getters.menus
    let menu = find(menus, to.name)
    if (menu) {
      next()
    }
  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

function find(menus, code) {
  if (menus && menus.length) {
    let menu = menus.find(m => m.code === code)
    if (menu) {
      return menu
    }

    for (let i = 0; i < menus.length; i++) {
      menu = find(menus[i].children, code)
      if (menu) {
        return menu
      }
    }
  }

  return null
}
