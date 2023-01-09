import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { user } from '@/firebase/auth';
import { auth } from '@/firebase/firebase';

export default {
    state: {
        isAuth: false,
        isLoading: false,
    },
    getters: {
        isAuth(state) {
            return state.isAuth;
        },
        isLoading(state) {
            return state.isLoading;
        }
    },
    mutations: {
        userAuthentificate(state, payload) {
            state.isAuth = payload;
        },
        setLoadingState(state, payload) {
            state.isLoading = payload;
        },
    },
    actions: {
        getUser({ commit }) {
            commit('setLoadingState', true);
            user().then((res) => {
                commit('userAuthentificate', !!res.emailVerified);
            }).catch((err) => {
                console.log(err);
            }).finally(() => {
                commit('setLoadingState', false);
            })
            
        },
        login({ commit }, { email, password } ) {
            return signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                commit('userAuthentificate', true);
                return Promise.resolve();
            }).catch((error) => {
                return Promise.reject(error);
            })
        },
        logout({ commit }) {
            return signOut(auth)
            .then(() => {
                commit('userAuthentificate', false);
            })
            .catch((error) => {
                return Promise.reject(error);
            })
        },
    },
    namespaced: true
}