<template>
    <v-container
        class="personal-info-page d-flex justify-center align-center flex-column"
    >
        <h1 class="mb-6">
            Personal Details
        </h1>
        <v-form
            ref="personalInfoForm"
            v-model="valid"
            class="d-flex flex-column"
        >
            <v-text-field
                ref="userFullName"
                v-model.trim="userFullName"
                class="mt-5"
                dense
                label="Name"
                :maxlength="maximumLength"
                name="userFullName"
                outlined
                required
                :rules="nameRule"
                type="text"
            ></v-text-field>

            <v-text-field
                ref="userTitle"
                v-model.trim="userTitle"
                class="mt-5"
                dense
                label="Title"
                name="userTitle"
                outlined
                required
                :rules="nameRule"
                type="text"
            ></v-text-field>

            <v-textarea
                ref="userAbout"
                v-model.trim="userAbout"
                class="mt-5"
                label="About"
                name="userAbout"
                outlined
            ></v-textarea>

            <v-text-field
                ref="userEmail"
                v-model.trim="userEmail"
                class="mt-5"
                dense
                label="Email"
                :maxlength="maximumLength"
                name="userEmail"
                outlined
                required
                :rules="emailRule"
                type="text"
            ></v-text-field>

            <v-text-field
                ref="userPhone"
                v-model.trim="userPhone"
                class="mt-5"
                dense
                label="Phone"
                :maxlength="maximumLength"
                name="userPhone"
                outlined
                required
                :rules="phoneRule"
                type="text"
            ></v-text-field>

            <v-row class="mx-0">
                <v-select
                    v-model="userCountry"
                    class="mt-5 personal-info-page-country"
                    dense
                    item-text="name"
                    item-value="name"
                    :items="countries"
                    label="Select Country"
                    outlined
                    required
                    :rules="notEmptySelectRule"
                ></v-select>

                <v-text-field
                    ref="userState"
                    v-model.trim="userState"
                    class="mt-5 mx-4 personal-info-page-country"
                    dense
                    label="State/Region"
                    :maxlength="maximumLength"
                    name="userState"
                    outlined
                    required
                    :rules="notEmptySelectRule"
                    type="text"
                ></v-text-field>

                <v-text-field
                    ref="userCity"
                    v-model.trim="userCity"
                    class="mt-5 personal-info-page-country"
                    dense
                    label="City or Town"
                    :maxlength="maximumLength"
                    name="userCity"
                    outlined
                    required
                    :rules="notEmptySelectRule"
                    type="text"
                ></v-text-field>
            </v-row>
        </v-form>

        <v-btn
            class="tt-up mt-10 px-10 py-2"
            color="primary"
            :disabled="!valid"
            elevation="2"
            rounded
            text
            to="/socialAccounts"
        >
            Let's GO >
        </v-btn>
    </v-container>
</template>

<script>
/* eslint-disable import/no-unresolved */

export default {
    name: 'personal-info-page',

    components: { },

    data() {
        return {
            userFullName: '',
            userTitle: '',
            userAbout: '',
            userEmail: '',
            userPhone: '',
            userCountry: '',
            userState: '',
            userCity: '',

            countries: [
                {
                    name: 'Armenia',
                    id: 1,
                },
                {
                    name: 'United States',
                    id: 2,
                },
                {
                    name: 'Canada',
                    id: 3,
                },
            ],
        };
    },

};
</script>

<style lang="scss">
.personal-info-page {
    &-country {
        width: 30%;
    }
}
</style>
