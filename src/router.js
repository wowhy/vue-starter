import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from 'components/main/Home'
import Login from 'components/main/Login'

Vue.use(VueRouter);

const Router = new VueRouter();

[Home, Login].forEach((component) => {
  Router.on(`/${component.name}`, {
    component: component,
    auth: component.auth
  });
});

Router.redirect({
  '/': '/home',
  '/index': '/home'
});

export default Router;
