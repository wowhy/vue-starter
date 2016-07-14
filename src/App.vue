<template>
  <div class="body-wrapper">
    <app-header>
      <a v-link="{name: 'home'}">Home</a>
      <a v-link="{name: 'example'}">Example</a>
      <a v-link="{name: 'greedy'}">Greedy</a>
    </app-header>
    <app-sidebar>
    </app-sidebar>
    <main>
      <router-view></router-view>
    </main>
    <app-footer></app-footer>
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
    store
  }
</script>