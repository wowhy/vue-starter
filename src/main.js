// 基础框架
import Vue from 'vue';
import VueResource from 'vue-resource';

// UI 框架
import Keen from 'keen-ui';
import 'keen-ui/dist/keen-ui.css';

import Auth from './fx/auth';

import App from './App.vue';
import Router from './router';

Vue.config.devtools = true;

Vue.use(VueResource);
Vue.use(Keen);

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
