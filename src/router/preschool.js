import PreschoolAbout from '@/components/preschool/PreschoolAbout.vue';
import PreschoolContacts from '@/components/preschool/PreschoolContacts.vue';
import PreschoolForParents from '@/components/preschool/PreschoolForParents.vue';
import PreschoolGallery from '@/components/preschool/PreschoolGallery.vue';
import PreschoolNews from '@/components/preschool/PreschoolNews.vue';

import {
    PRESCHOOL_WIESCI,
    PRESCHOOL_ABOUT,
    PRESCHOOL_DLA_RODZICA,
    PRESCHOOL_GALERIA,
    PRESCHOOL_KONTAKT,
} from '@/router/routeNames';

export default [
    {
        path: `/${PRESCHOOL_ABOUT}`,
        name: PRESCHOOL_ABOUT,
        component: PreschoolAbout,
    },
    {
        path: `/${PRESCHOOL_KONTAKT}`,
        name: PRESCHOOL_KONTAKT,
        component: PreschoolContacts,
    },
    {
        path: `/${PRESCHOOL_DLA_RODZICA}`,
        name: PRESCHOOL_DLA_RODZICA,
        component: PreschoolForParents,
    },
    {
        path: `/${PRESCHOOL_GALERIA}`,
        name: PRESCHOOL_GALERIA,
        component: PreschoolGallery,
    },
    {
        path: `/${PRESCHOOL_WIESCI}`,
        name: PRESCHOOL_WIESCI,
        component: PreschoolNews,
    },
]