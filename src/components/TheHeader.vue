<template>
    <v-app-bar app color="#1A237E" dense>
        <v-menu
            v-for="(item, index) in items"
            class="top-menu"
            :key="`${item.name}-${index}`"
            offset-y
            rounded="0"
            open-on-hover
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    plain
                    tile
                    v-bind="attrs"
                    v-on="on"
                    color="white"
                    :class="{ 'selected-item' : currentRouteName === item.item }"
                >
                    <router-link :to="{ name: item.route }">
                        {{ item.alias }}
                    </router-link>
                </v-btn>
            </template>
            <v-list v-if="!!item.subitems">
                <v-list-item
                    v-for="subitem in item.subitems"
                    :key="subitem.alias"
                    :link="true"
                    :class="{ 'selected-item' : $route.name === subitem.route }"
                    @click="$router.push({ name: subitem.route })"
                >
                    <a
                        v-if="!!subitem.link"
                        :href="subitem.link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {{ subitem.alias }}
                        <svg-icon v-if="subitem.icon" class="ml-3" :style="{color: subitem.iconColor}" type="mdi" :path="subitem.icon"></svg-icon>
                        <img v-if="subitem.iconFile" class="ml-3" :src="subitem.iconFile" height="24">
                    </a>
                    <router-link
                        v-else
                        :to="{ name: subitem.route }"
                    >
                        {{ subitem.alias }}
                    </router-link>
                </v-list-item>
            </v-list>
        </v-menu>
        
        <v-spacer />

        <router-link
            v-if="!isAuth"
            :to="{ name: LOGIN }"
        >Login</router-link>

        <v-btn
            tile
            v-if="isAuth"
            @click="logOut"
            color="#283593"
        >Logout</v-btn>
    </v-app-bar>
</template>

<script>
    import { LOGIN } from '@/router/routeNames';
    import items from '@/helpers/headerMenu';
    import { mapGetters, mapActions } from 'vuex';
    import SvgIcon from '@jamescoyle/vue-icon';

    export default {
        name: "TheHeader",
        components :{
            SvgIcon,
        },
        data() {
            return {
                LOGIN,
                userMenu: ["Profile", "Access management", "Logout"],
                tab: '',
                items,
            };
        },
        computed: {
            ...mapGetters('authUser', ['isAuth']),
            currentRouteName() {
                return this.$route.name.split('-')[0];
            },
        },
        methods: {
            ...mapActions('authUser', ['logout']),
            logOut() {
            this.logout()
            .catch((e) => {
                console.log(e);
            })
        }
        },
};
</script>

<style lang="scss" scoped>
    a {
        color: #E8EAF6 !important;
        text-decoration: none;
    }

    .main-logo {
        max-height: 54px;
    }

    .selected-item {
        background-color: #283593;
    }

    .v-list {
      color: #E8EAF6 !important;
      background-color: #1A237E;
    }

</style>