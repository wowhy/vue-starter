<template>
  <aside class="sidebar-panel">
    <ul class="side-nav fixed menus" style="transform: translateX(0px);">
      <li class="logo">
        <a href="#/" class="brand-logo">
          WOWHY
        </a>
      </li>
      
      <li class="bold"><a href="#/" class="waves-effect waves-teal">About</a></li>
      <li class="bold active"><a href="#/" class="waves-effect waves-teal">Getting Started</a></li>
      <li class="no-padding">
        <ul class="collapsible collapsible-accordion">
          <li class="bold"><a class="collapsible-header  waves-effect waves-teal">CSS</a>
            <div class="collapsible-body" style="">
              <ul>
                <li><a href="#/">Color</a></li>
                <li><a href="#/">Grid</a></li>
                <li><a href="#/">Helpers</a></li>
                <li><a href="#/">Media</a></li>
                <li><a href="#/">Sass</a></li>
                <li><a href="#/">Shadow</a></li>
                <li><a href="#/">Table</a></li>
                <li><a href="#/">Typography</a></li>
              </ul>
            </div>
          </li>
          <li class="bold"><a class="collapsible-header  waves-effect waves-teal">Components</a>
            <div class="collapsible-body" style="">
              <ul>
                <li><a href="#/">Badges</a></li>
                <li><a href="#/">Buttons</a></li>
                <li><a href="#/">Breadcrumbs</a></li>
                <li><a href="#/">Cards</a></li>
                <li><a href="#/">Chips</a></li>
                <li><a href="#/">Collections</a></li>
                <li><a href="#/">Footer</a></li>
                <li><a href="#/">Forms</a></li>
                <li><a href="#/">Icons</a></li>
                <li><a href="#/">Navbar</a></li>
                <li><a href="#/">Pagination</a></li>
                <li><a href="#/">Preloader</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </li>
      <li class="bold"><a href="#/" class="waves-effect waves-teal">Mobile</a></li>
    </ul>
  </aside>
</template>

<script>
  export default {};

</script>

<style scoped>
  .sidebar-panel ul.menus li a {
    font-size: 13px;
    line-height: 44px;
    height: 44px;
  }
  
  .sidebar-panel ul.menus li {
    line-height: 44px;
  }
  
  li.logo a:hover {
    background-color: transparent;
  }
</style>