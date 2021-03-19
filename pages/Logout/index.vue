
<template>
    <div>
        Logout page
    </div>
</template>

<script>
export default {
    created() {
        // TODO clean localstorage and logout
        this.$router.push('/');
    },
};
</script>
