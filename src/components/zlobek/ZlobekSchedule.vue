<template>
    <main class="zlobek-plan-container" app>
        <h1 class="title">RAMOWY ROZKŁAD DNIA</h1>

        <h3>6.00–8.00 – PRZYJMOWANIE DZIECI</h3>
        <p>
            - zabawy dowolne<br>
            - indywidualne zabawy edukacyjne z opiekunami<br>
            - możliwość indywidualnych kontaktów z rodzicami<br>
        </p>

        <h3>8.00–9.00 – ŚNIADANIE</h3>
        <p>
            - czynności higieniczne i pielęgnacyjne<br>
            - wdrażanie elementów higieny osobiste<br>
            - posiłek<br>
        </p>

        <h3>9.00–11.00 – ZAJĘCIA, w tym II śniadanie</h3>
        <p>
            - zajęcia ruchowe, taniec<br>
            - zajęcia rytmiczne i umuzykalniające<br>
            - różnorodne zabawy plastyczne<br>
            - zajęcia tematyczne<br>
            - zajęcia kształtujące motorykę małą i dużą<br>
            - zajęcia wspomagające naukę prawidłowego mówienia<br>
            - zajęcia na świeżym powietrzu - spacery<br>
            - zajęcia usprawniające<br>
        </p>

        <h3>11.00–12.00 – OBIAD</h3>
        <p>
            - czynności higieniczne i pielęgnacyjne<br>
            - wdrażanie elementów higieny osobistej<br>
            - posiłek<br>
        </p>

        <h3>12.00–14.00 – SEN</h3>
        <p>
            - w tym słuchanie bajek, kołysanek, muzyki relaksacyjnej<br>
        </p>

        <h3>14.00–14.30 – PODWIECZOREK</h3>
        <p>
            - czynności higieniczne i pielęgnacyjne<br>
            - wdrażanie elementów higieny osobistej<br>
            - posiłek<br>
        </p>

        <h3>14.30–16.30 – ZAJĘCIA DOWOLNE, w tym odbiór dzieci przez rodziców</h3>
        <p>
            - zabawy w kącikach zainteresowań<br>
            - czas na indywidualne rozmowy rodziców z opiekunami<br>
        </p>
    </main>
</template>

<script>
export default {
    name: ''
}
</script>

<style lang="scss" scoped>
    .zlobek-plan-container {
        width: 100%;
        height: 100%;
        margin-top: 15px;
        margin-bottom: 15px;
        font-family: 'Source Sans Pro', sans-serif;

        .title {
            font-size: 50px !important;
            font-weight: 900;
            text-align: start;
            line-height: 50px;
            margin-bottom: 40px;
            font-family: 'Source Sans Pro', sans-serif !important;
        }

        h3 {
            text-align: start;
            font-size: 28px !important;
        }

        p {
            text-align: start;
        }
    }
</style>