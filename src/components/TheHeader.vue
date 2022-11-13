<template>
    <v-app-bar app color="grey lighten-3" dense>

        <v-tabs v-model="tab" background-color="grey lighten-3">
            <v-menu
                v-for="item in items"
                :key="item.name"
                offset-y
                rounded="0"
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-tab
                        :to="{ name: item.route }"
                        v-bind="attrs"
                        v-on="on"
                    >
                        <router-link :to="{ name: item.route }">
                            {{ item.name }}
                        </router-link>
                    </v-tab>
                </template>
                <v-list v-if="!!item.subitems">
                    <v-list-item
                        v-for="subitem in item.subitems"
                        :key="subitem.name"
                        :link="true"
                    >
                        <a
                            v-if="!!subitem.link"
                            :href="subitem.link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {{ subitem.name }}
                            <v-icon v-if="subitem.icon" class="ml-3" color="#4267B2"> {{ subitem.icon }} </v-icon>
                        </a>
                        <router-link
                            v-else
                            :to="{ name: subitem.route }"
                        >
                            {{ subitem.name }}
                        </router-link>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-tabs>
        <v-spacer />

        <router-link :to="{ name: LOGIN }">Login</router-link>
    </v-app-bar>
</template>

<script>
import { LOGIN } from '@/router/routeNames';
import items from '@/helpers/headerMenu';
export default {
    name: "TheHeader",
    data() {
        return {
            LOGIN,
            userMenu: ["Profile", "Access management", "Logout"],
            tab: '',
            items,
        };
    },
};
</script>

<style lang="scss" scoped>
    a {
        color: black !important;
        text-decoration: none;
    }

    .main-logo {
        max-height: 54px;
    }
</style>