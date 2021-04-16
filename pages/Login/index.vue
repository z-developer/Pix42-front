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
                    <v-form
                        ref="loginForm"
                        v-model="valid"
                        @keyup.native.enter="login($event)"
                        @submit.prevent
                    >
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
                        @click="login"
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

import Snackbar from '~/components/common/Snackbar';
import SocialLogin from '~/components/SocialLogin';

export default {
    name: 'login-page',
    auth: false,

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

    //add eventListeners to handle login when press 'Enter'

    created() {
        window.addEventListener('keydown', this.handleKeyDown);
    },

    destroyed() {
        window.removeEventListener('keydown', this.handleKeyDown);
    },

    methods: {
        async login() {
            this.$refs.loginForm.validate();

            if(this.valid) {
                try {
                    let response = await this.$auth.loginWith('local', {
                        data: {
                            email: this.username,
                            password: this.password,
                        },
                    });

                    console.log('resp', response);

                    if(response.status == 200 || response.status == 201) {
                        this.$store.state.auth.loggedIn = true;

                        this.$router.push('/dashboard');
                    }
                }
                catch(e) {
                    if(e.response && e.response.data.message)
                        this.message = e.response.data.message;
                    else this.message = 'error when try to login';
                }
            }
        },

        handleKeyDown(e) {
            if(e.code === 'Enter') {
                this.login();
            }
        },
    },
};
</script>
