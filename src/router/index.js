import Vue from 'vue';
import VueRouter from 'vue-router';

import fund from '@/router/fund'
import school from '@/router/school'
import liceum from '@/router/liceum'
import preschool from '@/router/preschool'
import zlobek from '@/router/zlobek'

import Login from '@/components/Login.vue';

import { LOGIN, FUNDACJA_CELE } from '@/router/routeNames';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: {
            name: FUNDACJA_CELE
        },
    },
   ...fund,
   ...school,
   ...liceum,
   ...preschool,
   ...zlobek,
    {
        path: `/${LOGIN}`,
        name: LOGIN,
        component: Login,
    },
   
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;