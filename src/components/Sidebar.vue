<template>
    <div id="cp-sidebar-left">
        
        <Academic v-if="data.sidebar.academic.is_enabled" :data="data"></Academic>

        <Github v-if="data.sidebar.github.is_enabled" :data="data"></Github>
        
    </div>
</template>

<script>
    import Academic from './Academic.vue'
    import Github from './Github.vue'

    export default {
        components: {
            Academic,
            Github
        },
        props: {
            data: {
                type: Object,
                required: true
            }
        },
        methods: {
        }
    }
</script>

<style>
</style>