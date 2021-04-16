<template>
    <v-container
        class="categories-page d-flex justify-center align-center flex-column"
    >
        <h1 class="mb-10">
            Portfolio Categories
        </h1>
        <v-col
            class="d-flex flex-column justify-center align-center"
            cols="8"
        >
            <template v-if="selectedCategories.length == 0">
                <p class="mb-0 pb-0">
                    All portfolio photos go into categories.
                </p>
                <p class="mb-10">
                    Create catgories for your ortfolio and add photos.
                </p>
            </template>

            <template v-else>
                <Draggable
                    v-model="selectedCategories"
                    animation="200"
                    class="categories-page__image-container"
                    draggable=".categories-page__image-container"
                    @end="drag = false"
                    @start="drag = true"
                >
                    <transition-group
                        name="flip-list"
                        type="transition"
                    >
                        <v-flex
                            v-for="category in selectedCategories"
                            :key="category.name"
                            class="categories-page__image-container mb-12"
                        >
                            <h3>
                                {{ category.name }}
                            </h3>
                            <div class="categories-page__image-container-item mb-12">
                                <vue-dropzone
                                    id="drop1"
                                    :options="dropOptions"
                                ></vue-dropzone>
                            </div>
                        </v-flex>
                    </transition-group>
                </Draggable>
            </template>

            <v-btn
                class="tt-up px-15 py-2"
                color="primary"
                elevation="2"
                outlined
                rounded
                text
                @click="showAddCategoryPopup = !showAddCategoryPopup"
            >
                + Add new category
            </v-btn>
        </v-col>

        <AddCategoryPopup
            v-model="showAddCategoryPopup"
            :existedCategories="selectedCategories"
            @addNewCategory="addNewCategory"
        />

        <v-row>
            <v-btn
                class="tt-up mt-10 px-10 py-2 mr-10"
                color="primary"
                depressed
                elevation="2"
                to="/socialAccounts"
            >
                Prevoius
            </v-btn>
            <v-btn
                class="tt-up mt-10 px-10 py-2"
                color="primary"
                depressed
                elevation="2"
                to="/appearance"
            >
                Next
            </v-btn>
        </v-row>

    </v-container>
</template>

<script>
/* eslint-disable import/no-unresolved */
import vueDropzone from 'vue2-dropzone';
import Draggable from 'vuedraggable';

import AddCategoryPopup from '~/components/common/categories/AddCategoryPopup.vue';
import 'vue2-dropzone/dist/vue2Dropzone.min.css';

export default {
    name: 'categories-page',

    components: {
        AddCategoryPopup,
        Draggable,
        vueDropzone,
    },

    data() {
        return {
            showAddCategoryPopup: false,

            selectedCategories: [],
            drag: false,

            dropOptions: {
                url: 'https://httpbin.org/post',
                thumbnailWidth: 200,
                addRemoveLinks: true,
                chunking: true,
                chunkSize: 500, // Bytes
                dictDefaultMessage: 'Drop photos here or <a>click</a> to upload',
            },
        };
    },

    methods: {
        addNewCategory(category) {
            this.selectedCategories.push(category);
        },
    },
};
</script>

<style lang="scss">
    .categories-page {
        height: inherit;

        p {
            font-size: 20px;
            color: #777777;
        }

        &__image-container {
            width: 100%;
            cursor: pointer;

            &-item {
                min-height: 120px;
                border: 2px dashed #777777;
            }
        }
    }
</style>
