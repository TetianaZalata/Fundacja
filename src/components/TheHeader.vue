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

        <router-link
            v-if="!isAuth"
            :to="{ name: LOGIN }"
        >Login</router-link>

        <v-btn
            tile
            v-if="isAuth"
            @click="logOut"
        >Logout</v-btn>

        <v-alert
            class="notification"
            :value="alert"
            :type="!!messages.error ? 'error' : 'success'"
            transition="scale-transition"
        >
            {{ messages.error ? messages.error : messages.success }}
        </v-alert>

    </v-app-bar>
</template>

<script>
    import { LOGIN } from '@/router/routeNames';
    import items from '@/helpers/headerMenu';
    import { mapGetters, mapActions } from 'vuex';

    export default {
        name: "TheHeader",
        data() {
            return {
                LOGIN,
                userMenu: ["Profile", "Access management", "Logout"],
                tab: '',
                items,
                alert: false,
                messages: {
                    error: '',
                    success: '',
                },
            };
        },
        computed: {
            ...mapGetters('authUser', ['isAuth'])
        },
        methods: {
            ...mapActions('authUser', ['logout']),
            logOut() {
            this.logout()
            .then(() => {
                this.alert = true;
                this.messages.success = 'You are logged out';
            })
            .catch((e) => {
                console.log(e);
            }).finally(() => {
                setTimeout(() => {
                    // this.alert = false;
                    this.messages.success = '';
                    this.messages.error = '';
                }, 3000)
            })
        }
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