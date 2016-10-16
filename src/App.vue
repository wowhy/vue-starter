<template>
  <div id="app">
    <div class="wrapper" v-if="authed">
      <app-header></app-header>
      <app-sidebar :show="config.sidebar"></app-sidebar>
      <app-body></app-body>
      <app-footer></app-footer>
    </div>
    <div class="wrapper" v-else>
      <login></login>
    </div>
  </div>
</template>

<script>
  import store from './store'
  import {
    mapGetters
  } from 'vuex'
  import {
    AppHeader,
    AppSidebar,
    AppBody,
    AppFooter
  } from './components/layout'
  import Login from './components/page/Login'

  export default {
    name: 'App',
    store: store,
    components: {
      AppHeader,
      AppSidebar,
      AppBody,
      AppFooter,
      Login
    },
    data() {
      return {}
    },
    computed: {
      ...mapGetters([
        'authed',
        'config'
      ])
    },
    beforeMount() {
      const config = this.config
      const {
        body
      } = document
      const WIDTH = 768
      const RATIO = 3

      const handler = () => {
        if (!document.hidden) {
          let rect = body.getBoundingClientRect()
          config.mobile = rect.width - RATIO < WIDTH
          config.sidebar = !config.mobile
        }
      }

      document.addEventListener('visibilitychange', handler)
      window.addEventListener('DOMContentLoaded', handler)
      window.addEventListener('resize', handler)
    }
  }
</script>

<style lang="scss">
  $fa-font-path: '~font-awesome/fonts/';
  $family-primary: "Microsoft YaHei",
  sans-serif;
  @import '~animate.css';
  @import '~bulma';
  @import '~font-awesome/scss/font-awesome';
  html,
  body {
    margin: 0;
    overflow: hidden;
    font-family: $family-primary;
  }
  
  .animated {
    animation-duration: .377s;
  }
  
  #app,
  #app>.wrapper {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow: hidden;
  }
</style>