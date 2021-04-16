<template>
    <v-container
        class="social-accounts-page d-flex justify-center align-center flex-column"
    >
        <h1 class="mb-6">
            Social Accounts
        </h1>
        <v-col
            cols="6"
        >
            <v-form
                ref="socialAccountsForm"
                v-model="valid"
                class="d-flex flex-column social-accounts-page__form"
            >
                <v-text-field
                    ref="instagram"
                    v-model.trim="instagram"
                    class="mt-5 social-accounts-page__data"
                    dense
                    label="Instagram"
                    name="instagram"
                    outlined
                    required
                    type="text"
                ></v-text-field>

                <v-text-field
                    ref="facebook"
                    v-model.trim="facebook"
                    class="mt-5 social-accounts-page__data"
                    dense
                    label="Facebook"
                    name="facebook"
                    outlined
                    required
                    type="text"
                ></v-text-field>

                <v-text-field
                    ref="twitter"
                    v-model.trim="twitter"
                    class="mt-5 social-accounts-page__data"
                    dense
                    label="Twitter"
                    name="twitter"
                    outlined
                    required
                    type="text"
                ></v-text-field>

                <v-text-field
                    ref="pinterest"
                    v-model.trim="pinterest"
                    class="mt-5 social-accounts-page__data"
                    dense
                    label="Pinterest"
                    name="pinterest"
                    outlined
                    required
                    type="text"
                ></v-text-field>

                <v-text-field
                    ref="behance"
                    v-model.trim="behance"
                    class="mt-5 social-accounts-page__data"
                    dense
                    label="Behance"
                    name="behance"
                    outlined
                    required
                    type="text"
                ></v-text-field>

                <v-text-field
                    ref="px500"
                    v-model.trim="px500"
                    class="mt-5 social-accounts-page__data"
                    dense
                    label="500px"
                    name="px500"
                    outlined
                    required
                    type="text"
                ></v-text-field>

                <v-text-field
                    ref="shutterstock"
                    v-model.trim="shutterstock"
                    class="mt-5 social-accounts-page__data"
                    dense
                    label="Shutterstock"
                    name="shutterstock"
                    outlined
                    required
                    type="text"
                ></v-text-field>
            </v-form>
        </v-col>

        <v-row>
            <v-btn
                class="tt-up mt-10 px-10 py-2 mr-10"
                color="primary"
                depressed
                elevation="2"
                to="/personalInfo"
            >
                Prevoius
            </v-btn>
            <v-btn
                class="tt-up mt-10 px-10 py-2"
                color="primary"
                depressed
                :disabled="!valid"
                elevation="2"
                to="/categories"
            >
                Next
            </v-btn>
        </v-row>

    </v-container>
</template>

<script>
/* eslint-disable import/no-unresolved */

export default {
    name: 'social-accounts-page',

    components: { },

    data() {
        return {
            instagram: '',
            facebook: '',
            userAbout: '',
            twitter: '',
            pinterest: '',
            behance: '',
            px500: '',
            shutterstock: '',
        };
    },
};
</script>

<style lang="scss">
.social-accounts-page {
    &__form {
        width: 100%;

        // &-data {
        //     width: 100%;
        // }
    }
}
</style>
