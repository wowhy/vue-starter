import './vendor'

import Vue from 'vue'
import App from './App'
import Modal from './utils/modal'

import router from './router'
import auth from './utils/auth'
import store from './vuex/store'

Vue.use(Modal)

store.dispatch('UPDATE_AUTHED', auth.sync())

router.beforeEach(function (transition) {
  if (transition.to.name === 'login' || auth.check()) {
    transition.next()
  } else {
    transition.redirect({ name: 'login' })
  }
})

router.start({
  components: {
    App
  },

  store,

  ready() {
    document.body.classList.add('loaded')
  }
}, 'html')
