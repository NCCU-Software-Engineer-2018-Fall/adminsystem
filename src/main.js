import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './config/routes';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.css';
import store from './store';

Vue.use(VueRouter);
Vue.use(Vuetify);

const router = new VueRouter({
  routes,
  mode: 'history',
  saveScrollPosition: true,
});

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App),
});
