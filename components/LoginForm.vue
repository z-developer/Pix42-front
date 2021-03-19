<template>
    <v-row
        align="center"
        class="login-form-component"
        justify="center"
    >
        <v-col
            cols="12"
            md="4"
            sm="8"
        >
            <v-card class="elevation-12">
                <v-toolbar
                    color="primary"
                    dark
                    flat
                >
                    <v-toolbar-title>Login to Dashboard</v-toolbar-title>
                </v-toolbar>

                <v-card-text>
                    <v-form>
                        <v-text-field
                            v-model="username"
                            label="Login"
                            name="login"
                            prepend-icon="mdi-account"
                            :rules="rules"
                            type="text"
                        />

                        <v-text-field
                            id="password"
                            v-model="password"
                            label="Password"
                            name="password"
                            prepend-icon="mdi-lock"
                            :rules="rules"
                            type="password"
                        />
                    </v-form>
                </v-card-text>

                <v-card-actions>
                    <v-spacer/>

                    <v-btn
                        color="primary"
                        :disabled="username === '' || password === ''"
                        @click="userLogin"
                    >
                        Login
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
        <div class="login-choice">
            <span>or Sign In with</span>
        </div>
        <SocialLogin/>
        </div>
        <div class="footer">
            <p>Don't have an account? <a href="/register"> Create one now</a></p>
        </div>
    </v-row>
</template>

<script>
import {
    mapActions, mapState,
} from 'vuex';

export default {
    name: 'login-form-component',

    data() {
        return {
            username: '',
            password: '',
            rules: [ value => !!value || 'this field is required' ],
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
