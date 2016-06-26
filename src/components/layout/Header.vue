<template>
<div class="navbar-fixed">
  <nav>
    <div class="nav-wrapper ">
      <a href="#!" class="brand-logo">Admin</a>
      <!--a href="#" data-activates="slide-out" class="sidebar-collapse btn-floating btn-medium waves-effect waves-light cyan"><i class="mdi-navigation-menu"></i></a-->
      <ul class="right hide-on-med-and-down">
        <li><a href="#">Aboutus</a></li>
        <li>
          <a class='dropdown-button btn' href='#' data-activates='dropdown1'>Services!</a>

          <!-- Dropdown Structure -->
          <ul id='dropdown1' class='dropdown-content'>
            <li><a href="#!">one</a></li>
            <li><a href="#!">two</a></li>
            <li class="divider"></li>
            <li><a href="#!">three</a></li>
          </ul>
        </li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Feedback</a></li>
      </ul>

    </div>
  </nav>
</div>
</template>

<script>
  export default {
    data() {
      return {};
    },
  };

</script>

<style>

</style>