import Vue from 'vue';
import VueRouter from 'vue-router';

import PageNotFound from 'components/404';
import Home from 'components/Home';

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
    },
});

Router.redirect({
    '*': '/home',
});

export default Router;
