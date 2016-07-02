<template>
  <div>
    <h1>Hello, World!</h1>
    <ui-button label="raised button"></ui-button>

    <p>Messages: {{ messages | json }}</p>
    <child></child>
  </div>
</template>
<script>
  export default {
    name: 'home',
    data() {
      return {
        messages: []
      };
    },
    components: {
      child: {
        template: '<input v-model="msg" /><ui-button @click="notify">Dispatch Event</ui-button>',
        data() {
          return {
            msg: 'Hello'
          };
        },
        methods: {
          notify() {
            if (this.msg.trim()) {
              this.$dispatch('child-msg', this.msg);
              this.msg = '';
            }
          }
        }
      }
    },
    events: {
      'child-msg': function event(msg) {
        this.messages.push(msg);
      }
    }
  };
</script>

<style>
</style>
