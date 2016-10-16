<template>
  <div class="app-tabbar">
    <div class="tabs">
      <ul class="is-left">
        <li v-for="tab in tabs" :class="{ 'is-active': tab.route === routeName }">
          <a @click="activeTab(tab)">{{tab.name}}</a>
        </li>
      </ul>
    </div>
  </div>   
</template>

<script>
  import {
    mapGetters
  } from 'vuex'

  export default {
    computed: {
      routeName() {
        return this.$route.name
      },
      ...mapGetters([
        'tabs'
      ])
    },
    methods: {
      activeTab(tab) {
        if (tab && tab.route) {
          this.$router.push({
            name: tab.route
          })
        }
      },
      ensureTabCreated(route) {
        let tab = this.tabs.find(find => find.route === route.name)
        if (!tab) {
          this.$store.commit('addTab', {
            name: route.meta.title,
            route: route.name,
            closable: true
          })
        }
      }
    },
    mounted() {
      this.ensureTabCreated(this.$route)
    },
    watch: {
      $route(route) {
        this.ensureTabCreated(route)
      }
    }
  }
</script>

<style lang="scss">
  @import '~bulma/sass/utilities/variables';
  @import '~bulma/sass/utilities/mixins';
  @import '../variables';
  .app-tabbar {
    @include mobile() {
      display: none;
    }
  }
</style>