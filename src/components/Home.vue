<template>
    <main class="home-page">
         <v-parallax
            class="fundacja"
            dark
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        >
            <section class="parallax-section">
                <div class="description">
                    <h2>Fundacja Wspierania i Rozwoju Edukacji</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra pretium dolor. Morbi id sodales lorem. Nulla fringilla enim cursus orci lobortis faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam eget enim laoreet, commodo dolor et, facilisis elit. Praesent consectetur sapien quam, in lacinia ante faucibus nec. Suspendisse libero leo, blandit ultrices ultrices eu, molestie eu mi. Duis sit amet pharetra ante, accumsan elementum dui. Vivamus ac porta dui, quis tristique tortor. Pellentesque blandit, risus non tincidunt viverra, neque turpis gravida risus, posuere blandit tellus augue et dolor. Duis placerat condimentum ligula vel dignissim. Pellentesque condimentum dictum dui, quis sodales urna sodales eu. Aenean et orci ac lectus accumsan sagittis.
                    </p>
                </div>
                <v-card class="mx-auto my-12 home-page-card">
                    <div class="logo-container">
                        <img :src="fundacjaLogoHref" alt="Fundacja logo">
                    </div>
                    <v-card-title class="justify-center">Fundacja Wspierania<br> i Rozwoju Edukacji</v-card-title>
                    <v-divider class="mx-4"></v-divider>
                    <v-card-text>
                        <p>ul. Gębarzewska 5</p>
                        <p>62-200 Gniezno</p>
                        <p>tel. 608 096 437</p>
                        <p>kontakt@fedukacja.org.pl</p>
                    </v-card-text>
                </v-card>                
            </section>
        </v-parallax>

        <v-parallax
            class="school"
            dark
            src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
        >
            <section class="parallax-section">
                <v-card class="mx-auto my-12 home-page-card">
                    <div class="logo-container">
                        <img :src="schoolLogoHref" alt="Porkom logo">
                    </div>
                    <v-card-title class="justify-center">Szkoła Podstawowa i Liceum Ogólnokształcące PORKOM</v-card-title>
                    <v-divider class="mx-4"></v-divider>
                    <v-card-text>
                        <p>ul. Gębarzewska 12</p>
                        <p>62-200 Gniezno</p>
                        <p>tel. 664 188 793</p>
                        <p>sekretariat@porkom.com.pl</p>
                    </v-card-text>
                </v-card>

                <div class="description">
                    <h2>Szkoła Podstawowa i Liceum Ogólnokształcące PORKOM</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra pretium dolor. Morbi id sodales lorem. Nulla fringilla enim cursus orci lobortis faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam eget enim laoreet, commodo dolor et, facilisis elit. Praesent consectetur sapien quam, in lacinia ante faucibus nec. Suspendisse libero leo, blandit ultrices ultrices eu, molestie eu mi. Duis sit amet pharetra ante, accumsan elementum dui. Vivamus ac porta dui, quis tristique tortor. Pellentesque blandit, risus non tincidunt viverra, neque turpis gravida risus, posuere blandit tellus augue et dolor. Duis placerat condimentum ligula vel dignissim. Pellentesque condimentum dictum dui, quis sodales urna sodales eu. Aenean et orci ac lectus accumsan sagittis.
                    </p>
                </div>
                
            </section>
        </v-parallax>

        <v-parallax
            class="preschool"
            dark
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        >
            <section class="parallax-section">
                 <div class="description">
                    <h2>Przedszkole "Leśna Kraina"</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra pretium dolor. Morbi id sodales lorem. Nulla fringilla enim cursus orci lobortis faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam eget enim laoreet, commodo dolor et, facilisis elit. Praesent consectetur sapien quam, in lacinia ante faucibus nec. Suspendisse libero leo, blandit ultrices ultrices eu, molestie eu mi. Duis sit amet pharetra ante, accumsan elementum dui. Vivamus ac porta dui, quis tristique tortor. Pellentesque blandit, risus non tincidunt viverra, neque turpis gravida risus, posuere blandit tellus augue et dolor. Duis placerat condimentum ligula vel dignissim. Pellentesque condimentum dictum dui, quis sodales urna sodales eu. Aenean et orci ac lectus accumsan sagittis.
                    </p>
                </div>
                <v-card class="mx-auto my-12 home-page-card">
                    <div class="logo-container">
                        <img :src="przedszkoleLogoHref" alt="Przedszkole logo">
                    </div>
                    <v-card-title class="justify-center">Przedszkole "Leśna Kraina"</v-card-title>
                    <v-divider class="mx-4"></v-divider>
                    <v-card-text>
                        <p>ul. Gębarzewska 12</p>
                        <p>62-200 Gniezno</p>
                        <p>tel. 664 188 793</p>
                        <p>sekretariat@porkom.com.pl</p>
                    </v-card-text>
                </v-card>
            </section>
        </v-parallax>

        <v-parallax
            class="zlobek"  
            dark
            src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
        >
            <section class="parallax-section">
                <v-card class="mx-auto my-12 home-page-card">
                    <div class="logo-container">
                        <img :src="zlobekLogoHref" alt="Zlobek log">
                    </div>
                    <v-card-title class="justify-center">Żłobek "Zaczarowany Zakątek"</v-card-title>
                    <v-divider class="mx-4"></v-divider>
                    <v-card-text>
                        <p>os. Władysława Łokietka 15</p>
                        <p>62-200 Gniezno</p>
                        <p>tel. 698 947 113</p>
                        <p>e-mail: kontakt@zakatekzlobek.pl</p>
                        <v-icon
                            large
                            color="blue darken-4"
                            >
                            mdi-facebook
                        </v-icon>
                    </v-card-text>
                </v-card>

                <div class="description">
                    <h2>Żłobek "Zaczarowany Zakątek"</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra pretium dolor. Morbi id sodales lorem. Nulla fringilla enim cursus orci lobortis faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam eget enim laoreet, commodo dolor et, facilisis elit. Praesent consectetur sapien quam, in lacinia ante faucibus nec. Suspendisse libero leo, blandit ultrices ultrices eu, molestie eu mi. Duis sit amet pharetra ante, accumsan elementum dui. Vivamus ac porta dui, quis tristique tortor. Pellentesque blandit, risus non tincidunt viverra, neque turpis gravida risus, posuere blandit tellus augue et dolor. Duis placerat condimentum ligula vel dignissim. Pellentesque condimentum dictum dui, quis sodales urna sodales eu. Aenean et orci ac lectus accumsan sagittis.
                    </p>
                </div>
                
            </section>
        </v-parallax>
        
        <v-parallax
            class="partners"  
            dark
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        >
            <section class="partners-parallax-section">
                <h2>Our partners</h2>
                <div class="logos-container pt-3 pb-3">
                    <a href="#"><img :src="funduszeEuropejskie" alt=""></a>
                    <a href="#"><img :src="rzeczpospolitaPolska" alt=""></a>
                    <a href="#"><img :src="wielkopolskiego" alt=""></a>
                    <a href="#"><img :src="uniaEuropejska" alt=""></a>
                </div>
            </section>
        </v-parallax>
    </main>    
