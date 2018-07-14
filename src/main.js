import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import App from './App.vue'
import Navigation from './components/Navigation.vue'
import Home from './components/Home.vue'
import Event from './components/Event.vue'
import CreateEvent from './components/CreateEvent.vue'
import Datepicker from 'vuejs-datepicker';

require('bootstrap');
require('./assets/css/style.min.css');

Vue.use(VueRouter);
Vue.use(VueAxios, axios)

Vue.component('navbar', Navigation);
Vue.component('datepicker', Datepicker);

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/events',
    component: Event
  },
  {
    path: '/event/create',
    component: CreateEvent
  },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
