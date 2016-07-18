<template>
    <div id="wrapper">
        <app-header></app-header>
        <app-sidebar></app-sidebar>

        <div class="content-page">
            <div class="content">
                <div class="container">
                    <div class="row">
                        <router-view></router-view>
                    </div>
                </div>
            </div>

            <app-footer></app-footer>
        </div>
    </div>
</template>

<script>
  import AppHeader from './components/layout/header'
  import AppSidebar from './components/layout/sidebar'
  import AppFooter from './components/layout/footer'

  import store from './vuex/store'

  export default {
    components: {
      AppHeader,
      AppSidebar,
      AppFooter
    },
    store,
    ready() {
      window.$.Components.init()
      window.$.App.init()
    }
  }
</script>