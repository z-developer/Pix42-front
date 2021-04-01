
<template></template>

<script>
export default {
    name: 'logout-page',

    created() {
        localStorage.removeItem('auth._token.local');
        localStorage.removeItem('auth.redirect');
        localStorage.removeItem('auth.strategy');
        localStorage.removeItem('auth._token_expiration.local');
        this.$store.state.auth.loggedIn = false;
        this.$auth.logout();
        this.$router.push('/logout');
    },
};
</script>
