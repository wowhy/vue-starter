<template>
  <div class="topbar">
    <!-- LOGO -->
    <div class="topbar-left">
      <a v-link="{name:'home'}" class="logo"><span>Admin<span>to</span></span><i class="zmdi zmdi-layers"></i></a>
    </div>

    <!-- Button mobile view to collapse sidebar menu -->
    <div class="navbar navbar-default" role="navigation">
      <div class="container">

        <!-- Page title -->
        <ul class="nav navbar-nav navbar-left">
          <li>
            <button class="button-menu-mobile open-left"><i class="zmdi zmdi-menu"></i></button>
          </li>
          <li>
            <h4 class="page-title">Blank Page</h4>
          </li>
        </ul>

        <!-- Right(Notification and Searchbox -->
        <ul class="nav navbar-nav navbar-right">
          <li class="hidden-xs">
            <form role="search" class="app-search">
              <input type="text" placeholder="Search..." class="form-control">
              <a href=""><i class="fa fa-search"></i></a>
            </form>
          </li>
        </ul>

      </div>
      <!-- end container -->
    </div>
    <!-- end navbar -->
  </div>
</template>

<script>
  export default {}
</script>