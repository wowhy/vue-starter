<template>
  <div class="body-wrapper" ng-if="!$auth.check()">
    
  </div>
  
  <div class="body-wrapper" ng-else>
    <ui-header></ui-header>
    <ui-main></ui-main>
  </div>
</template>

<script>
  import UiHeader from './components/layout/Header';
  import UiMain from './components/layout/Main';
  
  export default {
    components: {
      UiHeader,
      UiMain,
    },
  };

</script>

<style>

</style>