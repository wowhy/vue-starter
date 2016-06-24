import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Router = new VueRouter();

Router.map({
  '/': {
    name: 'index',
    component: {},
  },
});

export default Router;
