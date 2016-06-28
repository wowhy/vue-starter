<template>
  <main>
    <div class="wrapper">
      <ui-sidebar></ui-sidebar>
      <section class="content">
        <div class="breadcrumbs-wrapper">
          <div class="header-search-wrapper grey hide-on-large-only">
            <i class="mdi-action-search active"></i>
            <input type="text" name="Search" class="header-search-input z-depth-2" placeholder="Explore Materialize">
          </div>
          <div class="container-fluid">
            <div class="row">
              <div class="col s12 m12 l12">
                <h5 class="breadcrumbs-title">Alerts</h5>
                <ol class="breadcrumbs">
                  <li><a href="#/">Dashboard</a>
                  </li>
                  <li><a href="#/">UI Elements</a>
                  </li>
                  <li class="active">Alerts</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
  import UiSidebar from './Sidebar';

  export default {
    components: {
      UiSidebar,
    },
  };

</script>

<style scoped>
  main {
    padding-left: 240px;
  }

  .content {
    padding: 10px;
  }
</style>
