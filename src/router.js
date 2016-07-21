import Vue from 'vue'
import VueRouter from 'vue-router'

import { Home, Login } from 'views/main/router'
import Example from 'views/example/router'
import Greedy from 'views/greedy/router'

Vue.use(VueRouter)

const router = new VueRouter()

map([Home, Login, Example, Greedy])

router.redirect({
  '/': Home.path
})

export default router

function map(configs) {
  configs.forEach(config => {
    if (Object.prototype.toString.call(config) !== '[object Array]') {
      router.on(config.path, config)
    } else {
      map(config)
    }
  })
}
