import Vue from 'vue';
import VueResource from 'vue-resource';

import Auth from './fx/auth';
import App from './App.vue';
import Router from './router';
import Plugin from './fx/plugin';

Vue.config.devtools = true;
Vue.use(VueResource);

Auth.init(Vue, Router);

const application = Vue.extend({
  components: {
    App
  },
  data() {
    return {
      $auth: Auth,
      pageTitle: null
    };
  },

  events: {
    onPageTitleChanged: function event(title) {
      this.pageTitle = title;
    },
  },

  ready() {
    Plugin.initJSComponents();
  }
});

Router.start(application, 'html');
