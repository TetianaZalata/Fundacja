<template>
    <v-app>
        <TheHeader />
        <v-main class="main">
            <v-container fill-height fluid>
                <router-view></router-view>
            </v-container>
        </v-main>
        <TheFooter />
    </v-app>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import { mapActions } from 'vuex';

export default {
    name: "App",
    components: {
        TheHeader,
        TheFooter,
    },
    created() {
        this.getUser();
    },
    data() {
        return {};
    },
    methods: {
        ...mapActions('authUser', ['getUser']),
    }
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
