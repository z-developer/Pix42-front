<template>
    <div id="file-uploader">
        <file-pond
            ref="pond"
            accepted-file-types="image/jpeg, image/png"
            :allow-multiple="true"
            :files="myFiles"
            label-idle="Drop files here or <span class='filepond--label-action'>Browse</span>"
            name="test"
            server="/api"
            @init="handleFilePondInit"
        />
    </div>
</template>

<script>
/* eslint-disable */
// Import Vue FilePond
import vueFilePond from 'vue-filepond';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';

// Import FilePond plugins
// Please note that you need to install these plugins separately

// Import image preview plugin styles
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';

// Import image preview and file type validation plugins
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

// Create component
const FilePond = vueFilePond(
    FilePondPluginFileValidateType,
    FilePondPluginImagePreview,
);

export default {
    name: 'app',

    components: { FilePond },

    data: function() {
        return { myFiles: [ ] };
    },

    methods: {
        handleFilePondInit: function() {
            console.log('FilePond has initialized');

            // FilePond instance methods are available on `this.$refs.pond`
        },
    },
};
</script>

<style lang="scss">
    .file-uploader {
        .filepond--wrapper {
            .filepond--root {
                .filepond--list-scroller {
                    .filepond--list {
                        width: 97% !important;
                    }
                }

                a {
                    display: none;
                }
            }
        }
    }
</style>
