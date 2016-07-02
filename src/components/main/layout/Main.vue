<template>
  <main class="page">
    <div class="page-content container-fluid">
      <router-view></router-view>
    </div>
  </main>
</template>

<script>
  export default {};

</script>

<style>
  main {
    padding-left: 240px;
  }

  @media only screen and (max-width: 993px) {
    main {
      padding-left: 0;
    }
  }

  .page {
    padding: 10px;
  }
</style>
