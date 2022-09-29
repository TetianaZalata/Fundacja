import LiceumActuality from '@/components/liceum/LiceumActuality.vue';
import LiceumContacts from '@/components/liceum/LiceumContacts.vue';
import LiceumDocumentation from '@/components/liceum/LiceumDocumentation.vue';
import LiceumForParents from '@/components/liceum/LiceumForParents.vue';
import LiceumForStudent from '@/components/liceum/LiceumForStudent.vue';
import LiceumGallery from '@/components/liceum/LiceumGallery.vue';

import {
    LICEUM_ACTUALNOSCI,
    LICEUM_DLA_UCZNIA,
    LICEUM_DLA_RODZICA,
    LICEUM_DOCUMENTY,
    LICEUM_GALERIA,
    LICEUM_KONTAKT,
} from '@/router/routeNames';

export default [
    {
        path: `/${LICEUM_ACTUALNOSCI}`,
        name: LICEUM_ACTUALNOSCI,
        component: LiceumActuality,
    },
    {
        path: `/${LICEUM_KONTAKT}`,
        name: LICEUM_KONTAKT,
        component: LiceumContacts,
    },
    {
        path: `/${LICEUM_DOCUMENTY}`,
        name: LICEUM_DOCUMENTY,
        component: LiceumDocumentation,
    },
    {
        path: `/${LICEUM_DLA_RODZICA}`,
        name: LICEUM_DLA_RODZICA,
        component: LiceumForParents,
    },
    {
        path: `/${LICEUM_DLA_UCZNIA}`,
        name: LICEUM_DLA_UCZNIA,
        component: LiceumForStudent,
    },
    {
        path: `/${LICEUM_GALERIA}`,
        name: LICEUM_GALERIA,
        component: LiceumGallery,
    },
]