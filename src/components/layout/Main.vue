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
</style>
