import SchoolLegalStatus from '@/components/school/SchoolLegalStatus.vue';
import SchoolCalendar from '@/components/school/SchoolCalendar.vue';
import SchoolTextbooks from '@/components/school/SchoolTextbooks.vue';
import SchoolPersonnel from '@/components/school/SchoolPersonnel.vue';
import SchoolDocumentation from '@/components/school/SchoolDocumentation.vue';

import {
    SZKOLA_STATUS_PRAWNY,
    SZKOLA_KALENDARZ,
    SZKOLA_PODRECZNIKI,
    SZKOLA_KADRA,
    SZKOLA_DOCUMENTY,
} from '@/router/routeNames';

export default [
    {
        path: `/${SZKOLA_STATUS_PRAWNY}`,
        name: SZKOLA_STATUS_PRAWNY,
        component: SchoolLegalStatus,
    },
    {
        path: `/${SZKOLA_KALENDARZ}`,
        name: SZKOLA_KALENDARZ,
        component: SchoolCalendar,
    },
    {
        path: `/${SZKOLA_PODRECZNIKI}`,
        name: SZKOLA_PODRECZNIKI,
        component: SchoolTextbooks,
    },
    {
        path: `/${SZKOLA_KADRA}`,
        name: SZKOLA_KADRA,
        component: SchoolPersonnel,
    },
    {
        path: `/${SZKOLA_DOCUMENTY}`,
        name: SZKOLA_DOCUMENTY,
        component: SchoolDocumentation,
    },
]