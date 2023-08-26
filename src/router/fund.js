import FundMainPage from '@/components/fund/FundMainPage.vue';
import FundGoals from '@/components/fund/FundGoals.vue';
import FundLegalSupport from '@/components/fund/FundLegalSupport.vue';
import FundReports from '@/components/fund/FundReports.vue';
import FundStatute from '@/components/fund/FundStatute.vue';
import FundProjects from '@/components/fund/FundProjects.vue';

import {
    FUNDACJA_MAIN,
    FUNDACJA_CELE,
    FUNDACJA_STATUT,
    PROJECTS_UE,
    FUNDACJA_SPRAWOZDANIA,
    FUNDACJA_OBSLUGAPRAWNA,
} from '@/router/routeNames';

export default [
    {
        path: `/${FUNDACJA_MAIN}`,
        name: FUNDACJA_MAIN,
        component: FundMainPage,
    },
    {
        path: `/${FUNDACJA_CELE}`,
        name: FUNDACJA_CELE,
        component: FundGoals,
    },
    {
        path: `/${FUNDACJA_STATUT}`,
        name: FUNDACJA_STATUT,
        component: FundStatute,
    },
    {
        path: `/${PROJECTS_UE}`,
        name: PROJECTS_UE,
        component: FundProjects,
    },
    {
        path: `/${FUNDACJA_SPRAWOZDANIA}`,
        name: FUNDACJA_SPRAWOZDANIA,
        component: FundReports,
    },
    {
        path: `/${FUNDACJA_OBSLUGAPRAWNA}`,
        name: FUNDACJA_OBSLUGAPRAWNA,
        component: FundLegalSupport,
    },
]