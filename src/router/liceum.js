import LiceumLegalStatus from '@/components/liceum/LiceumLegalStatus.vue';
import LiceumCalendar from '@/components/liceum/LiceumCalendar.vue';
import LiceumTextbooks from '@/components/liceum/LiceumTextbooks.vue';
import LiceumPersonnel from '@/components/liceum/LiceumPersonnel.vue';
import LiceumDocumentation from '@/components/liceum/LiceumDocumentation.vue';

import {
    LICEUM_STATUS_PRAWNY,
    LICEUM_KALENDARZ,
    LICEUM_PODRECZNIKI,
    LICEUM_KADRA,
    LICEUM_DOCUMENTY,
} from '@/router/routeNames';

export default [
    {
        path: `/${LICEUM_STATUS_PRAWNY}`,
        name: LICEUM_STATUS_PRAWNY,
        component: LiceumLegalStatus,
    },
    {
        path: `/${LICEUM_KALENDARZ}`,
        name: LICEUM_KALENDARZ,
        component: LiceumCalendar,
    },
    {
        path: `/${LICEUM_PODRECZNIKI}`,
        name: LICEUM_PODRECZNIKI,
        component: LiceumTextbooks,
    },
    {
        path: `/${LICEUM_KADRA}`,
        name: LICEUM_KADRA,
        component: LiceumPersonnel,
    },
    {
        path: `/${LICEUM_DOCUMENTY}`,
        name: LICEUM_DOCUMENTY,
        component: LiceumDocumentation,
    },
]