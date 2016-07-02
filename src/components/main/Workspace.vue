<template>
  <div class="body-wrapper">
    <page-header></page-header>
    <page-sidebar></page-sidebar>
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
    components: {
      PageHeader,
      PageSidebar,
      PageMain,
      PageFooter
    }
  }
</script>

<style>
</style>
