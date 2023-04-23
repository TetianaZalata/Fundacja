<template>
    <main class="school-calendar-container">
        <h1 class="title">KALENDARZ<br> ROKU SZKOLNEGO<br> 2022/2023</h1>

        <p>
            Rozpoczęcie roku szkolnego 2022/2023: 1 września 2022 r.<br>
            Zimowa przerwa świąteczna: 23–31 grudnia 2022 r.<br>
            Ferie zimowe: 30 stycznia – 12 lutego 2023 r.<br>
            Wiosenna przerwa świąteczna: 6 – 11 kwietnia 2023 r.<br>
            Zakończenie roku szkolnego: 23 czerwca 2023 r.
        </p>

        <v-expansion-panels
            class="mt-10"
            accordion
        >
            <v-expansion-panel>
                <v-expansion-panel-header class="blue-grey lighten-4">
                    <h2>ROZKŁAD ROKU SZKOLNEGO 2022/2023</h2>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="mt-7">
                    <h3>I PÓŁROCZE</h3>
                    <p>
                        1 września 2022 r. – 30 stycznia 2023 r.<br>
                        Powiadomienie o zagrożeniu oceną niedostateczną<br>
                        lub nieklasyfikowaniem – do 16 grudnia 2022 r.<br>
                        Termin wystawiania ocen – do 20 stycznia 2023 r.<br>
                        Rada Pedagogiczna klasyfikacyjna – 27 stycznia 2023 r.<br>
                    </p>
                    <h3>II PÓŁROCZE</h3>
                    <p>
                        31 stycznia 2023 r. – 23 czerwca 2023 r.<br>
                        Powiadomienie o zagrożeniu oceną niedostateczną<br>
                        lub nieklasyfikowaniem – do 12 maja 2023 r.<br>
                        Termin wystawienia ocen – 12 czerwca 2023 r.<br>
                        Rada pedagogiczna klasyfikacyjna – 15 czerwca 2023 r.<br>
                    </p>
                </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
                <v-expansion-panel-header class="blue-grey lighten-4">
                    <h2>DNI USTAWOWO WOLNE OD ZAJĘĆ DYDAKTYCZNO-WYCHOWAWCZYCH</h2>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="mt-7">
                    <p>
                        1 listopada 2022 r. – Wszystkich Świętych<br>
                        11 listopada 2022 r. – Narodowe Święto Niepodległości<br>
                        24 grudnia 2022 r. – Wigilia Bożego Narodzenia<br>
                        25–26 grudnia 2022 r. – Święta Bożego Narodzenia<br>
                        1 stycznia 2023 r. – Nowy Rok<br>
                        6 stycznia 2023 r. – Święto Trzech Króli<br>
                        9 kwietnia 2023 r. – Wielkanoc<br>
                        10 kwietnia 2023 r. – Poniedziałek Wielkanocny<br>

                        1 maja 2023 r. – Święto Pracy<br>
                        3 maja 2023 r. – Święto Konstytucji 3 Maja<br>
                        8 czerwca 2023 r. – Boże Ciało<br>
                    </p>
                </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
                <v-expansion-panel-header class="blue-grey lighten-4">
                    <h2>DNI WOLNE DYREKTORSKIE</h2>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="mt-7">
                    <p>
                        14 października 2022 r.<br>
                        31 października 2022 r.<br>
                        2 maja 2023 r.<br>
                        23–25 maja 2023 r.<br>
                        9 czerwca 2023 r.<br>
                    </p>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>

    </main>
</template>

<script>
export default {
    name: "SchoolCalendar"
}
</script>

<style lang="scss" scoped>
    .school-calendar-container {
        width: 100%;
        height: 100%;
        margin-top: 15px;
        margin-bottom: 15px;
        font-family: 'Source Sans Pro', sans-serif;

        .title {
            font-size: 44px !important;
            font-weight: 900;
            text-align: start;
            line-height: 44px;
            margin-bottom: 40px;
            font-family: 'Source Sans Pro', sans-serif !important;
        }

        h3 {
            text-align: start;
        }

        p {
            text-align: start;
        }
    }
</style>