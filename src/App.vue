<template>
    <v-app>
        <TheHeader />
        <v-main class="main">
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-main>
        <TheFooter />
    </v-app>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter.vue";

export default {
    name: "App",
    components: {
        TheHeader,
        TheFooter,
    },
    data() {
        return {};
    },
};
</script>

<style lang="scss">
html {
    overflow-y: auto;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    .main {
        padding-bottom: 0 !important;
    }
}

nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}

.container {
    padding: 0;
}
</style>
