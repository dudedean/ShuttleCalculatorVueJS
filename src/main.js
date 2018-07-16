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

require('bootstrap');
require('./assets/css/style.min.css');

Vue.use(VueRouter);
Vue.use(VueAxios, axios)
Vue.use(ElementUI, {locale});

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
    path: '/event/:id',
    component: Event
  }
  
];

const router = new VueRouter({
  routes,
  mode: 'history'
});


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
