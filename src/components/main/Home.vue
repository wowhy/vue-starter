<template>
  <div>
    <h1>Hello, World!</h1>
  </div>
</template>
<script>
  import PageBase from 'fx/page/base'

  export default {
    extends: PageBase,
    name: 'home',
    data() {
      return {
        title: '主页',
        messages: []
      };
    }
  };
</script>

<style>
</style>
