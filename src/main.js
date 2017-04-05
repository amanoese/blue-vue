import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource';

import App from './App.vue'
import Map from './Map.vue'
import './materialize.config.scss'

Vue.use(VueRouter);
Vue.use(VueResource);

let router = new VueRouter({
  hashbang: false,
  history: true,
  root : '/todo'
});

router.map({
  '/': {
      component: App
  },
  'Map/:task_id': {
      name : 'Map',
      component: Map
  }
});

let main = Vue.extend({})

router.start(main, 'body')

