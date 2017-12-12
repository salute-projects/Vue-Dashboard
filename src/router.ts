import Vue from 'vue';
import VueRouter, { Location, Route, RouteConfig } from 'vue-router';
import { makeHot, reload } from './util/hot-reload';
import { create } from 'domain';
import { request } from 'https';

const homeComponent = () => import('./components/home').then(({ HomeComponent }) => HomeComponent);
const aboutComponent = () => import('./components/about').then(({ AboutComponent }) => AboutComponent);
const listComponent = () => import('./components/list').then(({ ListComponent }) => ListComponent);
const callbackComponent = () => import('./components/callback').then(({ CallbackComponent }) => CallbackComponent);
const encountersListComponent = () => import('./components/encounters/encounters-list/encounters_list')
.then(({ EncountersListComponent }) => EncountersListComponent);
const encounterDetailsComponent = () => import('./components/encounters/encounter-details/encounter-details').then(({ EncountersDetailsComponent }) => EncountersDetailsComponent);

if (process.env.ENV === 'development' && module.hot) {
  const homeModuleId = './components/home';
  const aboutModuleId = './components/about';
  const listModuleId = './components/list';
  const callbackModuleId = '/components/callback';
  const encountersListModuleId = './components/encounters/encounters-list/encounters_list';
  const encounterDetailsModuleId = './components/encounters/encounter-details/encounter-details';

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

  makeHot(encountersListModuleId, encountersListComponent,
    module.hot.accept('./components/encounters/encounters-list/encounters_list', 
    () => reload(encountersListModuleId, (<any>require('./components/encounters/encounters-list/encounters_list')).EncountersListComponent)));

  makeHot(encounterDetailsModuleId, encounterDetailsComponent, 
    module.hot.accept('./components/encounters/encounter-details/encounter-details', 
    () => reload(encounterDetailsModuleId, (<any>require('./components/encounters/encounter-details/encounter-details')).EncountersDetailsComponent)));
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
  },
  {
    path: '/encounters',
    component: encountersListComponent
  },
  {
    path: '/encounters/:id',
    component: encounterDetailsComponent
  }
];

export const router = new VueRouter({ mode: 'history', routes: createRoutes() });
