<template>
<aside id="left-sidebar-nav">
  <ul id="slide-out" class="side-nav fixed leftside-navigation ps-container ps-active-y">
    <li><a href="#/" class="waves-effect waves-cyan"><i class="mdi-action-dashboard"></i> Dashboard</a></li>
    <li class="no-padding">
      <ul class="collapsible collapsible-accordion">
        <li class="bold"><a class="collapsible-header waves-effect waves-cyan"><i class="mdi-action-view-carousel"></i> Angularjs</a>
          <div class="collapsible-body" style="">
            <ul>
              <li><a href="#">UI Router</a>
              </li>
              <li><a href="#">UI Grid</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </li>
  </ul>
  <a href="#" data-activates="slide-out" class="sidebar-collapse btn-floating btn-medium waves-effect waves-light hide-on-large-only cyan"><i class="mdi-navigation-menu"></i></a>
</aside>
</template>

<script>
  export default {};

</script>

<style>

</style>