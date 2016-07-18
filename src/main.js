import App from './App'
import router from './router'
import auth from './utils/auth'

auth.sync()

router.start({
  data() {
    return {
      auth
    }
  },

  components: {
    App
  },

  ready() {
    document.body.classList.add('loaded')
  }
}, 'html')
