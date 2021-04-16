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
                    <v-form
                        ref="registerForm"
                        v-model="valid"
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
                        :disabled="!valid"
                        @click="register"
                    >
                        Register
                    </v-btn>
                </v-card-actions>
                <v-card-text class="footer">
                    <p>Already have an account? <a href="/login"> Login Now</a></p>
                </v-card-text>
            </v-card>
        </v-col>
        <Snackbar
            :color="snackColor"
            :method="emitSnackbar"
            :show="snackShow"
            :text="snackText"
        />    </v-container>
</template>

<script>
/* eslint-disable import/no-unresolved */
import { Register } from '~/api/DataService';
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

    //add eventListeners to handle login when press 'Enter'

    // created() {
    //     window.addEventListener('keydown', this.handleKeyDown);
    // },

    // destroyed() {
    //     window.removeEventListener('keydown', this.handleKeyDown);
    // },

    methods: {
        async register() {
            this.$refs.registerForm.validate();

            if(this.valid) {
                const data = {
                    email: this.username,
                    password: this.password,
                    name: ' Tatevik',
                    // confirmPassword: this.passwordConfirm,
                };

                try {
                    const response = await Register(data);

                    if(response.status == 200 || response.status == 201) {
                        this.sent = true;
                        this.$router.push('/dashboard');
                    }
                    else {
                        this.snackShow = true;
                        this.snackText = 'something went wrong';
                        this.snackColor = 'error';
                    }
                }
                catch(e) {
                    console.log(e);
                    this.snackShow = true;
                    this.snackText = 'something went wrong';
                    this.snackColor = 'error';
                }
            }
        },

        // handleKeyDown(e) {
        //     if(e.code === 'Enter') {
        //         this.register();
        //     }
        // },
    },
};
</script>
