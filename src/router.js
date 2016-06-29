import Vue from 'vue';
import VueRouter from 'vue-router';

import PageNotFound from 'components/404';
import Home from 'components/Home';
import Login from 'components/Login';

Vue.use(VueRouter);

const Router = new VueRouter();

Router.map({
  '/home': {
    name: 'home',
    component: Home,
  },
  404: {
    name: '404',
    component: PageNotFound,
  }
});

[Login].forEach(component => {
  Router.on(`/${component.name}`, {
    name: component.name,
    component
  });
});

Router.redirect({
  '*': '/home',
});

export default Router;
