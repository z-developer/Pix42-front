<template>
    <v-row
        class="add-category-popup"
        justify="center"
    >
        <v-dialog
            v-model="show"
            max-width="800"
            persistent
        >
            <v-card class="text-center pa-12">
                <v-card-title>
                    Select one of this categories
                </v-card-title>
                <v-card-text class="p-10">
                    <v-form
                        ref="addCategoryForm"
                        v-model="valid"
                        class="mt-8 d-flex flex-wrap"
                    >
                        <div
                            v-for="category in categoriesList"
                            :key="category.name"
                            class="add-category-popup__image-container mb-2"
                        >
                            <p
                                :class="{'add-category-popup_selected': category.selected}"
                                @click="handleCategorySelect(category)"
                            >
                                {{ category.name }}
                            </p>
                        </div>

                        <h2
                            class="text-left"
                            :style="{'width': '100%'}"
                        >
                            or specify custom name
                        </h2>
                        <v-text-field
                            ref="userCity"
                            v-model.trim="customName"
                            class="mt-5 add-category-popup__custom-name"
                            dense
                            label="Category name"
                            :maxlength="maximumLength"
                            name="customName"
                            outlined
                            type="text"
                        ></v-text-field>
                    </v-form>
                </v-card-text>

                <v-card-actions class="justify-center">
                    <v-btn
                        class="simple small"
                        color="cancel"
                        text
                        @click="handleCancel"
                    >
                        Cancel
                    </v-btn>

                    <v-btn
                        class="simple small"
                        :disabled="!valid"
                        text
                        @click="addCategory"
                    >
                        Save
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
export default {
    name: 'add-category-popup',

    props: {
        value: {
            type: Boolean,
            default: false,
        },

        addNewCategory: { type: Function },

        existedCategories: {
            type: Array,
            default: () => [],
        },
    },

    data() {
        return {
            customName: '',
            cols: 2,
            selectedCategories: [],

            categoriesList: [
                {
                    name: 'Architecture',
                    selected: false,
                },
                {
                    name: 'Adventure',
                    selected: false,
                },
                {
                    name: 'Neture',
                    selected: false,
                },
                {
                    name: 'Portrait',
                    selected: false,
                },
                {
                    name: 'Abstract',
                    selected: false,
                },
                {
                    name: 'Astriphotog',
                    selected: false,
                },
                {
                    name: 'Commercial',
                    selected: false,
                },
                {
                    name: 'Fashion',
                    selected: false,
                },
                {
                    name: 'Creative',
                    selected: false,
                },
                {
                    name: 'Sports',
                    selected: false,
                },
                {
                    name: 'Drone Photograpy',
                    selected: false,
                },
                {
                    name: 'Event',
                    selected: false,
                },
                {
                    name: 'Family',
                    selected: false,
                },
                {
                    name: 'Food',
                    selected: false,
                },
                {
                    name: 'Lifestyle',
                    selected: false,
                },
                {
                    name: 'Street',
                    selected: false,
                },
                {
                    name: 'Travel',
                    selected: false,
                },

            ],
        };
    },

    computed: {
        show: {
            get() {
                return this.value;
            },

            set(value) {
                this.$emit('input', value);
            },
        },
    },

    watch: {
        show: function(newValue, oldValue) {
            if(oldValue && !newValue) {
                this.$refs.addCategoryForm.reset();
                this.$refs.addCategoryForm.resetValidation();
            }
        },
    },

    methods: {
        addCategory() {
            this.selectedCategories.map(category => {
                if(category.selected) {
                    this.$emit('addNewCategory', category);
                }
            });

            if(this.customName) {
                const category = {
                    name: this.customName,
                    selected: true,
                };

                this.categoriesList.push(category);
                this.$emit('addNewCategory', category);
            }
            this.show = false;
        },

        handleCancel() {
            console.log('existed', this.existedCategories);
            console.log('just selected', this.selectedCategories);
            this.show = false;
        },

        handleCategorySelect(category) {
            category.selected = !category.selected;
            this.selectedCategories.push(category);
        },
    },
};
</script>

<style lang="scss">
    .add-category-popup {
        &__image-container {
            width: 50%;
            cursor: pointer;
        }

        &_selected {
            color: #00ADC3;
        }
    }
</style>
