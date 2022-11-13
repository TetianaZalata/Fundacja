import {
    FUNDACJA_CELE,
    FUNDACJA_STATUT,
    FUNDACJA_SPRAWOZDANIA,
    FUNDACJA_OBSLUGAPRAWNA,
    FUNDACJA_KONTAKT,

    SZKOLA_STATUS_PRAWNY,
    SZKOLA_KALENDARZ,
    SZKOLA_PODRECZNIKI,
    SZKOLA_KADRA,
    SZKOLA_DOCUMENTY,

    LICEUM_STATUS_PRAWNY,
    LICEUM_KALENDARZ,
    LICEUM_PODRECZNIKI,
    LICEUM_KADRA,
    LICEUM_DOCUMENTY,

    PRESCHOOL_STATUS_PRAWNY,
    PRESCHOOL_RYTM_DNIA,
    PRESCHOOL_KADRA,
    PRESCHOOL_DOCUMENTY,
    PRESCHOOL_REKRUTACJA,

    ZLOBEK_STATUS_PRAWNY,
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
                name: 'Sprawozdania',
                route: FUNDACJA_SPRAWOZDANIA,
            },
            {
                name: 'Obsługa prawna',
                route: FUNDACJA_OBSLUGAPRAWNA,
            },
            {
                name: 'Kontakt',
                route: FUNDACJA_KONTAKT,
            }
        ]
    },
    {
        name: 'SZKOŁA',
        route:     SZKOLA_STATUS_PRAWNY,
        subitems: [
            {
                name: 'Status prawny',
                route: SZKOLA_STATUS_PRAWNY,
            },
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
        route: LICEUM_STATUS_PRAWNY,
        subitems: [
            {
                name: 'Status prawny',
                route: LICEUM_STATUS_PRAWNY,
            },
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
        route: PRESCHOOL_STATUS_PRAWNY,
        subitems: [
            {
                name: 'Status prawny',
                route: PRESCHOOL_STATUS_PRAWNY,
            },
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
        route: ZLOBEK_STATUS_PRAWNY,
        subitems: [
            {
                name: 'Status prawny',
                route: ZLOBEK_STATUS_PRAWNY,
            },
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
        name: 'Wolontariatu',
        route: KOLO_WOLONTARIATU,
        subitems: null,
    },
]