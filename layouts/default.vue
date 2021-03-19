<template>
    <v-app
        class="default-layout"
        dark
    >
        <v-main>
            <v-container
                fill-height
                fluid
            >
                <nuxt keep-alive/>
            </v-container>
        </v-main>

        <v-footer
            app
            :fixed="fixed"
        >
            <span>&copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
    </v-app>
</template>

<script>

export default {
    name: 'default-layout',
    // middleware: 'authenticated', TODO fix it after backend integration

    data() {
        return { fixed: false };
    },
};
</script>

<style lang="scss">
.default-layout {
    visibility: visible;
}
</style>
