<template>
    <v-snackbar
        v-model="snackbarOpen"
        class="snackbar-component"
        :color="status"
        :timeout="timeout"
        top
    >
        <span>
            {{ text }}
        </span>

        <template v-slot:action="{ attrs }">
            <v-btn
                v-bind="attrs"
                text
                @click="close"
            >
                Close
            </v-btn>
        </template>
    </v-snackbar>
</template>

<script>
import {
    mapState, mapActions,
} from 'vuex';

export default {
    name: 'snackbar-component',

    data() {
        return {
            snackbarOpen: false,
            color: '',
        };
    },

    computed: {
        ...mapState('snackbar', [
            'open',
            'text',
            'status',
            'timeout',
        ]),
    },

    watch: {
        open: {
            immediate: true,

            handler(newVal) {
                this.snackbarOpen = newVal;
            },
        },

        snackbarOpen(newValue) {
            if(!newValue) this.closeSnackbar();
        },
    },

    methods: {
        ...mapActions({ closeSnackbar: 'snackbar/closeSnackbar' }),

        close() {
            this.snackbarOpen = false;
        },
    },
};
</script>
