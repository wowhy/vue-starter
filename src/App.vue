<template>
  <div id="wrapper">
    <app-header v-if="authenticated"></app-header>
    <app-sidebar v-if="authenticated"></app-sidebar>

    <div :class="{ 'content-page' : authenticated }">
      <div class="content">
        <div class="container">
          <div class="row">
            <router-view></router-view>
          </div>
        </div>
      </div>

      <app-footer v-if="authenticated"></app-footer>
    </div>
  </div>
</template>

<script>
  import AppHeader from './components/layout/header'
  import AppSidebar from './components/layout/sidebar'
  import AppFooter from './components/layout/footer'

  import {
    getAuthed
  } from './vuex/getters'

  export default {
    vuex: {
      getters: {
        authenticated: getAuthed
      }
    },

    components: {
      AppHeader,
      AppSidebar,
      AppFooter
    },
    ready() {
      window.$.Components.init()
      window.$.App.init()
    }
  }
</script>