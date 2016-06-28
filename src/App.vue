<template>
  <page-pre-loader v-if="loading"></page-pre-loader>  
  <div class="body-wrapper">
    <page-header></page-header>
    <page-main></page-main>
    <page-footer></page-footer>
  </div>
</template>

<script>
  import PageHeader from './components/layout/Header';
  import PageMain from './components/layout/Main';
  import PageFooter from './components/layout/Footer';
  import PagePreLoader from './components/layout/PreLoader';

  import Plugins from './fx/plugins';

  export default {
    components: {
      PageHeader,
      PageMain,
      PageFooter,
      PagePreLoader,
    },
    data() {
      return {
        loading: true,
      };
    },
    ready() {
      Plugins.init();
      setTimeout(() => {
        this.loading = false;
      }, 500);
    },
  };
  
</script>

<style>
  body {
    background-color: #f9f9f9;
  }
  
  .container-fluid {
    width: 100%;
  }
</style>