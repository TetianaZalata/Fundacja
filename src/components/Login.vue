<template>
    <v-form class="login" app>
        <v-row dense style="width: 100%">
            <v-col class="d-flex justify-center">
                <v-text-field
                    v-model="email"
                    class="field"
                    label="Login"
                    type="email"
                    name="email"
                    :rules="rules"
                    hide-details="auto"
                    :disabled="isAuth"
                />
            </v-col>
        </v-row>
        <v-row dense style="width: 100%">
            <v-col class="d-flex justify-center">
                <v-text-field
                    v-model="password"
                    class="field"
                    label="Password"
                    type="password"
                    :rules="rules"
                    hide-details="auto"
                    :disabled="isAuth"
                />
            </v-col>
        </v-row>
        <v-row v-if="!isAuth">
            <v-col>
                <v-btn
                    tile
                    @click="logIn"
                >
                    login
                </v-btn>
            </v-col>
        </v-row>
        <v-row v-if="isAuth">
            <v-col>
                <v-btn
                    tile
                    @click="logOut"
                >
                    logout
                </v-btn>
            </v-col>
        </v-row>
        <v-alert
            class="notification"
            :value="alert"
            :type="!!messages.error ? 'error' : 'success'"
            transition="scale-transition"
        >
            {{ messages.error ? messages.error : messages.success }}
        </v-alert>
    </v-form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    data() {
        return {
            email: '',
            password: '',
            rules: [
                value => !!value || 'Required',
                value => value.length > 3 || 'Must be more then 3',
            ],
            alert: false,
            messages: {
                error: '',
                success: '',
            },
        }
    },
    watch: {
        isAuth(newVal) {
            if(newVal) {
                this.clearAll();
            }
        },
    },
    created() {
        window.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.logIn();
            }
        })
    },
    computed: {
        ...mapGetters('authUser', ['isAuth']),
    },
    methods: {
        ...mapActions('authUser', ['login', 'logout']),
        logIn() {
            this.login({email: this.email, password: this.password})
            .then(() => {
                this.alert = true;
                this.messages.success = 'You are logged in';
            }).catch((error) => {
                this.alert = true;
                if(error.code === 'auth/invalid-email') {
                    this.messages.error = 'Invalid email';
                }
                if(error.code === 'auth/wrong-password') {
                    this.messages.error = 'Wrong password';
                }
            }).finally(() => {
                setTimeout(() => {
                    this.alert = false;
                }, 3000)
            })
        },
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
                    this.alert = false;
                }, 3000)
            })
        },
        clearAll() {
            this.email = '';
            this.password = '';
            this.messages.success = '';
            this.messages.error = '';
        }
    }
}
</script>

<style lang="scss" scoped>
    .login {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .field {
            max-width: 400px;
        }
    }
</style>