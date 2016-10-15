<template>
  <div id="app">
    <div class="wrapper" v-if="authed">
      <app-header></app-header>
      <app-sidebar :show="config.sidebar"></app-sidebar>
      <app-body></app-body>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'
  import {
    AppHeader,
    AppSidebar,
    AppBody,
    AppFooter
  } from './components/layout'
  import store from './store'

  export default {
    name: 'App',
    store: store,
    components: {
      AppHeader,
      AppSidebar,
      AppBody,
      AppFooter
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

    }
  }
</script>

<style lang="scss">
  @import '~animate.css';
  @import '~bulma';
  $fa-font-path: '~font-awesome/fonts/';
  @import '~font-awesome/scss/font-awesome';
  html,
  body {
    margin: 0;
    overflow: hidden;
    font-family: "Segoe UI", "Lucida Grande", Helvetica, Arial, "Microsoft YaHei", FreeSans, Arimo, "Droid Sans", "wenquanyi micro hei", "Hiragino Sans GB", "Hiragino Sans GB W3", Arial, sans-serif;
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