import Vue from 'vue';
import VueRouter from 'vue-router';

import PageNotFound from './components/404';

Vue.use(VueRouter);

const Router = new VueRouter();

Router.map({
  '': {
    name: 'index',
    component: {
      template: '<ui-button color=primary>Hello, world!</ui-button>',
    },
  },
  404: {
    name: '404',
    component: PageNotFound,
  },
});

Router.redirect({
  '*': '/404',
});

export default Router;
