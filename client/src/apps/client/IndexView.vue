<template>
    <div id="app-client-index">
        <Navbar :data="data"></Navbar>
        <Content :data="data"></Content>
    </div>
</template>

<script>
    import Content from '../../components/Content.vue'
    import Navbar from '../../components/Navbar.vue'

    export default {
        name: "Index",
        components: {
            Content,
            Navbar,
            Footer,
            Formatted,
            Json,
        },
        props: {
            data: {
                type: Object,
                required: true
            }
        },
    }
</script>