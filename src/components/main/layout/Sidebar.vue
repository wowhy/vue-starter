<template>
  <aside>
  </aside>
</template>

<script>
  import UserDetails from './UserDetails';

  export default {
    components: {
      UserDetails
    },

    data() {
      return {
        menus: [
          {text: '', icon: '', link: {}}
        ]
      };
    },

    ready() {
    }
  };

</script>

<style>
  .left-sidebar-nav .collapsible-header:after {
    font-family: "Material Icons";
    content: "chevron_right";
    float: right;
    color: #9e9e9e;
    font-size: 18px;
  }

  .left-sidebar-nav .collapsible-header.active:after {
    content: "keyboard_arrow_down";
  }
</style>
