import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from 'views/main/router'
import Example from 'views/example/router'
import Greedy from 'views/greedy/router'

Vue.use(VueRouter)

const router = new VueRouter()

;
[Main, Example, Greedy].forEach(config => {
  router.on(config.path, config)
})

router.redirect({
  '/': Main.path
})

export default router
