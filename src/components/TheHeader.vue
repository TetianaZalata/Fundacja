<template>
    <v-app-bar app color="header grey lighten-2" dense>
        <v-slide-group>
            <v-slide-item
                v-for="(item, index) in items"
                :key="`${item.name}-${index}`"
            >
                <v-menu offset-y rounded="0" open-on-hover elevate-on-scroll>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            plain
                            tile
                            v-bind="attrs"
                            v-on="on"
                            @click="noSubmenuItemClick(item)"
                            :class="{
                                'selected-item': currentRouteName === item.item,
                            }"
                        >
                            {{ item.alias }}
                        </v-btn>
                    </template>
                    <v-list v-if="!!item.subitems">
                        <v-list-item
                            v-for="subitem in item.subitems"
                            :key="subitem.alias"
                            :link="true"
                            :class="{
                                'selected-item': $route.name === subitem.route,
                            }"
                        >
                            <a
                                v-if="!!subitem.link"
                                :href="subitem.link"
                                class="router-item"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg-icon
                                    v-if="subitem.icon"
                                    class="ml-3"
                                    :style="{ color: subitem.iconColor }"
                                    type="mdi"
                                    :path="subitem.icon"
                                ></svg-icon>
                                <img
                                    alt="icon"
                                    v-if="subitem.iconFile"
                                    class="ml-3"
                                    :src="subitem.iconFile"
                                    height="24"
                                />
                                <span>{{ subitem.alias }}</span>
                            </a>
                            <router-link
                                class="router-item"
                                v-else
                                :to="{ name: subitem.route }"
                            >
                                <svg-icon
                                    v-if="subitem.icon"
                                    class="ml-3"
                                    :style="{ color: subitem.iconColor }"
                                    type="mdi"
                                    :path="subitem.icon"
                                ></svg-icon>
                                <img
                                    alt="icon"
                                    v-if="subitem.iconFile"
                                    class="ml-3"
                                    :src="subitem.iconFile"
                                    height="24"
                                />
                                <span>{{ subitem.alias }}</span>
                            </router-link>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-slide-item>
        </v-slide-group>
        <v-spacer />
        <v-btn class="login-btn" tile v-if="!isAuth" @click="logIn">
          <span class="desktop">Login</span>
          <svg-icon class="mobile" type="mdi" :path="mdiLogin" :style="{width: '20px', height: '20px'}" />          
        </v-btn>
        <v-btn class="login-btn" tile v-if="isAuth" @click="logOut">
          <span class="desktop">Logout</span>
          <svg-icon class="mobile" type="mdi" :path="mdiLogout" :style="{width: '20px', height: '20px'}" />
        </v-btn>
</v-app-bar>
</template>

<script>
import { LOGIN, KOLO_WOLONTARIATU } from "@/router/routeNames";
import items from "@/helpers/headerMenu";
import { mapGetters, mapActions } from "vuex";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiLogin, mdiLogout } from "@mdi/js";

export default {
    name: "TheHeader",
    components: {
        SvgIcon,
    },
    data() {
        return {
            LOGIN,
            userMenu: ["Profile", "Access management", "Logout"],
            tab: "",
            items,
            mdiLogin,
            mdiLogout
        };
    },
    computed: {
        ...mapGetters("authUser", ["isAuth"]),
        currentRouteName() {
            return this.$route.name.split("-")[0];
        },
    },
    methods: {
        ...mapActions("authUser", ["logout"]),
        logOut() {
            this.logout().catch((e) => {
                console.log(e);
            });
        },
        logIn() {
          this.$router.push({ name: LOGIN });
        },
        noSubmenuItemClick(item) {
            if(!item.subitems) {
                this.$router.push({ name: KOLO_WOLONTARIATU })
            }
        },
    },
};
</script>

<style lang="scss" scoped>
  .main-logo {
      max-height: 54px;
  }

  .selected-item {
      background-color: #cfd8dc;
  }

  .router-item {
      width: 100%;
      height: 100%;
      text-align: start;
      color: black !important;
      text-decoration: none;
      display: flex;
      align-items: center;

      span {
          margin-left: 10px;
      }
  }

  a {
      color: black !important;
      text-decoration: none;
  }

  .header {
    .mobile {
      display: none;
    }

    @media screen and (max-width: 414px) {
      .login-btn {
        min-width: 20px;
        padding: 0 8px;
      }
      .mobile {
        display: block;
      }
      .desktop {
        display: none;
      }

    }
  }
</style>

<style>
  
  @media screen and (max-width: 840px) {
      .v-toolbar__content {
          padding-right: 90px;
      }
  }
  @media screen and (max-width: 414px) {
      .v-toolbar__content {
          padding-right: 45px;
      }
  }
</style>