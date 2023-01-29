import {
    FUNDACJA_CELE,
    FUNDACJA_STATUT,

    SZKOLA_KALENDARZ,
    SZKOLA_PODRECZNIKI,
    SZKOLA_KADRA,
    SZKOLA_DOCUMENTY,

    LICEUM_KALENDARZ,
    LICEUM_PODRECZNIKI,
    LICEUM_KADRA,
    LICEUM_DOCUMENTY,

    PRESCHOOL_RYTM_DNIA,
    PRESCHOOL_KADRA,
    PRESCHOOL_DOCUMENTY,
    PRESCHOOL_REKRUTACJA,

    ZLOBEK_PLAN_DNIA,
    ZLOBEK_KADRA,
    ZLOBEK_DOCUMENTY,
    ZLOBEK_REKRUTACJA,

    KOLO_WOLONTARIATU
} from '@/router/routeNames';

import { mdiFacebook } from '@mdi/js';

export default [
    {
        alias: 'FUNDACJA',
        route: FUNDACJA_CELE,
        name: FUNDACJA_CELE,
        item: 'fund',
        subitems: [{
                alias: 'Cele',
                route: FUNDACJA_CELE,
                name: FUNDACJA_CELE,
                item: 'fund',
            },
            {
                alias: 'Statut',
                route: FUNDACJA_STATUT,
                name: FUNDACJA_STATUT,
                item: 'fund',
            },
            {
                alias: 'Sprawozdańia',
                link: 'https://sprawozdaniaopp.niw.gov.pl/',
                iconFile: 'NIW.png',
            },
            {
                alias: 'Obsługa prawna',
                link: 'https://auxilia-oswiata.pl/',
                iconFile: 'Auxilia.png',
            },
        ]
    },
    {
        alias: 'SZKOŁA',
        route: SZKOLA_KALENDARZ,
        name: SZKOLA_KALENDARZ,
        item: 'school',
        subitems: [
            {
                alias: 'Aktualności ',
                item: 'school',
                link: 'https://www.facebook.com/www.szko',
                icon: mdiFacebook,
                iconColor: '#4267B2',
            },
            {
                alias: 'Kalendarz',
                item: 'school',
                route: SZKOLA_KALENDARZ,
                name: SZKOLA_KALENDARZ,
            },
            {
                alias: 'Podręczniki ',
                item: 'school',
                route: SZKOLA_PODRECZNIKI,
                name: SZKOLA_PODRECZNIKI,
            },
            {
                alias: 'Kadra',
                item: 'school',
                route: SZKOLA_KADRA,
                name: SZKOLA_KADRA,
            },
            {
                alias: 'Dokumenty ',
                item: 'school',
                route: SZKOLA_DOCUMENTY,
                name: SZKOLA_DOCUMENTY,
            },
        ],
    },
    {
        alias: 'Liceum',
        route: LICEUM_KALENDARZ,
        name: LICEUM_KALENDARZ,
        item: 'hschool',
        subitems: [
            {
                alias: 'Aktualności ',
                item: 'hschool',
                link: 'https://www.facebook.com/www.szko',
                icon: mdiFacebook,
                iconColor: '#4267B2',
            },
            {
                alias: 'Kalendarz',
                item: 'hschool',
                route: LICEUM_KALENDARZ,
                name: LICEUM_KALENDARZ,
            },
            {
                alias: 'Podręczniki',
                item: 'hschool',
                route: LICEUM_PODRECZNIKI,
                name: LICEUM_PODRECZNIKI,
            },
            {
                alias: 'Kadra',
                item: 'hschool',
                route: LICEUM_KADRA,
                name: LICEUM_KADRA,
            },
            {
                alias: 'Dokumenty',
                item: 'hschool',
                route: LICEUM_DOCUMENTY,
                name: LICEUM_DOCUMENTY,
            },
        ],
    },
    {
        alias: 'Przedszkole',
        route: PRESCHOOL_RYTM_DNIA,
        name: PRESCHOOL_RYTM_DNIA,
        item: 'kindergarten',
        subitems: [
            {
                alias: 'Aktualności ',
                item: 'kindergarten',
                link: 'https://www.facebook.com/PrzedszkoleLesnaKraina',
                icon: mdiFacebook,
                iconColor: '#4267B2',
            },
            {
                alias: 'Rytm dnia',
                item: 'kindergarten',
                route: PRESCHOOL_RYTM_DNIA,
                name: PRESCHOOL_RYTM_DNIA,
            },
            {
                alias: 'Kadra',
                item: 'kindergarten',
                route: PRESCHOOL_KADRA,
                name: PRESCHOOL_KADRA,
            },
            {
                alias: 'Dokumenty',
                item: 'kindergarten',
                route: PRESCHOOL_DOCUMENTY,
                name: PRESCHOOL_DOCUMENTY,
            },
            {
                alias: 'Rekrutacja',
                item: 'kindergarten',
                route: PRESCHOOL_REKRUTACJA,
                name: PRESCHOOL_REKRUTACJA,
            },
        ],
    },
    {
        alias: 'Żłobek',
        route: ZLOBEK_PLAN_DNIA,
        name: ZLOBEK_PLAN_DNIA,
        item: 'naughty',
        subitems: [
            {
                alias: 'Aktualności ',
                item: 'naughty',
                link: 'https://www.facebook.com/profile.php?id=100076191577542',
                icon: mdiFacebook,
                iconColor: '#4267B2',
            },
            {
                alias: 'Plan dnia',
                item: 'naughty',
                route: ZLOBEK_PLAN_DNIA,
                name: ZLOBEK_PLAN_DNIA,
            },
            {
                alias: 'Kadra',
                item: 'naughty',
                route: ZLOBEK_KADRA,
                name: ZLOBEK_KADRA,
            },
            {
                alias: 'Dokumenty',
                item: 'naughty',
                route: ZLOBEK_DOCUMENTY,
                name: ZLOBEK_DOCUMENTY,
            },
            {
                alias: 'Rekrutacja',
                item: 'naughty',
                route: ZLOBEK_REKRUTACJA,
                name: ZLOBEK_REKRUTACJA,
            },
        ],
    },
    {
        alias: 'KOŁO WOLONTARIATU',
        route: KOLO_WOLONTARIATU,
        name: KOLO_WOLONTARIATU,
        item: 'volunteering',
        subitems: null,
    },
]