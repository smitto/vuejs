<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <app-servers></app-servers>
            <app-server-details></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './shared/components/Header.vue';
    import Footer from './shared/components/Footer.vue';
    import Servers from './server/components/Servers.vue';
    import ServerDetails from './server/components/ServerDetails.vue';

    export default {
        components: {
            'appHeader': Header,
            'app-servers': Servers,
            'app-server-details': ServerDetails,
            'app-footer': Footer
        }
    }
</script>

<style>

</style>
