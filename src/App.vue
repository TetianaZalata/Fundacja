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
        document.title = "FWiRE";
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
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;400;900&display=swap');

html {
    overflow-y: auto;
    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        background: #f1f1f1; 
    }
    ::-webkit-scrollbar-thumb {
        background: #888; 
        border-radius: 3px;
    }
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    position: relative;

    .main {
        padding-bottom: 0 !important;
    }

    .notification {
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 10000;
        width: 400px;
        text-align: start;
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

.v-main__wrap {
    background-color: #FAFAFA;
    overflow-y: auto;

    .container {
        padding: 0;
        max-width: 1200px;
        overflow: hidden;
        height: calc(100% - 150px);
        margin-bottom: 150px;

        @media screen and (max-width: 878px) {
            height: calc(100% - 320px);
            margin-bottom: 320px;
        }
        @media screen and (max-width: 407px) {
            height: calc(100% - 570px);
            margin-bottom: 570px;
        }
    }
}

blockquote {
    border-left: 4px solid #ccc;
    margin-bottom: 5px;
    margin-top: 5px;
    padding-left: 16px;
}

.ql-align-center {
    text-align: center;
}
.ql-align-right {
    text-align: right;
}
pre.ql-syntax {
    background-color: #23241f;
    color: #f8f8f2;
    overflow: visible;
}

</style>
