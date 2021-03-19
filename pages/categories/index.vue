<template>
    <v-container
        class="categories-page d-flex justify-center align-center flex-column"
    >
        <h1 class="mb-10">
            Portfolio Categories
        </h1>

        <template v-if="categoriesList.length == 0">
            <p class="mb-0 pb-0">
                All portfolio photos go into categories.
            </p>
            <p>
                Create catgories for your ortfolio and add photos.
            </p>
        </template>

        <template v-else>
            <v-flex
                v-for="category in categoriesList"
                :key="category"
                class="categories-page-image-container mb-12"
            >
                <h3>
                    {{ category }}
                </h3>
                <div class="categories-page-image-container-item mb-12">
                    <FilePondDemo/>
                </div>
            </v-flex>
        </template>

        <v-btn
            class="tt-up mt-10 px-15 py-2"
            color="primary"
            elevation="2"
            rounded
            text
            @click="showAddCategoryPopup = !showAddCategoryPopup"
        >
            + Add new category
        </v-btn>

        <AddCategoryPopup v-model="showAddCategoryPopup"/>
    </v-container>
</template>

<script>
/* eslint-disable import/no-unresolved */
import AddCategoryPopup from '~/components/common/categories/AddCategoryPopup.vue';
import FilePondDemo from '~/components/common/FilePondDemo.vue';

export default {
    name: 'categories-page',

    components: {
        AddCategoryPopup,
        FilePondDemo,
    },

    data() {
        return {
            showAddCategoryPopup: false,

            categoriesList: [
                'category1',
                'category2',
            ],
        };
    },

    methods: {},
};
</script>

<style lang="scss">
    .categories-page {
        p {
            font-size: 20px;
            color: #777777;
        }

        &-image-container {
            width: 100%;

            &-item {
                min-height: 120px;
                border: 2px dashed #777777;
            }
        }
    }
</style>
