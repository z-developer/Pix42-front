import Vue from 'vue';
import { mapGetters } from 'vuex';

import Snackbar from '~/components/common/Snackbar';

Vue.mixin({
    components: { Snackbar },

    data() {
        return {
            snackShow: false,
            snackText: '',
            snackColor: '',
            snackTimeout: 5000,
        };
    },

    computed: { ...mapGetters([ 'loggedInUser' ]) },

    methods: {
        emitSnackbar() {
            this.snackShow = false;
        },
    },
});
