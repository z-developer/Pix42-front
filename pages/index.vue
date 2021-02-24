<template>
    <div class="nuxt-page-main">
        <div>
            <Login/>
        </div>
        <Snackbar/>
    </div>
</template>

<script>
/* eslint-disable import/no-unresolved */
import Snackbar from '~/components/common/Snackbar';
import Login from '~/pages/Login';

export default {
    name: 'main-page',

    components: {
        Login,
        Snackbar,
    },
};
</script>
