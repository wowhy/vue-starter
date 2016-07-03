<template>
  <div class="body-wrapper">
    <page-header v-if="authed"></page-header>
    <page-sidebar v-if="authed"></page-sidebar>
    <page-main></page-main>
    <page-footer></page-footer>
  </div>
</template>

<script>
  import PageHeader from './layout/Header'
  import PageSidebar from './layout/Sidebar'
  import PageMain from './layout/Main'
  import PageFooter from './layout/Footer'

  export default{
    data() {
      return {
        authed: this.$root.$auth.check()
      };
    },
    components: {
      PageHeader,
      PageSidebar,
      PageMain,
      PageFooter
    },
    events: {
      login() {
        this.authed = true;
      }
    }
  }
</script>

<style>
  .body-wrapper {
    width: 100%;
  }
</style>
