import Vue from 'vue';
import VueResource from 'vue-resource';

import App from './App.vue';
import Router from './router';

Vue.use(VueResource);

const application = Vue.extend({
  components: { App },

  data() {
    return { pageTitle: null };
  },

  events: {
    onPageTitleChanged: function event(title) {
      this.pageTitle = title;
    },
  },
});

Router.start(application, 'html');
