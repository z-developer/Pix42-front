<template>
    <v-container
        class="login-page d-flex justify-center align-center"
    >
        <v-col
            cols="12"
            lg="6"
            md="6"
            xl="4"
        >
            <v-card class="elevation-12">
                <v-toolbar
                    dark
                    flat
                >
                    <v-toolbar-title>Login to your Pix42 account</v-toolbar-title>
                </v-toolbar>

                <v-card-text>
                    <v-form v-model="valid">
                        <v-text-field
                            v-model="username"
                            label="Login"
                            name="login"
                            prepend-icon="mdi-account"
                            :rules="emailRule"
                            type="text"
                        />

                        <v-text-field
                            id="password"
                            v-model="password"
                            label="Password"
                            name="password"
                            prepend-icon="mdi-lock"
                            :rules="passwordRule"
                            type="password"
                        />
                    </v-form>
                </v-card-text>

                <v-card-actions>
                    <v-card-text>

                        <SocialLogin/>
                    </v-card-text>
                    <v-spacer/>

                    <v-btn
                        color="primary"
                        :disabled="!valid"
                        @click="userLogin"
                    >
                        Login
                    </v-btn>
                </v-card-actions>
                <v-card-text class="footer">
                    <p>Don't have an account? <a href="/register"> Create one now</a></p>
                </v-card-text>
            </v-card>
        </v-col>
        <Snackbar/>
    </v-container>
</template>

<script>
/* eslint-disable import/no-unresolved */

import {
    mapActions, mapState,
} from 'vuex';

import Snackbar from '~/components/common/Snackbar';
import SocialLogin from '~/components/SocialLogin';

export default {
    name: 'login-page',

    components: {
        SocialLogin,
        Snackbar,
    },

    data() {
        return {
            username: '',
            password: '',
        };
    },

    computed: { ...mapState('login', [ 'loginUser' ]) },

    //add eventListeners to handle login when press 'Enter'

    created() {
        window.addEventListener('keydown', this.handleKeyDown);
    },

    destroyed() {
        window.removeEventListener('keydown', this.handleKeyDown);
    },

    methods: {
        ...mapActions({ login: 'login/login' }),

        userLogin() {
            this.login({
                username: this.username,
                password: this.password,
            });

            if(this.loginUser) {
                this.$nuxt.$router.replace({ path: '/dashboard' });
            }
        },

        handleKeyDown(e) {
            if(e.code === 'Enter') {
                this.userLogin();
            }
        },
    },
};
</script>
