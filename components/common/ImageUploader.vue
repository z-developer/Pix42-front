<template>
    <v-layout>
        <v-flex class="image-uploader-component text-center">
            <div class="image-uploader-component__avatar">
                <div
                    v-show="showAttachButton || showUploadingState"
                    class="image-uploader-component__avatar-default"
                >
                    <img :src="require(`@/assets/images/default_logo.png`)"/>

                </div>
                <div
                    v-show="showSuccessState"
                    class="image-uploader-component__avatar-uploaded"
                >
                    <img :src="image"/>
                </div>

                <v-progress-circular
                    v-show="showAttachButton || showUploadingState"
                    class="image-uploader-component__avatar-uploading"
                    color="primary"
                    :rotate="-90"
                    :size="142"
                    :value="percent"
                    :width="1"
                ></v-progress-circular>

                <v-btn
                    class="image-uploader-component__avatar-btn"
                    fab
                    height="36"
                    width="36"
                    @click="attachFile"
                >
                    <v-icon color="primary">
                        uil-camera
                    </v-icon>
                </v-btn>

                <input
                    v-show="false"
                    ref="inputUpload"
                    accept=".png, .jpg"
                    type="file"
                    @change="onFilePicked"
                />
            </div>

            <div
                v-show="showErrorState"
                class="mt-6 error-message"
            >
                {{ errorMsg }}
            </div>

            <v-btn
                v-show="showSuccessState"
                class="simple small my-4"
                color="error"
                rounded
                text
                @click="clearImage"
            >
                <v-icon>uil-trash</v-icon>
                <span>Delete Image</span>
            </v-btn>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    name: 'image-uploader-component',

    components: { },

    props: {
        src: {
            type: String,
            required: false,
            default: '',
        },

        type: {
            type: String,
            default: 'user',
        },
    },

    data() {
        return {
            image: '',
            errorMsg: 'something went wrong',
            showAttachButton: true,
            showUploadingState: false,
            showSuccessState: false,
            showErrorState: false,
            uploadedFile: {},
            reader: {},
            interval: {},
            percent: 0,
            timeout: 0,
        };
    },

    mounted() {
        if(this.src != '') this.setImage(this.src);
    },

    beforeDestroy() {
        clearInterval(this.interval);
    },

    methods: {
        attachFile() {
            this.$refs.inputUpload.click();
        },

        delay() {
            this.timeout = 1000;
            this.interval = setInterval(() => {
                if(this.percent === 100) {
                    this.showUploadingState = false;
                    this.showSuccessState = true;
                    this.percent = 0;
                    clearInterval(this.interval);

                    return;
                }
                this.percent += 20;
            }, this.timeout);
        },

        clearImage() {
            this.showUploadingState = false;
            this.showAttachButton = true;
            this.showSuccessState = false;
            this.showErrorState = false;
            this.$emit('fileDeleted');
            this.image = '';
        },

        setImage(src) {
            this.showUploadingState = false;
            this.showAttachButton = false;
            this.showSuccessState = true;
            this.showErrorState = false;
            this.image = src;
        },

        async onFilePicked($event) {
            // const instance = this;

            this.uploadedFile = $event.target.files[0];

            if(
                this.uploadedFile.type !== 'image/png' &&
                this.uploadedFile.type !== 'image/jpg' &&
                this.uploadedFile.type !== 'image/jpeg'
            ) {
                this.showUploadingState = false;
                this.showAttachButton = true;
                this.showSuccessState = false;
                this.showErrorState = true;

                this.fileName = this.uploadedFile.name;
                this.errorMsg = 'wrong file format';
                this.$refs.inputUpload.value = null;
            }
            else {
                if(this.uploadedFile.size > this.maximumImageSize) {
                    this.showUploadingState = false;
                    this.showAttachButton = true;
                    this.showSuccessState = false;
                    this.showErrorState = true;

                    this.fileName = this.uploadedFile.name;
                    this.errorMsg =
            'Maximum image size is ' +
            this.maximumImageSize / (1024 * 1024) +
            'mb.';
                    this.$refs.inputUpload.value = null;
                }
                else {
                    this.showUploadingState = true;
                    this.showAttachButton = false;
                    this.showSuccessState = false;
                    this.showErrorState = false;
                    await this.getBase64(this.uploadedFile);
                    this.delay();
                    this.$refs.inputUpload.value = null;
                }
            }
        },

        async getBase64(file) {
            const vm = this;

            let reader = new FileReader();

            reader.readAsDataURL(file);

            reader.onload = function() {
                vm.image = reader.result;
                vm.$emit('fileUploaded', reader.result);
            };

            reader.onerror = function(error) {
                console.log('Error:', error);
            };
        },
    },
};
</script>

<style lang="scss" scoped>
.image-uploader-component {
    &__avatar {
        position: relative;
        width: 122px;
        margin: 0 auto;

        &-default {
            height: 122px;

            img {
                width: 110px;
                height: 90px;
                margin-top: 16px;
            }
        }

        &-uploading {
            position: absolute;
            top: -10px;
            left: -10px;
            color: #1976D2;
        }

        &-uploaded {
            width: 122px;
            height: 122px;
            overflow: hidden;
            border-radius: 100%;

            img {
                position: relative;
                top: 50%;
                left: 50%;
                width: 100%;
                height: 100%;
                transform: translate(-50%, -50%);
                object-fit: cover;
            }
        }

        &-btn {
            position: absolute;
            right: 0;
            bottom: 0;

            i {
                margin: 0;
            }
        }
    }
}

.error-message {
    font-size: 14px;
    color: #F5005E;
}
</style>
