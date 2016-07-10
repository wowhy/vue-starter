import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

import Example from 'views/example/router'
import Home from 'views/main/router'

Vue.use(VueRouter)

const router = new VueRouter()

router.map({
  [Home.path]: Home,
  [Example.path]: Example
})

router.redirect({
  '/': '/home'
})

router.start({
  components: {
    App
  }
}, 'html')
