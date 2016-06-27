<template>
  <div>
    <ui-sidebar></ui-sidebar>
    <div>
      <router-view></router-view>
    </div>
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

<style>

</style>