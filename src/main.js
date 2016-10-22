import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Map from './Map.vue'
import './materialize.config.scss'

Vue.use(VueRouter);

let router = new VueRouter({
  hashboang: false,
  history: true
});

router.map({
  '/': {
      component: App
  },
  '/Map': {
      component: Map
  }
});

let main = Vue.extend({})

router.start(main, 'body')

