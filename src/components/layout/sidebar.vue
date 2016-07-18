<template>
  <div class="left side-menu">
    <div class="sidebar-inner slimscrollleft">

      <!-- User -->
      <div class="user-box">
        <div class="user-img">
          <img src="../../assets/images/logo.png" alt="user-img" title="Mat Helme" class="img-circle img-thumbnail img-responsive">
          <div class="user-status offline"><i class="zmdi zmdi-dot-circle"></i></div>
        </div>
        <h5><a href="#">Mat Helme</a> </h5>
        <ul class="list-inline">
          <li>
            <a href="#">
              <i class="zmdi zmdi-settings"></i>
            </a>
          </li>

          <li>
            <a href="#" class="text-custom">
              <i class="zmdi zmdi-power"></i>
            </a>
          </li>

        </ul>
      </div>
      <!-- End User -->

      <!--- Sidebar -->
      <div id="sidebar-menu">
        <ul>
          <li class="text-muted menu-title">导航菜单</li>

          <li>
            <a v-link="{ name: 'home' }" class="waves-effect"><i class="zmdi zmdi-view-dashboard"></i> <span> Home </span> </a>
          </li>

          <li>
            <a v-link="{ name: 'example' }" class="waves-effect"><i class="zmdi zmdi-format-underlined"></i> <span> Example </span> </a>
          </li>

          <li class="has_sub">
            <a href="javascript:void(0);" class="waves-effect"><i class="zmdi zmdi-view-list"></i> <span> 算法 </span> <span class="menu-arrow"></span></a>
            <ul class="list-unstyled">
              <li><a v-link="{name: 'greedy'}">Greedy</a></li>
            </ul>
          </li>
        </ul>
        <div class="clearfix"></div>
      </div>
      <!-- Sidebar -->

      <div class="clearfix"></div>
    </div>

  </div>
</template>

<script>
  export default {}
</script>