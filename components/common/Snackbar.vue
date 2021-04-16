<template>
    <v-snackbar
        v-model="show"
        :color="color"
        :timeout="timeout"
        top
    >
        {{ text }}
    </v-snackbar>
</template>

<script>
export default {
    name: 'snackbar',

    props: {
        show: {
            type: Boolean,
            default: false,
        },

        color: {
            type: String,
            default: '',
        },

        text: {
            type: String,
            default: '',
        },

        timeout: {
            type: Number,
            default: 5000,
        },

        method: { type: Function },
    },

    watch: {
        show: function() {
            setTimeout(() => this.method(), this.timeout);
        },
    },
};
</script>
