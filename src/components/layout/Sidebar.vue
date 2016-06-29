<template>
  <aside class="left-sidebar-nav">
    <ui-side-nav id="slide-out" fixed>
      <li class="user-details cyan darken-2">
        <div class="row">
          <div class="col col s4 m4 l4">
            <img alt="" class="circle responsive-img valign profile-image">
          </div>
          <div class="col col s8 m8 l8">
            <ul id="profile-dropdown" class="dropdown-content">
              <li><a href="#"><i class="material-icons">face</i> Profile</a>
              </li>
              <li><a href="#"><i class="material-icons">live_help</i> Help</a>
              </li>
              <li class="divider"></li>
              <li><a href="#"><i class="material-icons">lock_outline</i> Lock</a>
              </li>
              <li><a href="#"><i class="material-icons">keyboard_tab</i> Logout</a>
              </li>
            </ul>
            <a class="btn-flat dropdown-button waves-effect waves-light white-text profile-btn"
               href="javascript:void(0);"
               data-activates="profile-dropdown">John Doe<i class="material-icons right">arrow_drop_down</i>
            </a>

            <p class="user-roal">Administrator</p>
          </div>
        </div>
      </li>
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
  export default {
    ready: function handler() {
      const $ = window.$;
      $(this.$els.buttonCollapse).sideNav({edge: 'left'});
    }
  };

</script>

<style scoped>
  .left-sidebar-nav {
    position: fixed;
    width: 100px;
    left: 180px;
    z-index: 999;
    height: auto;
  }

  .side-nav {
    top: 55px;
  }

  .side-nav li a {
    font-weight: 400;
    font-size: 14px;
  }

  .side-nav li {
    padding: 0;
    line-height: 42px;
  }

  .side-nav a,
  .side-nav .collapsible-header {
    line-height: 42px;
    height: 42px;
    padding: 0 15px;
  }

  ul.side-nav .collapsible-header {
    margin: 0;
  }

  .side-nav.fixed a,
  .side-nav .collapsible-body li a,
  .side-nav.fixed .collapsible-body li a {
    padding: 0 15px;
  }

  .side-nav li a i {
    line-height: inherit;
    width: 2rem;
    font-size: 1.6rem;
    display: block;
    float: left;
    text-align: center;
    margin-right: 1rem;
  }

  .side-nav .collapsible-body li a {
    margin: 0 1rem 0 3rem;
  }

  .sidebar-collapse {
    position: absolute;
    left: -170px;
    top: -45px;
  }

  .collapsible-header:after {
    font-family: "Material Icons";
    content: "chevron_right";
    float: right;
    color: #9e9e9e;
    font-size: 18px;
  }

  .collapsible-header.active:after {
    content: "keyboard_arrow_down";
  }

  li.user-details {
    background: url("../../assets/user-bg.jpg") no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    margin-bottom: 15px;
    padding: 15px 0 0 15px;
  }

  li.user-details #profile-dropdown li:not(.divider) {
    min-height: 42px;
  }

  li.user-details #profile-dropdown a {
    padding-left: 15px;
  }

  li.user-details .profile-btn {
    margin: 0;
    text-transform: capitalize;
    padding: 0;
    text-shadow: 1px 1px 1px #444;
    font-size: 15px;
  }

  li.user-details .user-roal {
    color: #fff;
    margin-top: -16px;
    font-size: 13px;
    text-shadow: 1px 1px 1px #444;
  }

  li.user-details .user-details .row {
    margin: 0;
  }
</style>
