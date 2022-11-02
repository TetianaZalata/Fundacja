import PreschoolLegalStatus from '@/components/preschool/PreschoolLegalStatus.vue';
import PreschoolSchedule from '@/components/preschool/PreschoolSchedule.vue';
import PreschoolPersonnel from '@/components/preschool/PreschoolPersonnel.vue';
import PreschoolDocumentation from '@/components/preschool/PreschoolDocumentation.vue';
import PreschoolRecruitment from '@/components/preschool/PreschoolRecruitment.vue';

import {
    PRESCHOOL_STATUS_PRAWNY,
    PRESCHOOL_RYTM_DNIA,
    PRESCHOOL_KADRA,
    PRESCHOOL_DOCUMENTY,
    PRESCHOOL_REKRUTACJA,
} from '@/router/routeNames';

export default [
    {
        path: `/${PRESCHOOL_STATUS_PRAWNY}`,
        name: PRESCHOOL_STATUS_PRAWNY,
        component: PreschoolLegalStatus,
    },
    {
        path: `/${PRESCHOOL_RYTM_DNIA}`,
        name: PRESCHOOL_RYTM_DNIA,
        component: PreschoolSchedule,
    },
    {
        path: `/${PRESCHOOL_KADRA}`,
        name: PRESCHOOL_KADRA,
        component: PreschoolPersonnel,
    },
    {
        path: `/${PRESCHOOL_DOCUMENTY}`,
        name: PRESCHOOL_DOCUMENTY,
        component: PreschoolDocumentation,
    },
    {
        path: `/${PRESCHOOL_REKRUTACJA}`,
        name: PRESCHOOL_REKRUTACJA,
        component: PreschoolRecruitment,
    },
]