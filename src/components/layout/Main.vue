<template>
  <main>
    <div class="wrapper">
      <ui-sidebar></ui-sidebar>
      <section class="page-content">
        <div class="breadcrumbs-wrapper">
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

  @media only screen and (max-width: 993px) {
    main {
      padding-left: 0;
    }
  }

  .page-content {
    padding: 10px;
  }

  /*----------------------------------------
    Breadcrumb
------------------------------------------*/
  #breadcrumbs-wrapper {
    background: #f3f3f3;
  }

  h5.breadcrumbs-header {
    font-size: 1.64rem;
    line-height: 1.804rem;
    margin: 1.5rem 0 0 0;
  }

  .breadcrumbs {
    padding: 0;
    margin: 15px 0;
    list-style: none;
  }

  .breadcrumbs > li {
    display: inline-block;
  }

  .breadcrumbs > li + li:before {
    padding: 0 5px;
    color: #ccc;
    content: "/\00a0";
  }

  .breadcrumbs .active {
    font-weight: normal;
    color: #999;
  }

  .breadcrumbs-title {
    font-size: 1.5rem;
    line-height: 1.804rem;
    margin: 18px 0 0;
  }

  .breadcrumbs-nav {
    margin: 8px 0 9px;
  }

  .breadcrumb:before {
    content: "\e7c3";
    font-family: "Material-Design-Icons";
  }
</style>
