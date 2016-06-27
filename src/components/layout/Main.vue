<template>
  <div>
    <ui-sidebar></ui-sidebar>
    <main>
      <nav class="top-nav page-header grey lighten-5">
        <div class="nav-wrapper"><a class="page-title black-text text-darken-2">Page Head</a></div>
      </nav>
      <div class="content">
        <router-view></router-view>
      </div>
    </main>>
  </div>
</template>

<script>
  import UiSidebar from './Sidebar';
  
  export default {
    components: {
      UiSidebar,
    },
  };

</script>

<style scoped>
  main {
    padding-left: 240px;
  }
  
  .content {
    padding: 10px;
  }

  .page-header {
    padding-left: 10px;
    height: 100px;
  }
  
  .page-title {
    line-height: 100px;
    font-size: 38px;
  }
</style>