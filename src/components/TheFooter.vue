<template>
    <v-footer app class="footer pa-3 justify-space-around grey lighten-3" absolute p-3>
        <section class="text-justify subtitle-2">
            <h3>Fundacja Wspierania<br> i Rozwoju Edukacji</h3>
            <div class="caption">
                <v-icon class="mr-5" small>mdi-phone</v-icon>
                <a href="tel:608 096 437">608 096 437</a>
            </div>
            <div class="caption">
                <v-icon class="mr-5" small>mdi-at</v-icon>
                <a href = "mailto:kontakt@fedukacja.org.pl">kontakt@fedukacja.org.pl</a>
            </div>
            <div class="caption">
                <v-icon class="mr-5" small>mdi-map-marker</v-icon>
                <a :href="mapLinkFund" target="_blank">ul. Gębarzewska 12<br><div class="space"/> 62-200 Gniezno</a>
            </div>
        </section>

        <section class="text-justify subtitle-2">
            <h3>Szkoła Podstawowa<br> i Liceum Ogólnokształcące PORKOM</h3>
            <div class="caption">
                <v-icon class="mr-5" small>mdi-phone</v-icon>
                <a href="tel:664 188 793">664 188 793</a>
            </div>
            <div class="caption">
                <v-icon class="mr-5" small>mdi-at</v-icon>
                <a href = "mailto:sekretariat@porkom.com.pl">sekretariat@porkom.com.pl</a>
            </div>
            <div class="caption">
                <v-icon class="mr-5" small>mdi-map-marker</v-icon>
                <a :href="mapLinkFund" target="_blank">ul. Gębarzewska 12<br><div class="space"/> 62-200 Gniezno</a>
            </div>
        </section>

        <section class="text-justify subtitle-2">
            <h3>Przedszkole<br> Leśna Kraina</h3>
            <div class="caption">
                <v-icon class="mr-5" small>mdi-phone</v-icon>
                <a href="tel:664 188 793">664 188 793</a>
            </div>
            <div class="caption">
                <v-icon class="mr-5" small>mdi-at</v-icon>
                <a href = "mailto:sekretariat@porkom.com.pl">sekretariat@porkom.com.pl</a>
            </div>
            <div class="caption">
                <v-icon class="mr-5" small>mdi-map-marker</v-icon>
                <a :href="mapLinkFund" target="_blank">ul. Gębarzewska 12<br><div class="space"/> 62-200 Gniezno</a>
            </div>
        </section>

        <section class="text-justify subtitle-2">
            <h3>Żłobek<br> Zaczarowany Zakątek</h3>
            <div class="caption">
                <v-icon class="mr-5" small>mdi-phone</v-icon>
                <a href="tel:698 947 113">698 947 113</a>
            </div>
            <div class="caption">
                <v-icon class="mr-5" small>mdi-at</v-icon>
                <a href = "mailto:kontakt@zakatekzlobek.pl">kontakt@zakatekzlobek.pl</a>
            </div>
            <div class="caption">
                <v-icon class="mr-5" small>mdi-map-marker</v-icon>
                <a :href="mapLinkZlobek" target="_blank">os. Władysława Łokietka 15<br><div class="space"/> 62-200 Gniezno</a>
            </div>
        </section>
       
    </v-footer>
</template>

<script>
export default {
    name: "TheFooter",
    data() {
        return {
            mapLinkFund: 'https://www.google.com/maps/place/G%C4%99barzewska+12,+62-200+Gniezno,+Poland/@52.5018365,17.5867376,18.75z/data=!4m5!3m4!1s0x470493dbf97748df:0xb818811e6a2e31a9!8m2!3d52.5018513!4d17.5871274',
            mapLinkZlobek: 'https://www.google.com/maps/place/Osiedle+W%C5%82adys%C5%82awa+%C5%81okietka+15,+62-200+Gniezno,+Poland/@52.5467833,17.5977159,17z/data=!3m1!4b1!4m5!3m4!1s0x470491017bf65c9b:0x2535b45bbedff67b!8m2!3d52.5467801!4d17.5999046',
        };
    },
};
</script>

<style lang="scss" scoped>
.footer {
    .space {
        display: inline-block;
        width: 33px;
        height: 16px;
    }

    a {
        color: #000000de;
    }
}

.v-footer {
    box-shadow: 0px -2px 4px -1px rgb(0 0 0 / 20%), 0px -2px 5px 0px rgb(0 0 0 / 14%), 0px -1px 10px 0px rgb(0 0 0 / 12%) !important;
}
</style>