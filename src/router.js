import Vue from 'vue';
import VueRouter from 'vue-router';

import PageNotFound from 'components/main/404';
import Home from 'components/main/Home';
import Login from 'components/main/Login';

Vue.use(VueRouter);

const Router = new VueRouter();

Router.map({
  '/home': {
    component: Home,
  },
  '*': {
    name: '404',
    component: PageNotFound,
  }
});

[Login].forEach(component => {
  Router.on(`/${component.name}`, {
    component
  });
});

Router.redirect({
  '/': '/home',
  '/index': '/home'
});

export default Router;
