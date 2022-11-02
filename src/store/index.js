import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import authUser from '@/store/authUser';

export default new Vuex.Store({
    modules: {
        authUser,
    }
});