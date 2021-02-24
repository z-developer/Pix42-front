<template>
    <div class="register-page">
        <form>
            <div class="box-container">
                <h2 class="heading">
                    Create Your Account
                </h2>
                <div class="form-fields">
                    <input
                        id="user_name"
                        name="username"
                        placeholder="Full name"
                        type="text"
                    >
                </div>
                <div class="form-fields">
                    <input
                        id="email"
                        name="email"
                        placeholder="Email Address"
                        type="text"
                    >
                </div>
                <div class="form-fields">
                    <input
                        id="password"
                        name="password"
                        placeholder="Password"
                        type="text"
                    >
                </div>
                <div class="form-fields">
                    <button
                        class="createaccount"
                        name="commit"
                        type="submit"
                    >
                        Create your account
                    </button>
                </div>
            </div>
        </form>
        <div class="login-choice">
            <span>or Sign In with</span>
        </div>

        <SocialSignUp/>
        <div class="footer">
            <p>Already have an account? <a href="/login"> Sign In</a></p>
        </div>
    </div>
</template>

<script>
/* eslint-disable import/no-unresolved */

import SocialSignUp from '~/components/SocialLogin';

export default {
    name: 'register-page',

    components: { SocialSignUp },
};
</script>
