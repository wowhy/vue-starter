<template>
  <aside class="left-sidebar-nav">
    <ui-side-nav id="slide-out" fixed>
      <user-details></user-details>

      <ui-nav-item>
        <a href="#/home" class="waves-effect waves-teal">
          <ui-icon value="dashboard"></ui-icon>
          Dashboard
        </a>
      </ui-nav-item>
      <ui-nav-collapsible-item>
        <ui-collapsible-header class="waves-effect waves-teal" label="dropdown menu"
                               icon="dashboard"></ui-collapsible-header>
        <ui-collapsible-body>
          <ul>
            <ui-nav-item><a href="#!">Link 3</a></ui-nav-item>
            <ui-nav-item><a href="#!">Link 4</a></ui-nav-item>
          </ul>
        </ui-collapsible-body>
      </ui-nav-collapsible-item>
    </ui-side-nav>

    <a href="javascript:void(0);"
       class="sidebar-collapse btn-floating btn-medium waves-effect waves-light hide-on-large-only"
       data-activates="slide-out"
       v-el:button-collapse>
      <ui-icon value="menu"></ui-icon>
    </a>
  </aside>
</template>

<script>
  import UserDetails from './UserDetails';

  export default {
    components: {
      UserDetails
    },

    ready: function handler() {
      const $ = window.$;
      $(this.$els.buttonCollapse).sideNav({edge: 'left'});
    }
  };

</script>

<style>
  .left-sidebar-nav {
    position: fixed;
    width: 100px;
    left: 180px;
    z-index: 999;
    height: auto;
  }

  .left-sidebar-nav .side-nav {
    top: 55px;
  }

  .left-sidebar-nav .side-nav li a {
    font-weight: 400;
    font-size: 14px;
  }

  .left-sidebar-nav .side-nav li {
    padding: 0;
    line-height: 42px;
  }

  .left-sidebar-nav .side-nav a,
  .left-sidebar-nav .side-nav .collapsible-header {
    line-height: 42px;
    height: 42px;
    padding: 0 15px;
  }

  .left-sidebar-nav .side-nav .collapsible-header {
    margin: 0;
  }

  .left-sidebar-nav .side-nav.fixed a,
  .left-sidebar-nav .side-nav .collapsible-body li a,
  .left-sidebar-nav .side-nav.fixed .collapsible-body li a {
    padding: 0 15px;
  }

  .left-sidebar-nav .side-nav li a i {
    line-height: inherit;
    width: 2rem;
    font-size: 1.6rem;
    display: block;
    float: left;
    text-align: center;
    margin-right: 1rem;
  }

  .left-sidebar-nav .side-nav .collapsible-body li a {
    margin: 0 1rem 0 3rem;
  }

  .left-sidebar-nav .sidebar-collapse {
    position: absolute;
    left: -170px;
    top: -45px;
  }

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
