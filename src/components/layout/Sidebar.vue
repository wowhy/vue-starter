<template>
  <aside class="left-sidebar-nav">
      <ul class="slide-out side-nav fixed leftside-navigation">
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
                      <a class="btn-flat dropdown-button waves-effect waves-light white-text profile-btn" href="#" data-activates="profile-dropdown">John Doe<i class="material-icons right">arrow_drop_down</i></a>
                      <p class="user-roal">Administrator</p>
                  </div>
              </div>
          </li>
          <li class="bold active">
            <a href="#/home" class="waves-effect waves-cyan"><i class="material-icons">dashboard</i> Dashboard</a>
          </li>
          <li class="no-padding">
              <ul class="collapsible collapsible-accordion">
                  <li class="bold"><a class="collapsible-header waves-effect waves-cyan"><i class="material-icons">view_carousel</i> Layouts</a>
                      <div class="collapsible-body">
                          <ul>
                              <li><a href="layout-fullscreen.html">Full Screen</a>
                              </li>
                              <li><a href="layout-horizontal-menu.html">Horizontal Menu</a>
                              </li>
                          </ul>
                      </div>
                  </li>
              </ul>
          </li>
          <li class="no-padding">
              <ul class="collapsible collapsible-accordion">
                  <li class="bold"><a class="collapsible-header waves-effect waves-cyan"><i class="material-icons">invert_colors</i> CSS</a>
                      <div class="collapsible-body">
                          <ul>
                              <li><a href="css-typography.html">Typography</a>
                              </li>
                              <li><a href="css-icons.html">Icons</a>
                              </li>
                              <li><a href="css-animations.html">Animations</a>
                              </li>
                              <li><a href="css-shadow.html">Shadow</a>
                              </li>
                              <li><a href="css-media.html">Media</a>
                              </li>
                              <li><a href="css-sass.html">Sass</a>
                              </li>
                          </ul>
                      </div>
                  </li>
                  <li class="bold"><a class="collapsible-header  waves-effect waves-cyan"><i class="material-icons">palette</i> UI Elements</a>
                      <div class="collapsible-body">
                          <ul>
                              <li><a href="ui-alerts.html">Alerts</a>
                              </li>
                              <li><a href="ui-buttons.html">Buttons</a>
                              </li>
                              <li><a href="ui-badges.html">Badges</a>
                              </li>
                              <li><a href="ui-breadcrumbs.html">Breadcrumbs</a>
                              </li>
                              <li><a href="ui-collections.html">Collections</a>
                              </li>
                              <li><a href="ui-collapsibles.html">Collapsibles</a>
                              </li>
                              <li><a href="ui-tabs.html">Tabs</a>
                              </li>
                              <li><a href="ui-navbar.html">Navbar</a>
                              </li>
                              <li><a href="ui-pagination.html">Pagination</a>
                              </li>
                              <li><a href="ui-preloader.html">Preloader</a>
                              </li>
                              <li><a href="ui-toasts.html">Toasts</a>
                              </li>
                              <li><a href="ui-tooltip.html">Tooltip</a>
                              </li>
                              <li><a href="ui-waves.html">Waves</a>
                              </li>
                          </ul>
                      </div>
                  </li>
              </ul>
          </li>
          <li class="li-hover">
              <div class="divider"></div>
          </li>
          <li class="li-hover">
              <p class="ultra-small margin more-text">MORE</p>
          </li>
          <li><a href="angular-ui.html"><i class="material-icons">verified_user</i> Angular UI  <span class="new badge"></span></a>
          </li>
      </ul>
      <a href="#" data-activates="slide-out" class="sidebar-collapse btn-floating btn-medium waves-effect waves-light hide-on-large-only cyan"><i class="material-icons">menu</i></a>
  </aside>
</template>

<script>
  export default {};

</script>

<style scoped>
  .left-sidebar-nav {
    position: fixed;
    width: 100px;
    left: 180px;
    z-index: 999;
    height: auto;
  }
  
  .left-sidebar-nav {
    position: fixed;
    width: 100px;
    left: 180px;
    z-index: 999;
    height: auto;
  }
  
  .left-sidebar-nav span.badge.new {
    line-height: 20px;
    margin-top: 11px;
  }
  
  nav.top-nav {
    height: 122px;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }
  
  nav.top-nav a.page-title {
    line-height: 122px;
    font-size: 48px;
  }
  
  nav ul li.no-hover:hover {
    background: none;
  }
  
  .side-nav a {
    line-height: 42px;
    height: 42px;
    padding: 0 15px;
  }
  
  .side-nav.fixed a,
  .side-nav .collapsible-body li a,
  .side-nav.fixed .collapsible-body li a {
    padding: 0 15px;
  }
  
  .side-nav.leftside-navigation .collapsible-body li.active {
    background-color: rgba(0, 0, 0, 0.04);
  }
  
  .side-nav.fixed.leftside-navigation .collapsible-body li.active {
    background-color: rgba(0, 0, 0, 0.04);
  }
  
  .side-nav .collapsible-body li a {
    margin: 0 1rem 0 3rem;
  }
  
  ul.side-nav.leftside-navigation {
    top: 55px;
    overflow: hidden;
  }
  
  ul.side-nav.leftside-navigation hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #e0e0e0;
    margin: 1em 0;
    padding: 0;
  }
  
  ul.side-nav.leftside-navigation li {
    line-height: 44px;
  }
  
  ul.side-nav.leftside-navigation li:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
  
  ul.side-nav.leftside-navigation li.active {
    background-color: rgba(0, 0, 0, 0.04);
  }
  
  ul.side-nav.leftside-navigation li a {
    font-size: 14px;
    font-weight: 400;
  }
  
  ul.side-nav.leftside-navigation li.user-details {
    background: url("../../assets/user-bg.jpg") no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    margin-bottom: 15px;
    padding: 15px 0 0 15px;
  }
  
  ul.side-nav.leftside-navigation li.user-details #profile-dropdown a {
    padding: 8px 15px;
  }
  
  ul.side-nav.leftside-navigation .profile-btn {
    margin: 0;
    text-transform: capitalize;
    padding: 0;
    text-shadow: 1px 1px 1px #444;
    font-size: 15px;
  }
  
  ul.side-nav.leftside-navigation ul.collapsible-accordion {
    background-color: #fff;
  }
  
  ul.side-nav li {
    padding: 0;
  }
  
  ul.side-nav .collapsible-header {
    margin: 0;
  }
  
  .slide-out li a i {
    line-height: inherit;
    width: 2rem;
    font-size: 1.6rem;
    display: block;
    float: left;
    text-align: center;
    margin-right: 1rem;
  }
  
  .slide-out ul.side-nav li {
    padding: 0 !important;
  }
  
  .caption {
    font-size: 1.25rem;
    font-weight: 300;
    margin-bottom: 30px;
  }
  
  .caption-uppercase {
    font-size: 1.25rem;
    font-weight: 300;
    margin-bottom: 30px;
    text-transform: uppercase;
  }
  
  .sidebar-collapse {
    position: absolute;
    left: -170px;
    top: -45px;
  }
  
  .user-task,
  .user-time {
    margin: 0;
    font-size: 13px;
    color: #fff;
  }
  
  .user-roal {
    color: #fff;
    margin-top: -16px;
    font-size: 13px;
    text-shadow: 1px 1px 1px #444;
  }
  
  .user-details .row {
    margin: 0;
  }
  
  .bold > a {
    font-weight: bold;
  }
  
  .rightside-navigation {
    overflow: hidden;
  }
</style>