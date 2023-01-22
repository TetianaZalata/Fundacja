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

export default [
    {
        name: 'FUNDACJA',
        route: FUNDACJA_CELE,
        subitems: [{
                name: 'Cele',
                route: FUNDACJA_CELE,
            },
            {
                name: 'Statut',
                route: FUNDACJA_STATUT,
            },
            {
                name: 'Sprawozdańia',
                link: 'https://sprawozdaniaopp.niw.gov.pl/',
                iconFile: 'NIW.png',
            },
            {
                name: 'Obsługa prawna',
                link: 'https://auxilia-oswiata.pl/',
                iconFile: 'Auxilia.png',
            },
        ]
    },
    {
        name: 'SZKOŁA',
        route: SZKOLA_KALENDARZ,
        subitems: [
            {
                name: 'Aktualności ',
                link: 'https://www.facebook.com/www.szko',
                icon: 'mdi-facebook',
            },
            {
                name: 'Kalendarz',
                route: SZKOLA_KALENDARZ,
            },
            {
                name: 'Podręczniki ',
                route: SZKOLA_PODRECZNIKI,
            },
            {
                name: 'Kadra',
                route: SZKOLA_KADRA,
            },
            {
                name: 'Dokumenty ',
                route: SZKOLA_DOCUMENTY,
            },
        ],
    },
    {
        name: 'Liceum',
        route: LICEUM_KALENDARZ,
        subitems: [
            {
                name: 'Aktualności ',
                link: 'https://www.facebook.com/www.szko',
                icon: 'mdi-facebook',
            },
            {
                name: 'Kalendarz',
                route: LICEUM_KALENDARZ,
            },
            {
                name: 'Podręczniki',
                route: LICEUM_PODRECZNIKI,
            },
            {
                name: 'Kadra',
                route: LICEUM_KADRA,
            },
            {
                name: 'Dokumenty',
                route: LICEUM_DOCUMENTY,
            },
        ],
    },
    {
        name: 'Przedszkole',
        route: PRESCHOOL_RYTM_DNIA,
        subitems: [
            {
                name: 'Aktualności ',
                link: 'https://www.facebook.com/PrzedszkoleLesnaKraina',
                icon: 'mdi-facebook',
            },
            {
                name: 'Rytm dnia',
                route: PRESCHOOL_RYTM_DNIA,
            },
            {
                name: 'Kadra',
                route: PRESCHOOL_KADRA,
            },
            {
                name: 'Dokumenty',
                route: PRESCHOOL_DOCUMENTY,
            },
            {
                name: 'Rekrutacja',
                route: PRESCHOOL_REKRUTACJA,
            },
        ],
    },
    {
        name: 'Żłobek',
        route: ZLOBEK_PLAN_DNIA,
        subitems: [
            {
                name: 'Aktualności ',
                link: 'https://www.facebook.com/profile.php?id=100076191577542',
                icon: 'mdi-facebook',
            },
            {
                name: 'Plan dnia',
                route: ZLOBEK_PLAN_DNIA,
            },
            {
                name: 'Kadra',
                route: ZLOBEK_KADRA,
            },
            {
                name: 'Dokumenty',
                route: ZLOBEK_DOCUMENTY,
            },
            {
                name: 'Rekrutacja',
                route: ZLOBEK_REKRUTACJA,
            },
        ],
    },
    {
        name: 'KOŁO WOLONTARIATU',
        route: KOLO_WOLONTARIATU,
        subitems: null,
    },
]