<template>
  <section class="app-header hero">
    <div class="hero-head">
      <nav class="nav">
        <div class="nav-left">
          <a class="nav-item hero-brand" href="/">
            <img src="../../assets/images/logo.png" alt="icon">
            Vue-Starter
          </a>
        </div>
        <span class="nav-toggle" @click="toggleSidebar()">
          <span></span>
          <span></span>
          <span></span>
        </span>
      <div class="nav-right nav-menu">
        <div class="nav-item">
          <figure class="image is-24x24 is-right-5"><img class="is-circle" src="../../assets/images/logo.png"></figure>
          <span>Jone Smith</span>
        </div>
        <a class="nav-item" @click="logout()">
          <span class="icon is-small"><i class="fa fa-power-off"></i></span>
          注销
        </a>
      </div>
      </nav>
    </div>
  </section>
</template>

<script>
  import {
    mapActions
  } from 'vuex'
  import auth from '../../utils/auth'

  export default {
    methods: {
      ...mapActions([
        'toggleSidebar'
      ]),
      logout() {
        auth.logout().then(() => {
          this.$store.commit('authed', false)
        })
      }
    }
  }
</script>

<style>
  .app-header {
    position: fixed;
    min-width: 100%;
    z-index: 1024;
    box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);
  }
</style>