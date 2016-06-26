<template>
<div id="main">
  <div class="wrapper">
    <ui-sidebar></ui-sidebar>
    <section class="content">
      <div class="container">
        <router-view></router-view>
      </div>
    </section>
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