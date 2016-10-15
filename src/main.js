import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'

import App from './App'

import routes from './routes'

Vue.use(Router)
Vue.use(Resource)

const router = new Router({
  base: '/',
  mode: 'history',
  linkActiveClass: 'is-active',

  routes
})

// router.beforeEach((to, from, next) => {
//   next()
// })

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
