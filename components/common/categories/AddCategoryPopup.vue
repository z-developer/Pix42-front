<template>
    <v-row justify="center">
        <v-dialog
            v-model="show"
            max-width="330"
            persistent
        >
            <v-card class="text-center">
                <v-card-text class="pl-10 pr-10">
                    <v-form
                        ref="addCategoryForm"
                        v-model="valid"
                        class="mt-8"
                    >
                        <v-text-field
                            v-model.trim="customName"
                            label="or specify custom name"
                            :maxlength="maximumLength"
                            name="customName"
                            :rules="notEmptyRule"
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
                        @click="addCategory(name, id)"
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
    props: {
        value: {
            type: Boolean,
            default: false,
        },
    },

    data() {
        return {};
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
                this.$refs.userForm.reset();
                this.$refs.userForm.resetValidation();
            }
        },
    },

    methods: {
        addCategory(name, id) {
            console.log('here', name, id);
        },
    },
};
</script>
