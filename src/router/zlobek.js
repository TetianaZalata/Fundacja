import ZlobekLegalStatus from '@/components/zlobek/ZlobekLegalStatus.vue';
import ZlobekSchedule from '@/components/zlobek/ZlobekSchedule.vue';
import ZlobekPersonnel from '@/components/zlobek/ZlobekPersonnel.vue';
import ZlobekDocumentation from '@/components/zlobek/ZlobekDocumentation.vue';
import ZlobekRecruitment from '@/components/zlobek/ZlobekRecruitment.vue';

import {
    ZLOBEK_STATUS_PRAWNY,
    ZLOBEK_PLAN_DNIA,
    ZLOBEK_KADRA,
    ZLOBEK_DOCUMENTY,
    ZLOBEK_REKRUTACJA,
} from '@/router/routeNames';

export default [
    {
        path: `/${ZLOBEK_STATUS_PRAWNY}`,
        name: ZLOBEK_STATUS_PRAWNY,
        component: ZlobekLegalStatus,
    },
    {
        path: `/${ZLOBEK_PLAN_DNIA}`,
        name: ZLOBEK_PLAN_DNIA,
        component: ZlobekSchedule,
    },
    {
        path: `/${ZLOBEK_KADRA}`,
        name: ZLOBEK_KADRA,
        component: ZlobekPersonnel,
    },
    {
        path: `/${ZLOBEK_DOCUMENTY}`,
        name: ZLOBEK_DOCUMENTY,
        component: ZlobekDocumentation,
    },
    {
        path: `/${ZLOBEK_REKRUTACJA}`,
        name: ZLOBEK_REKRUTACJA,
        component: ZlobekRecruitment,
    },
]