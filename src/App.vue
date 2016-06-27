<template>
  <div class="wrapper">
    <ui-header></ui-header>
    <ui-main></ui-main>
    <ui-footer></ui-footer>
  </div>
</template>

<script>
  import UiHeader from './components/layout/Header';
  import UiMain from './components/layout/Main';
  import UiFooter from './components/layout/Footer';
  
  export default {
    components: {
      UiHeader,
      UiMain,
      UiFooter,
    },
  };

</script>

<style>

</style>