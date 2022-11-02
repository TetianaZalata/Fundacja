import { user } from '@/firebase/auth'

export default {
    state: {
        isAuth: false,
    },
    mutations: {
        userAuthentificate(state, payload) {
            state.isAuth = payload;
        }
    },
    actions: {
        async getUser({commit}) {
            const userAdmin = await user();
            
            commit('userAuthentificate', !!userAdmin?.emailVerified)
        }
    },
    namespaced: true
}