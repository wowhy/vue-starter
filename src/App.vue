<template>
  <div class="body-wrapper">
    <page-header></page-header>
    <page-main></page-main>
    <page-footer></page-footer>
  </div>
</template>

<script>
  import PageHeader from 'components/layout/Header';
  import PageMain from 'components/layout/Main';
  import PageFooter from 'components/layout/Footer';

  import Plugins from './fx/plugins';

  export default {
    components: {
      PageHeader,
      PageMain,
      PageFooter,
    },
    data() {
    },
    ready() {
      Plugins.init();
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