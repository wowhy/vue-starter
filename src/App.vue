<template>
  <component :is="currentView">
  </component>
</template>

<script>
  import Auth from 'fx/auth'
  import Workspace from 'components/main/Workspace'
  import Login from 'components/main/Login'

  export default {
    data() {
      return {
        currentView: null
      };
    },
    components: {
      Workspace,
      Login
    },
    events: {
      changeView: function event(view) {
        this.currentView = view;
      },
      notify: function event(/*msg*/) {
      }
    },
    ready() {
      this.currentView = Auth.check() ? 'workspace' : 'login';
    }
  };
</script>

<style>

</style>
