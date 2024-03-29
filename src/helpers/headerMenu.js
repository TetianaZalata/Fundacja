import {
    FUNDACJA_MAIN,
    FUNDACJA_CELE,
    FUNDACJA_STATUT,
    PROJECTS_UE,

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

import { mdiFacebook, mdiHomeOutline, mdiCalendarMonthOutline, mdiBullseyeArrow, mdiTextBoxMultipleOutline, mdiBookshelf, mdiHumanMaleFemaleChild, mdiAccountGroupOutline } from '@mdi/js';

export default [
    {
        alias: 'FUNDACJA',
        route: FUNDACJA_CELE,
        name: FUNDACJA_CELE,
        item: 'fund',
        subitems: [{
              alias: 'Strona Główna',
              route: FUNDACJA_MAIN,
              name: FUNDACJA_MAIN,
              item: 'fund',
              icon: mdiHomeOutline,
              iconColor: '#000000',
          },
            {
                alias: 'Cele',
                route: FUNDACJA_CELE,
                name: FUNDACJA_CELE,
                item: 'fund',
                icon: mdiBullseyeArrow,
                iconColor: '#000000',
            },
            {
                alias: 'Statut',
                route: FUNDACJA_STATUT,
                name: FUNDACJA_STATUT,
                item: 'fund',
                icon: mdiTextBoxMultipleOutline,
                iconColor: '#000000',
            },
            {
                alias: 'Projekty UE',
                route: PROJECTS_UE,
                name: PROJECTS_UE,
                item: 'fund',
                iconFile: 'Flag_of_Europe.png',
            },
            {
                alias: 'Wypoczynek dzieci i młodzieży',
                link: 'https://www.facebook.com/profile.php?id=100094458856250',
                icon: mdiFacebook,
                iconColor: '#3b5998',
            },
            {
                alias: 'Sprawozdania',
                link: 'https://sprawozdaniaopp.niw.gov.pl/',
                iconFile: 'NIW.png',
            },
            {
                alias: 'Obsługa prawna',
                link: 'https://honestia.pl/',
                iconFile: 'Honestia.png',
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
                alias: 'E-Dziennik ',
                link: 'https://uonetplus.vulcan.net.pl/gminagniezno',
                iconFile: 'E_Dziennik.png',
            },
            {
                alias: 'Aktualności ',
                item: 'school',
                link: 'https://www.facebook.com/www.szko',
                icon: mdiFacebook,
                iconColor: '#3b5998',
            },
            {
                alias: 'Kalendarz',
                item: 'school',
                route: SZKOLA_KALENDARZ,
                name: SZKOLA_KALENDARZ,
                icon: mdiCalendarMonthOutline,
                iconColor: '#000000',
            },
            {
                alias: 'Podręczniki',
                item: 'school',
                route: SZKOLA_PODRECZNIKI,
                name: SZKOLA_PODRECZNIKI,
                icon: mdiBookshelf,
                iconColor: '#000000',
            },
            {
                alias: 'Kadra',
                item: 'school',
                route: SZKOLA_KADRA,
                name: SZKOLA_KADRA,
                icon: mdiAccountGroupOutline,
                iconColor: '#000000',
            },
            {
                alias: 'Dokumenty ',
                item: 'school',
                route: SZKOLA_DOCUMENTY,
                name: SZKOLA_DOCUMENTY,
                icon: mdiTextBoxMultipleOutline,
                iconColor: '#000000',
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
                alias: 'E-Dziennik ',
                link: 'https://uonetplus.vulcan.net.pl/powiatgnieznienski',
                iconFile: 'E_Dziennik.png',
            },
            {
                alias: 'Aktualności ',
                item: 'hschool',
                link: 'https://www.facebook.com/www.szko',
                icon: mdiFacebook,
                iconColor: '#3b5998',
            },
            {
                alias: 'Kalendarz',
                item: 'hschool',
                route: LICEUM_KALENDARZ,
                name: LICEUM_KALENDARZ,
                icon: mdiCalendarMonthOutline,
                iconColor: '#000000',
            },
            {
                alias: 'Podręczniki',
                item: 'hschool',
                route: LICEUM_PODRECZNIKI,
                name: LICEUM_PODRECZNIKI,
                icon: mdiBookshelf,
                iconColor: '#000000',
            },
            {
                alias: 'Kadra',
                item: 'hschool',
                route: LICEUM_KADRA,
                name: LICEUM_KADRA,
                icon: mdiAccountGroupOutline,
                iconColor: '#000000',
            },
            {
                alias: 'Dokumenty',
                item: 'hschool',
                route: LICEUM_DOCUMENTY,
                name: LICEUM_DOCUMENTY,
                icon: mdiTextBoxMultipleOutline,
                iconColor: '#000000',
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
                iconColor: '#3b5998',
            },
            {
                alias: 'Rytm dnia',
                item: 'kindergarten',
                route: PRESCHOOL_RYTM_DNIA,
                name: PRESCHOOL_RYTM_DNIA,
                icon: mdiCalendarMonthOutline,
                iconColor: '#000000',
            },
            {
                alias: 'Kadra',
                item: 'kindergarten',
                route: PRESCHOOL_KADRA,
                name: PRESCHOOL_KADRA,
                icon: mdiAccountGroupOutline,
                iconColor: '#000000',
            },
            {
                alias: 'Dokumenty',
                item: 'kindergarten',
                route: PRESCHOOL_DOCUMENTY,
                name: PRESCHOOL_DOCUMENTY,
                icon: mdiTextBoxMultipleOutline,
                iconColor: '#000000',
            },
            {
                alias: 'Rekrutacja',
                item: 'kindergarten',
                route: PRESCHOOL_REKRUTACJA,
                name: PRESCHOOL_REKRUTACJA,
                icon: mdiHumanMaleFemaleChild,
                iconColor: '#000000',
            },
        ],
    },
    {
        alias: 'Żłobek',
        route: ZLOBEK_PLAN_DNIA,
        name: ZLOBEK_PLAN_DNIA,
        item: 'manger',
        subitems: [
            {
                alias: 'Aktualności ',
                item: 'manger',
                link: 'https://www.facebook.com/profile.php?id=100076191577542',
                icon: mdiFacebook,
                iconColor: '#3b5998',
            },
            {
                alias: 'Plan dnia',
                item: 'manger',
                route: ZLOBEK_PLAN_DNIA,
                name: ZLOBEK_PLAN_DNIA,
                icon: mdiCalendarMonthOutline,
                iconColor: '#000000',
            },
            {
                alias: 'Kadra',
                item: 'manger',
                route: ZLOBEK_KADRA,
                name: ZLOBEK_KADRA,
                icon: mdiAccountGroupOutline,
                iconColor: '#000000',
            },
            {
                alias: 'Dokumenty',
                item: 'manger',
                route: ZLOBEK_DOCUMENTY,
                name: ZLOBEK_DOCUMENTY,
                icon: mdiTextBoxMultipleOutline,
                iconColor: '#000000',
            },
            {
                alias: 'Rekrutacja',
                item: 'manger',
                route: ZLOBEK_REKRUTACJA,
                name: ZLOBEK_REKRUTACJA,
                icon: mdiHumanMaleFemaleChild,
                iconColor: '#000000',
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