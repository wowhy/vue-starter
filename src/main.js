import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

import Main from 'views/main/router'
import Example from 'views/example/router'
import Home from 'views/main/router'

Vue.use(VueRouter)

const router = new VueRouter()

;
[Main, Example].forEach(config => {
  router.on(config.path, config)
})

router.redirect({
  '/': Main.path
})

router.start({
  components: {
    App
  }
}, 'html')
