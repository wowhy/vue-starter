import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

import Example from 'views/example/router'

Vue.use(VueRouter)

const router = new VueRouter()

router.on(Example.path, Example)

router.redirect({
  '/': Example.path
})

router.start({
  components: {
    App
  }
}, 'html')
