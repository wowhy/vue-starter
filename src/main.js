import Vue from 'vue';
import VueResource from 'vue-resource';

import Auth from './fx/auth';
import App from './App.vue';
import Router from './router';
import Plugins from './fx/plugins';

Vue.config.devtools = true;
Vue.use(VueResource);
Plugins.init();
Auth.init(Router);

const application = Vue.extend({
  components: {
    App
  },
  data() {
    return {
      pageTitle: null
    };
  },

  events: {
    onPageTitleChanged: function event(title) {
      this.pageTitle = title;
    },
  },
});

Vue.mixin({
  created: function handler() {
    this.$auth = Auth;
  },
});

Router.start(application, 'html');
