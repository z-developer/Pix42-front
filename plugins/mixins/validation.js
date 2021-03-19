import Vue from 'vue';

const MAX_LENGTH = 50;

Vue.mixin({
    data() {
        return {
            valid: false,
            maximumLength: MAX_LENGTH,
            shortNameLength: 20,
            maximumImageSize: 2097152,
            strLength: 255,
            commonRule: [ value => !!value || 'Invalid data' ],

            urlRule: [
                value => !!value || 'Invalid URL',
                value => {
                    const pattern = /^(ftp|http|https|ggg|www):\/\/[\w.\-\/]+$/;

                    return pattern.test(value) || 'Invalid URL';
                },
            ],

            urlBasicRule: [
                value => !!value || 'Invalid URL',
                value => {
                    const pattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

                    return pattern.test(value) || 'Invalid URL';
                },
            ],

            dropdownRule: [ value => !!value || 'This field can not be empty' ],

            emailRule: [
                value => !!value || 'email validation hint',
                value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                    return pattern.test(value) || 'email validation error';
                },
            ],

            usernameRule: [
                value => !!value || 'username can not be emty',
                value => {
                    const pattern = /^(?:[A-Za-z0-9]{3,50})$/;

                    return (
                        pattern.test(value) ||
						'username can not be emty'
                    );
                },
            ],

            nameRule: [
                value => !!value || 'name can not be emty',
                value => {
                    const pattern = /^(?:[A-Za-z]{3,50})$/;

                    return pattern.test(value) || 'name can not be emty';
                },
            ],

            notEmptySelectRule: [
                value => !!value || 'This field can not be empty',
                value => {
                    const pattern = /^[^\s]+(\s+[^\s]*)*$/;

                    return pattern.test(value) || 'Too many spaces';
                },
            ],

            notEmptyValueRule: [ value => !!value || 'This field can not be empty' ],

            strongPasswordRule: [
                value => !!value || 'Password should contain 8 characters numbers and etc',
                value => {
                    const pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$!%?&])[A-Za-z\d@#$!%?&]{8,}$/;

                    return pattern.test(value) || 'password is wrong';
                },
            ],

            passwordRule: [
                value => !!value || 'password can not be empty',
                value => {
                    const pattern = /^(?=.*[a-z])(?=.*[0-9])/;

                    return pattern.test(value) || 'password should be at least 8 characters';
                },
            ],

            phoneRule: [
                value => !!value || 'Invalid field',
                value => {
                    const pattern = /(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})$/;

                    return pattern.test(value) || 'Phone number is invalid';
                },
            ],
        };
    },

    computed: {
        passwordSameRule() {
            if(this.password == '') return 'Invalid data';
            else if(this.password === this.oldPassword && this.password != '' && this.oldPassword != '')
                return 'passwords are match!';
            else {
                const pattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;

                return pattern.test(this.password) || 'password is wrong';
            }
        },

        passwordConfirmationRule() {
            return () =>
                (this.password === this.passwordConfirm && this.password != '' && this.passwordConfirm != '') ||
				'passwords are not match!';
        },
    },
});
