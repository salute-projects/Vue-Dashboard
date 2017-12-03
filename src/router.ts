import Vue from 'vue';
import VueRouter, { Location, Route, RouteConfig } from 'vue-router';
import { makeHot, reload } from './util/hot-reload';
import { create } from 'domain';

const homeComponent = () => import('./components/home').then(({ HomeComponent }) => HomeComponent);
const aboutComponent = () => import('./components/about').then(({ AboutComponent }) => AboutComponent);
const listComponent = () => import('./components/list').then(({ ListComponent }) => ListComponent);
const callbackComponent = () => import('./components/callback').then(({ CallbackComponent }) => CallbackComponent);
// const homeComponent = () => import(/* webpackChunkName: 'home' */'./components/home').then(({ HomeComponent }) => HomeComponent);
// const aboutComponent = () => import(/* webpackChunkName: 'about' */'./components/about').then(({ AboutComponent }) => AboutComponent);
// const listComponent = () => import(/* webpackChunkName: 'list' */'./components/list').then(({ ListComponent }) => ListComponent);

if (process.env.ENV === 'development' && module.hot) {
  const homeModuleId = './components/home';
  const aboutModuleId = './components/about';
  const listModuleId = './components/list';
  const callbackModuleId = '/components/callback';

  // first arguments for `module.hot.accept` and `require` methods have to be static strings
  // see https://github.com/webpack/webpack/issues/5668
  makeHot(homeModuleId, homeComponent,
    module.hot.accept('./components/home', () => reload(homeModuleId, (<any>require('./components/home')).HomeComponent)));

  makeHot(aboutModuleId, aboutComponent,
    module.hot.accept('./components/about', () => reload(aboutModuleId, (<any>require('./components/about')).AboutComponent)));

  makeHot(listModuleId, listComponent,
    module.hot.accept('./components/list', () => reload(listModuleId, (<any>require('./components/list')).ListComponent)));

    makeHot(callbackModuleId, callbackComponent,
      module.hot.accept('./components/callback', () => reload(callbackModuleId, (<any>require('./components/callback')).CallbackComponent)));
}

Vue.use(VueRouter);

export const createRoutes: () => RouteConfig[] = () => [
  {
    path: '/',
    component: homeComponent,
  },
  {
    path: '/about',
    component: aboutComponent,
  },
  {
    path: '/list',
    component: listComponent,
  },
  {
    path: '/signin-auth0',
    component: callbackComponent
  }
];

export const router = new VueRouter({ mode: 'history', routes: createRoutes() });
