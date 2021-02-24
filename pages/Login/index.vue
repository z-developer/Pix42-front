<template>
    <div class="login-page">
        <form>
            <div class="box-container">
                <h2 class="heading">
                    Sign In
                </h2>
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
                        class="signIn"
                        name="commit"
                        type="submit"
                    >
                        Sign In
                    </button>
                </div>
                <div class="login-choice">
                    <span>or Sign In with</span>
                </div>
                <SocialLogin/>
            </div>
        </form>

        <div class="footer">
            <p>Don't have an account? <a href="/register"> Create one now</a></p>
        </div>
    </div>
</template>

<script>
/* eslint-disable import/no-unresolved */

import SocialLogin from '~/components/SocialLogin';

export default {
    name: 'login-page',

    components: { SocialLogin },
};
</script>
