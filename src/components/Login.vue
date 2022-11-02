<template>
    <v-form class="login" app>
        <v-row dense>
            <v-col>
                <v-text-field
                    v-model="email"
                    class="field"
                    label="Login"
                    type="email"
                    :rules="rules"
                    hide-details="auto"
                />
            </v-col>
        </v-row>
        <v-row dense>
            <v-col>
                <v-text-field
                    v-model="password"
                    class="field"
                    label="Password"
                    type="password"
                    :rules="rules"
                    hide-details="auto"
                />
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-btn
                    v-if="!auth.currentUser"
                    @click="login"
                >
                    login
                </v-btn>
                <v-btn
                    v-else
                    @click="logout">
                    logout
                </v-btn>
            </v-col>
        </v-row>
    </v-form>
</template>

<script>

import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '@/firebase/firebase';

export default {
    data: () => ({
        auth,
        email: '',
        password: '',
        rules: [
            value => !!value || 'Required',
            value => value.length > 3 || 'Must be more then 3',
        ],
    }),
    async mounted() {
        console.log(auth.currentUser)
    },
    methods: {
        login() {
            signInWithEmailAndPassword(this.auth, this.email, this.password)
            .then((res) => {
                console.log(res)
            })
        },
        logout() {
            signOut(this.auth)
            .then(() => {
                this.email = '';
                this.password = '';
            })
            .catch((e) => {
                console.log(e)
            })
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