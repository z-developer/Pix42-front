<template>
    <v-container
        class="personal-info-page d-flex justify-center align-center flex-column"
    >
        <h1 class="mb-6">
            Personal Details
        </h1>
        <v-col cols="8">
            <v-form
                ref="personalInfoForm"
                v-model="valid"
                class="d-flex flex-column personal-info-page__form"
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
                    :rules="notEmptyValueRule"
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
                    :rules="notEmptyValueRule"
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
                        class="mt-5 personal-info-page__country"
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
                        class="mt-5 mx-4 personal-info-page__country"
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
                        class="mt-5 personal-info-page__country"
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
        </v-col>

        <v-row>
            <v-btn
                class="tt-up mt-10 px-10 py-2 mr-10"
                color="primary"
                depressed
                elevation="2"
                to="/dashboard"
            >
                Prevoius
            </v-btn>

            <v-btn
                class="tt-up mt-10 px-10 py-2"
                color="primary"
                depressed
                :disabled="!valid"
                elevation="2"
                to="/socialAccounts"
                @click="updatePersonalInfo"
            >
                Next
            </v-btn>
        </v-row>

    </v-container>
</template>

<script>
/* eslint-disable import/no-unresolved */
import { UpdatePersonalInfo } from '~/api/DataService';

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

    methods: {
        async updatePersonalInfo() {
            if(this.valid) {
                const data = {
                    name: this.userFullName,
                    title: this.userTitle,
                    about: this.userAbout,
                    email: this.userEmail,
                    phone: this.userPhone,
                    countryId: this.userCountry,
                    state: this.userState,
                    city: this.userCity,
                };

                try {
                    const response = await UpdatePersonalInfo(data);

                    if(response.status == 200 || response.status == 201) {
                        this.sent = true;
                        this.$router.push('/socialAccounts');
                    }
                    else {
                        this.snackShow = true;
                        this.snackText = 'something went wrong';
                        this.snackColor = 'error';
                    }
                }
                catch(e) {
                    console.log(e);
                    this.snackShow = true;
                    this.snackText = 'something went wrong';
                    this.snackColor = 'error';
                }
            }
        },
    },
};
</script>

<style lang="scss">
.personal-info-page {
    &__form {
        width: 100%;
    }

    &__country {
        width: 30%;
    }
}
</style>
