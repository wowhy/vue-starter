import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from 'components/main/Home';

Vue.use(VueRouter);

const Router = new VueRouter();

Router.map({
  '/home': {
    component: Home
  }
});

Router.redirect({
  '/': '/home',
  '/index': '/home'
});

export default Router;
