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
                value => !!value || 'Please insert E-mail address.',
                value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                    return pattern.test(value) || 'Incorrect E-mail address.';
                },
            ],

            usernameRule: [
                value => !!value || 'Username can not be empty',
                value => {
                    const pattern = /^(?:[A-Za-z0-9]{3,50})$/;

                    return (
                        pattern.test(value) ||
						'Username can not be empty'
                    );
                },
            ],

            nameRule: [
                value => !!value || 'Please enter valid data',
                value => {
                    const pattern = /^(?:[A-Za-z]{3,50})$/;

                    return pattern.test(value) || 'Please enter valid data';
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
                value => !!value || 'Please insert Password',
                value => {
                    const pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$!%?&])[A-Za-z\d@#$!%?&]{8,}$/;

                    return pattern.test(value) || 'Password format is incorrect. It should contain 8 characters, at least one uppercase, number and special characters.';
                },
            ],

            passwordRule: [
                value => !!value || 'Please insert Password',
                value => {
                    const pattern = /^(?=.*[a-z])(?=.*[0-9])/;

                    return pattern.test(value) || 'Password format is incorrect. It should contain 8 characters, at least one uppercase, number and special characters.';
                },
            ],

            phoneRule: [
                value => !!value || 'Invalid',
                value => {
                    const pattern = /(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})$/;

                    return pattern.test(value) || 'Invalid Phone';
                },
            ],

            subDomainRule: [
                value => !!value || 'Subdomain must contain letters, numbers and dashes',
                value => {
                    const pattern = /^[0-9A-Za-z\s\-]+(?:-?[0-9A-Za-z]+)+$/;
                    // const pattern = /^[0-9A-Za-z\s\-]+$/;

                    return pattern.test(value) || 'Invalid Subdomain type';
                },
            ],
        };
    },

    computed: {
        passwordSameRule() {
            if(this.password == '') return 'Invalid data';
            else if(this.password === this.oldPassword && this.password != '' && this.oldPassword != '')
                return 'Old and new password is the same!';
            else {
                const pattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;

                return pattern.test(this.password) || 'Password format is incorrect. It should contain 8 characters, at least one uppercase, number and special characters.';
            }
        },

        passwordConfirmationRule() {
            return () =>
                (this.password === this.passwordConfirm && this.password != '' && this.passwordConfirm != '') ||
				'Password do not match!';
        },
    },
});
