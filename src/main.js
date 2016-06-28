// 基础框架
import Auth from './fx/auth';

import App from './App.vue';
import Router from './router';

const Vue = window.Vue;

Vue.config.devtools = true;

Auth.init(Router);

const application = Vue.extend({
  components: { App }, data() {
    return { pageTitle: null };
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
