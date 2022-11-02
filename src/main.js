import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import axios from 'axios';
import Vuex from 'vuex';

import router from './router';
import store from './store';
import { firestorePlugin } from 'vuefire';

Vue.use(Vuex);
Vue.use(firestorePlugin);

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
