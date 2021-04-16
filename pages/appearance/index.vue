<template>
    <v-container
        class="appearance-page d-flex justify-center align-center flex-column"
    >
        <h1 class="mb-12">
            Choose theme and styles
        </h1>
        <v-form
            ref="personalInfoForm"
            v-model="valid"
            class="d-flex flex-column personal-info-page__form"
        >
            <h3>
                Add your logo and Site name
            </h3>
            <v-row class="my-6 flex-column flex-sm-row align-center appearance-page__names">
                <ImageUploader
                    :src="image"
                    @fileDeleted="deleteImage"
                    @fileUploaded="setUploadedImage"
                />
                <v-col class="p0 mt-12 mt-sm-0">
                    <v-text-field
                        ref="name"
                        v-model.trim="name"
                        class="mt-0 appearance-page__name"
                        dense
                        label="Site name"
                        name="name"
                        outlined
                        required
                        :rules="notEmptyValueRule"
                        type="text"
                    ></v-text-field>
                    <v-text-field
                        ref="subDomain"
                        v-model.trim="subDomain"
                        class="mt-5 appearance-page__name"
                        dense
                        label="Subdomain"
                        name="subDomain"
                        outlined
                        required
                        :rules="subDomainRule"
                        type="text"
                    ></v-text-field>
                </v-col>
            </v-row>

            <h3 class="mt-12 mb-6">
                Select your theme
            </h3>
            <v-fade-transition mode="out-in">
                <v-row class="flex-column flex-sm-row align-center">
                    <v-col
                        v-for="n in 3"
                        :key="n"
                        class="d-flex appearance-page__theme justify-center"
                        :class="{ 'appearance-page__theme_selected': n === selectedTheme}"
                    >
                        <v-card
                            hover
                            ripple
                            @click="handleSelect('theme', n)"
                        >
                            <img
                                class="grey darken-4"
                                height="125"
                                :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                            />
                            <v-card-title class="title">
                                Theme {{ n }}
                            </v-card-title>
                        </v-card>
                    </v-col>
                </v-row>
            </v-fade-transition>

            <h3 class="mt-12 mb-6">
                Select your palette
            </h3>
            <v-fade-transition mode="out-in">
                <v-row class="flex-column flex-sm-row align-center mb-12">
                    <v-col
                        v-for="n in 3"
                        :key="n"
                        class="d-flex appearance-page__theme justify-center"
                        :class="{ 'appearance-page__theme_selected': n === selectedColors}"
                    >
                        <v-card
                            hover
                            ripple
                            @click="handleSelect('color', n)"
                        >
                            <img
                                class="grey darken-4"
                                height="125"
                                :src="require(`@/assets/images/palette${n}.png`)"
                            />
                            <v-card-title class="title">
                                Palette {{ n }}
                            </v-card-title>
                        </v-card>
                    </v-col>
                </v-row>
            </v-fade-transition>
        </v-form>
        <v-row>
            <v-btn
                class="tt-up mt-10 px-10 py-2 mr-10"
                color="primary"
                depressed
                elevation="2"
                to="/categories"
            >
                Prevoius
            </v-btn>
            <v-btn
                class="tt-up mt-10 px-10 py-2"
                color="primary"
                depressed
                :disabled="!valid"
                elevation="2"
                to="/"
            >
                Publish
            </v-btn>
        </v-row>
    </v-container>
</template>

<script>
import ImageUploader from '~/components/common/ImageUploader';

export default {
    name: 'appearance-page',

    components: { ImageUploader },

    data() {
        return {
            image: '',
            name: '',
            subDomain: '',
            selectedTheme: null,
            selectedColors: null,
        };
    },

    methods: {
        setUploadedImage(result) {
            this.image = result;
        },

        deleteImage() {
            this.image = '';
        },

        handleSelect(type, n) {
            if(type === 'theme') {
                this.selectedTheme = n;
            }
            else {
                this.selectedColors = n;
            }
        },
    },
};
</script>

<style lang="scss">
    .appearance-page {
        &__theme {
            height: 210px;

            &_selected {
                outline: 3px solid $color-primary;
                transition: all .1s ease;
            }
        }
    }

    @media screen and (max-width: 576px) {
        .appearance-page {
            &__names {
                width: 90vw;
            }
        }
    }
</style>
