<template>
    <main class="fund-main-page-container white">.
        <div class="logo-container">
            <img class="logo" :src="funduszeEuropejskie" alt="Fundusze Europejskie logo">
            <img class="logo" :src="rzeczpospoptaPolska" alt="Rzeczpospopta Polska logo">
            <img class="logo" :src="wielkopolskiego" alt="Wielkopolskiego logo">
            <img class="logo" :src="uniaEuropejska" alt="Unia Europejska logo">
        </div>
        <div class="organizations">
            <div class="main">
                <img class="logo" :src="fundacjaLogoHref" alt="Fundacja logo">
                <p>
                    Przekaż nam 1,5 % swojego podatku<br>
                    ORGANIZACJA POŻYTKU PUBLICZNEGO<br>
                    KRS 0000491138<br>
                    Santander Bank Polska S.A. 1 Oddział w Gnieźnie<br>
                    94 1090 1375 0000 0001 2266 2138<br>
                </p>
            </div>
            <div class="other">
              <div class="images-container">
                <div class="logos">
                    <div class="logo-container"><img class="logo" :src="schoolLogoHref" alt="Porkom logo"></div>
                    <div class="logo-container"><img class="logo" :src="zlobekLogoHref" alt="Zlobek Polska logo"></div>
                    <div class="logo-container"><img class="logo" :src="przedszkoleLogoHref" alt="Przedszkole logo"></div>
                </div>
                <div class="description">
                    <p>- prowadzimy żłobek, przedszkole, szkołę podstawową oraz liceum ogólnokształcące</p>
                    <p>- wspieramy wszelkie inicjatywy edukacyjne i kulturalne</p>
                    <p>- organizujemy kolonie i półkolonie</p>
                </div>
              </div>
            </div>
        </div>
    </main>
</template>
<script>
    import zlobekLogoHref from '@/components/logos/zlobekLogo.js';
    import schoolLogoHref from '@/components/logos/schoolLogo.js';
    import przedszkoleLogoHref from '@/components/logos/przedszkoleLogo.js';
    import fundacjaLogoHref from '@/components/logos/FWiRE_logo.js';
    import funduszeEuropejskie from "@/components/logos/Fundusze_Europejskie";
    import rzeczpospoptaPolska from "@/components/logos/Rzeczpospolita_Polska";
    import wielkopolskiego from "@/components/logos/Wielkopolskiego";
    import uniaEuropejska from "@/components/logos/Unia_Europejska";

    export default {
        name: 'FundGoals',
        data() {
            return {
                zlobekLogoHref,
                schoolLogoHref,
                przedszkoleLogoHref,
                fundacjaLogoHref,
                funduszeEuropejskie,
                rzeczpospoptaPolska,
                wielkopolskiego,
                uniaEuropejska,
            }
        }
    }
</script>

<style lang="scss" scoped>
    .fund-main-page-container {
        align-self: flex-start;
        width: 100%;

        .logo-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 12px;
            flex-wrap: wrap;

            .logo {
                max-width: 200px;

                @media screen and (max-width: 450px) {
                    max-width: 100%;
                    padding-bottom: 60px;
                }
            }
        }

        .organizations {
            margin-top: 80px;
            .main {
                display: flex;
                flex-direction: column;
                align-items: center;
                .logo,
                p {
                    width: 30%;
                    @media screen and (max-width: 860px) {
                       width: 60%
                    }
                    @media screen and (max-width: 450px) {
                       width: 100%;
                       padding: 0 12px;
                    }
                }
                p {
                  margin-top: 40px;
                  margin-left: 20px;
                }
            }

            .other {
              margin-top: 80px;
              justify-content: space-around;

              .images-container {
                  .logos {
                      display: flex;
                      margin-bottom: 40px;
                      flex-wrap: wrap;

                      .logo-container {
                          display: flex;
                          justify-content: center;
                          width: 33.3%;

                          @media screen and (max-width: 600px) {
                              width: 100%;
                              margin-bottom: 40px;
                          }
                      }
                  }
                  
                  .description {
                      display: flex;
                      flex-direction: column;
                      margin-bottom: 120px;

                      p {
                          padding-left: 80px;

                          @media screen and (max-width: 600px) {
                            padding-left: 0;
                          }
                      }
                  }
                }
            }
        }
    }
</style>