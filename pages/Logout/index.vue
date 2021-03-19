
<template>
    <div class="logout-page">
        Logout page
    </div>
</template>

<script>
export default {
    name: 'logout-page',

    created() {
        // TODO clean localstorage and logout
        this.$router.push('/');
    },
};
</script>
