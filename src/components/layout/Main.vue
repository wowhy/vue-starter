<template>
  <div>
    <ui-sidebar></ui-sidebar>
    <section>
      <router-view></router-view>
    </section>
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