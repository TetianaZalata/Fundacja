import {
    FUNDACJA_CELE,
    FUNDACJA_STATUT,
    FUNDACJA_SPRAWOZDANIA,
    FUNDACJA_OBSLUGAPRAWNA,
    FUNDACJA_KONTAKT,

    SZKOLA_PODSTAWOWA_ACTUALNOSCI,
    SZKOLA_PODSTAWOWA_DLA_UCZNIA,
    SZKOLA_PODSTAWOWA_DLA_RODZICA,
    SZKOLA_PODSTAWOWA_DOCUMENTY,
    SZKOLA_PODSTAWOWA_GALERIA,
    SZKOLA_PODSTAWOWA_KONTAKT,

    LICEUM_ACTUALNOSCI,
    LICEUM_DLA_UCZNIA,
    LICEUM_DLA_RODZICA,
    LICEUM_DOCUMENTY,
    LICEUM_GALERIA,
    LICEUM_KONTAKT,

    PRESCHOOL_WIESCI,
    PRESCHOOL_ABOUT,
    PRESCHOOL_DLA_RODZICA,
    PRESCHOOL_GALERIA,
    PRESCHOOL_KONTAKT,

    ZLOBEK_ABOUT,
    ZLOBEK_REKRUTACJA,
    ZLOBEK_PLAN_DNIA,
    ZLOBEK_KONTAKT,
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
        name: 'Szkoła Podstawowa',
        route: SZKOLA_PODSTAWOWA_ACTUALNOSCI,
        subitems: [
            {
                name: 'Aktualności',
                route: SZKOLA_PODSTAWOWA_ACTUALNOSCI,
            },
            {
                name: 'Dla ucznia',
                route: SZKOLA_PODSTAWOWA_DLA_UCZNIA,
            },
            {
                name: 'Dla rodzica',
                route: SZKOLA_PODSTAWOWA_DLA_RODZICA,
            },
            {
                name: 'Dokumenty',
                route: SZKOLA_PODSTAWOWA_DOCUMENTY,
            },
            {
                name: 'Galeria',
                route: SZKOLA_PODSTAWOWA_GALERIA,
            },
            {
                name: 'Kontakt',
                route: SZKOLA_PODSTAWOWA_KONTAKT,
            }
        ],
    },
    {
        name: 'Liceum Ogólnokształcące',
        route: LICEUM_ACTUALNOSCI,
        subitems: [
            {
                name: 'Aktualności',
                route: LICEUM_ACTUALNOSCI,
            },
            {
                name: 'Dla ucznia',
                route: LICEUM_DLA_UCZNIA,
            },
            {
                name: 'Dla rodzica',
                route: LICEUM_DLA_RODZICA,
            },
            {
                name: 'Dokumenty',
                route: LICEUM_DOCUMENTY,
            },
            {
                name: 'Galeria',
                route: LICEUM_GALERIA,
            },
            {
                name: 'Kontakt',
                route: LICEUM_KONTAKT,
            }
        ],
    },
    {
        name: 'Przedszkole',
        route: PRESCHOOL_WIESCI,
        subitems: [
            {
                name: 'Wieści z Leśnej Krainy',
                route: PRESCHOOL_WIESCI,
            },
            {
                name: 'O przedszkolu',
                route: PRESCHOOL_ABOUT,
            },
            {
                name: 'Dla rodzica',
                route: PRESCHOOL_DLA_RODZICA,
            },
            {
                name: 'Galeria',
                route: PRESCHOOL_GALERIA,
            },
            {
                name: 'Kontakt',
                route: PRESCHOOL_KONTAKT,
            },
        ],
    },
    {
        name: 'Żłobek',
        route: ZLOBEK_ABOUT,
        subitems: [
            {
                name: 'O nas',
                route: ZLOBEK_ABOUT,
            },
            {
                name: 'Rekrutacja',
                route: ZLOBEK_REKRUTACJA,
            },
            {
                name: 'Plan dnia',
                route: ZLOBEK_PLAN_DNIA,
            },
            {
                name: 'Kontakt',
                route: ZLOBEK_KONTAKT,
            },
        ],
    },
]