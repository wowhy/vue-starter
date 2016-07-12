import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from 'views/main/router'
import Example from 'views/example/router'

Vue.use(VueRouter)

const router = new VueRouter()

;
[Main, Example].forEach(config => {
  router.on(config.path, config)
})

router.redirect({
  '/': Main.path
})

export default router
