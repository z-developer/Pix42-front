<template>
    <v-row
        class="add-category-popup"
        justify="center"
    >
        <v-dialog
            v-model="show"
            max-width="330"
        >
            <v-card class="text-center">
                <v-card-title>
                    Select one of this categories
                </v-card-title>
                <v-card-text class="p-10">
                    <v-form
                        ref="addCategoryForm"
                        v-model="valid"
                        class="mt-8"
                    >
                        <h2 class="text-left">
                            or specify custom name
                        </h2>
                        <v-text-field
                            ref="userCity"
                            v-model.trim="customName"
                            class="mt-5 add-category-popup-custom-name"
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
                        @click="show = false"
                    >
                        Cancel
                    </v-btn>

                    <v-btn
                        class="simple small"
                        :disabled="!valid"
                        text
                        @click="addCategory(id)"
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
    },

    data() {
        return {
            customName: '',
            selectedCategories: [],
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
        addCategory(id) {
            console.log('here', this.customName, id);
        },
    },
};
</script>
