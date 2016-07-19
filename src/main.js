import './vendor'

import App from './App'
import router from './router'
import auth from './utils/auth'
import store from './vuex/store'

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
