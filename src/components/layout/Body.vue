<template>
  <div class="app-body">
    <app-tabbar></app-tabbar>
    <div class="container is-fluid is-marginless app-content">
      <router-view></router-view>
    <div>
  </div>
</template>

<script>
  import AppTabbar from './Tabbar'
  export default {
    components: {
      AppTabbar
    }
  }
</script>

<style lang="scss">
  @import '~bulma/sass/utilities/variables';
  @import '~bulma/sass/utilities/mixins';
  @import '../variables';
  .app-body {
    margin-left: $sidebar-width;
    padding-top: $header-height;
    transform: translate3d(0, 0, 0);
    @include mobile() {
      margin-left: 0;
    }
    .app-content {
      padding: 20px;
    }
  }
</style>