import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import { makeHot, reload } from './util/hot-reload';
import { router } from './router';

Vue.use(require('vue-moment'));
Vue.use(Vuetify);

const navbarComponent = () => import('./components/navbar').then(({ NavbarComponent }) => NavbarComponent);
// const navbarComponent = () => import(/* webpackChunkName: 'navbar' */'./components/navbar').then(({ NavbarComponent }) => NavbarComponent);
const mainAppComponent = () => import('./components/main').then(({ MainAppComponent }) => MainAppComponent);

import './sass/main.scss';

if (process.env.ENV === 'development' && module.hot) {
  const navbarModuleId = './components/navbar';
  const mainAppId = './components/main';

  // first arguments for `module.hot.accept` and `require` methods have to be static strings
  // see https://github.com/webpack/webpack/issues/5668
  makeHot(navbarModuleId, navbarComponent,
    module.hot.accept('./components/navbar', () => reload(navbarModuleId, (<any>require('./components/navbar')).NavbarComponent)));

  makeHot(mainAppId, mainAppComponent, module.hot.accept('./components/main', () => reload(mainAppId, (<any>require('./components/main')).MainAppComponent)));
}

Vue.prototype.$eventHub = new Vue();

new Vue({
  el: '#app-main',
  router: router,
  components: {
    'navbar': navbarComponent,
    'mainApp': mainAppComponent
  }
});
