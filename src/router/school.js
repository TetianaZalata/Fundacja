import SchoolActuality from '@/components/school/SchoolActuality.vue';
import SchoolContacts from '@/components/school/SchoolContacts.vue';
import SchoolDocumentation from '@/components/school/SchoolDocumentation.vue';
import SchoolForParents from '@/components/school/SchoolForParents.vue';
import SchoolForStudent from '@/components/school/SchoolForStudent.vue';
import SchoolGallery from '@/components/school/SchoolGallery.vue';

import {
    SZKOLA_PODSTAWOWA_ACTUALNOSCI,
    SZKOLA_PODSTAWOWA_DLA_UCZNIA,
    SZKOLA_PODSTAWOWA_DLA_RODZICA,
    SZKOLA_PODSTAWOWA_DOCUMENTY,
    SZKOLA_PODSTAWOWA_GALERIA,
    SZKOLA_PODSTAWOWA_KONTAKT,
} from '@/router/routeNames';

export default [
    {
        path: `/${SZKOLA_PODSTAWOWA_ACTUALNOSCI}`,
        name: SZKOLA_PODSTAWOWA_ACTUALNOSCI,
        component: SchoolActuality,
    },
    {
        path: `/${SZKOLA_PODSTAWOWA_KONTAKT}`,
        name: SZKOLA_PODSTAWOWA_KONTAKT,
        component: SchoolContacts,
    },
    {
        path: `/${SZKOLA_PODSTAWOWA_DOCUMENTY}`,
        name: SZKOLA_PODSTAWOWA_DOCUMENTY,
        component: SchoolDocumentation,
    },
    {
        path: `/${SZKOLA_PODSTAWOWA_DLA_RODZICA}`,
        name: SZKOLA_PODSTAWOWA_DLA_RODZICA,
        component: SchoolForParents,
    },
    {
        path: `/${SZKOLA_PODSTAWOWA_DLA_UCZNIA}`,
        name: SZKOLA_PODSTAWOWA_DLA_UCZNIA,
        component: SchoolForStudent,
    },
    {
        path: `/${SZKOLA_PODSTAWOWA_GALERIA}`,
        name: SZKOLA_PODSTAWOWA_GALERIA,
        component: SchoolGallery,
    },
]