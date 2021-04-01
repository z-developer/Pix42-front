import colors from 'vuetify/es5/util/colors';

export default {
    mode: 'spa',

    /*
    ** Headers of the page
    */
    head: {
        titleTemplate: '%s - ' + process.env.npm_package_name,
        title: process.env.npm_package_name || '',

        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || '',
            },
        ],

        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico',
            },
            {
                rel: 'stylesheet',
                href: 'https://unicons.iconscout.com/release/v2.1.8/css/unicons.css',
            },
        ],
    },

    lintOnSave: process.env.NODE_ENV !== 'production',
    productionSourceMap: false,

    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },

    /*
    ** Global CSS
    */
    css: [],

    styleResources: {
        scss: [
            '~/assets/scss/colors.scss',
            '~assets/scss/animations.scss',
        ],
    },

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        { src: '~/plugins/mixins/validation.js' },
        { src: '~/plugins/mixins/common.js' },
    ],

    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
        '@nuxtjs/vuetify',
        '@nuxtjs/stylelint-module',
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
    /*
    ** axios usage documentation
    ** https://axios.nuxt.orh/usage
    */
        '@nuxtjs/axios',
        '@nuxtjs/auth',
    ],

    /*
    ** vuetify module configuration
    ** https://github.com/nuxt-community/vuetify-module
    */
    vuetify: {
        customVariables: [ '~/assets/scss/variables.scss' ],

        theme: {
            dark: false,

            themes: {
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3,
                },
            },
        },
    },

    env: { baseURL: process.env.API_URL },

    axios: { baseURL: process.env.API_URL },

    auth: {
        strategies: {
            local: {
                token: { property: 'token' },

                user: false,

                endpoints: {
                    login: {
                        url: '/Account/login',
                        method: 'post',
                    },

                    logout: {
                        url: '/Account/logout',
                        method: 'post',
                    },

                    user: {
                        url: '/Account/me',
                        method: 'get',
                        propertyName: false,
                    },
                },

                tokenRequired: true,
                tokenName: 'Authorization',
                tokenType: 'Bearer',
            },

            redirect: {
                login: '/login',
                logout: '/login',
                home: '/',
            },

            watchLoggedIn: true,
        },

        router: { middleware: [ 'auth' ] },
    },

    /*
    ** Build configuration
    */
    build: {},
};
