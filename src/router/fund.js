import FundGoals from '@/components/fund/FundGoals.vue';
import FundContacts from '@/components/fund/FundContacts.vue';
import FundLegalSupport from '@/components/fund/FundLegalSupport.vue';
import FundReports from '@/components/fund/FundReports.vue';
import FundStatute from '@/components/fund/FundStatute.vue';

import {
    FUNDACJA_CELE,
    FUNDACJA_STATUT,
    FUNDACJA_SPRAWOZDANIA,
    FUNDACJA_OBSLUGAPRAWNA,
    FUNDACJA_KONTAKT,
} from '@/router/routeNames';

export default [
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
        path: `/${FUNDACJA_SPRAWOZDANIA}`,
        name: FUNDACJA_SPRAWOZDANIA,
        component: FundReports,
    },
    {
        path: `/${FUNDACJA_OBSLUGAPRAWNA}`,
        name: FUNDACJA_OBSLUGAPRAWNA,
        component: FundLegalSupport,
    },
    {
        path: `/${FUNDACJA_KONTAKT}`,
        name: FUNDACJA_KONTAKT,
        component: FundContacts,
    },
]