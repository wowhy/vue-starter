import PageNotFound from './components/404';

const VueRouter = window.VueRouter;

const Router = new VueRouter();

Router.map({
  '': {
    name: 'index',
    component: {
      template: '<md-button class="waves-effect waves-light">Hello, world!</ui-button>',
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
