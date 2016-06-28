import PageNotFound from 'components/404';
import Home from 'components/Home';

const VueRouter = window.VueRouter;

const Router = new VueRouter();

Router.map({
  '/home': {
    name: 'home',
    component: Home,
  },
  404: {
    name: '404',
    component: PageNotFound,
  },
});

Router.redirect({
  '*': '/home',
});

export default Router;