</template>

<script>
import zlobekLogoHref from '@/components/logos/zlobekLogo.js';
import schoolLogoHref from '@/components/logos/schoolLogo.js';
import przedszkoleLogoHref from '@/components/logos/przedszkoleLogo.js';
import fundacjaLogoHref from '@/components/logos/FWiRE_logo.js';
import funduszeEuropejskie from "@/components/logos/Fundusze_Europejskie";
import rzeczpospolitaPolska from "@/components/logos/Rzeczpospolita_Polska";
import wielkopolskiego from "@/components/logos/Wielkopolskiego";
import uniaEuropejska from "@/components/logos/Unia_Europejska";

export default {
    name: 'TheHomePage',
    data() {
        return {
            zlobekLogoHref,
            schoolLogoHref,
            przedszkoleLogoHref,
            fundacjaLogoHref,
            funduszeEuropejskie,
            rzeczpospolitaPolska,
            wielkopolskiego,
            uniaEuropejska,
        }
    }
}
</script>

<style lang="scss" scoped>
    .home-page {
        &-card {
            padding: 10px;
        }
        
        .parallax-section {
            display: flex;
            align-items: center;
            max-width: 1100px;

            .description {
                padding: 0 50px;
                text-align: start;

                h2 {
                    font-size: 36px;
                }
            }
        }

        .fundacja,
        .zlobek,
        .school,
        .preschool,
        .partners {
            height: 700px !important;
            display: flex;
            justify-content: center;

            .home-page-card {
                .logo-container {
                    img {
                        max-width: 360px;
                    }
                }
            }
        }

        .partners {
            &-parallax-section {
                max-width: 1100px;
                
                h2 {
                    font-size: 36px;
                }

                .logos-container{
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    img {
                        max-width: 260px;
                    }
                }
            }
        }
    }
</style>