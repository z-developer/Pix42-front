import Vue from 'vue';

import { SetAuthenticationHeader } from '~/api/DataService.js';

Vue.mixin({
    beforeCreate() {
        SetAuthenticationHeader(localStorage.getItem('auth._token.local'));
    },

    destroyed() {
        const now = Date.now();

        if(
            localStorage.getItem('auth._token_expiration.local') &&
			localStorage.getItem('auth._token_expiration.local') != false &&
			localStorage.getItem('auth._token_expiration.local') > now
        ) {
            console.log();
        }
        else {
            localStorage.removeItem('auth._token.local');
            localStorage.removeItem('auth._token_expiration.local');
            localStorage.removeItem('auth.redirect');
            if(this.$store) this.$store.state.auth.loggedIn = false;

            return false;
        }
    },
});
