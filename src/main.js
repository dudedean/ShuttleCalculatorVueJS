import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en'
import App from './App.vue'
import Navigation from './components/Navigation.vue'
import Home from './components/Home.vue'
import Event from './components/Event.vue'
import CreateEvent from './components/CreateEvent.vue'
import firebase from 'firebase'

require('bootstrap');
require('./assets/css/style.min.css');

Vue.use(VueRouter);
Vue.use(VueAxios, axios)
Vue.use(ElementUI, {locale});

const firestore = firebase.firestore();
const settings = { /* your settings... */
  timestampsInSnapshots: true
};
firestore.settings(settings);
Vue.component('navbar', Navigation);

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/event/create',
    component: CreateEvent
  },
  {
    path: '/event/:event_id',
    component: Event,
    name: 'event'
  }
  
];

const router = new VueRouter({
  mode: 'history',
  routes
});


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
