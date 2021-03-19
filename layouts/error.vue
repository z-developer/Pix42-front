<template>
    <v-app>
        <v-layout>
            <v-flex
                class="error-layout"
                justify-center
                text-center
                xs12
            >
                <div class="error-layout__text">
                    We're sorry :(
                </div>
                <v-btn
                    color="primary"
                    to="/"
                >
                    Erroor
                </v-btn>
            </v-flex>
        </v-layout>
    </v-app>
</template>

<script>
export default {
    layout: 'notAuthenticated',

    components: { },

    props: {
        error: {
            type: Object,
            default: null,
        },
    },

    data() {
        return { };
    },
};
</script>
