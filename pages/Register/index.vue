<template>
    <v-container
        class="register-page d-flex justify-center align-center"
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
                    <v-toolbar-title>Create new Pix42 account</v-toolbar-title>
                </v-toolbar>

                <v-card-text>
                    <v-form>
                        <v-text-field
                            v-model="username"
                            label="Login"
                            name="login"
                            prepend-icon="mdi-account"
                            :rules="usernameRule"
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

                        <v-text-field
                            id="repeate-passwird"
                            v-model="passwordConfirm"
                            label="Repeate password"
                            name="passwordConfirm"
                            prepend-icon="mdi-lock"
                            :rules="[passwordConfirmationRule]"
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
                        :disabled="username === '' || password === '' || passwordConfirm === ''"
                        @click="userRegister"
                    >
                        Register
                    </v-btn>
                </v-card-actions>
                <v-card-text class="footer">
                    <p>Already have an account? <a href="/login"> Login Now</a></p>
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
    name: 'register-page',

    components: {
        SocialLogin,
        Snackbar,
    },

    data() {
        return {
            username: '',
            password: '',
            passwordConfirm: '',
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
        ...mapActions({ register: 'login/register' }),

        userRegister() {
            this.register({
                username: this.username,
                password: this.password,
                passwordConfirm: this.passwordConfirm,

            });

            if(this.loginUser) {
                this.$nuxt.$router.replace({ path: '/dashboard' });
            }
        },

        handleKeyDown(e) {
            if(e.code === 'Enter') {
                this.userRegister();
            }
        },
    },
};
</script>
