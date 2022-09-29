import ZlobekAbout from '@/components/zlobek/ZlobekAbout.vue';
import ZlobekContacts from '@/components/zlobek/ZlobekContacts.vue';
import ZlobekPlan from '@/components/zlobek/ZlobekPlan.vue';
import ZlobekRecruitment from '@/components/zlobek/ZlobekRecruitment.vue';

import {
    ZLOBEK_ABOUT,
    ZLOBEK_REKRUTACJA,
    ZLOBEK_PLAN_DNIA,
    ZLOBEK_KONTAKT,
} from '@/router/routeNames';

export default [
    {
        path: `/${ZLOBEK_ABOUT}`,
        name: ZLOBEK_ABOUT,
        component: ZlobekAbout,
    },
    {
        path: `/${ZLOBEK_KONTAKT}`,
        name: ZLOBEK_KONTAKT,
        component: ZlobekContacts,
    },
    {
        path: `/${ZLOBEK_PLAN_DNIA}`,
        name: ZLOBEK_PLAN_DNIA,
        component: ZlobekPlan,
    },
    {
        path: `/${ZLOBEK_REKRUTACJA}`,
        name: ZLOBEK_REKRUTACJA,
        component: ZlobekRecruitment,
    },
]