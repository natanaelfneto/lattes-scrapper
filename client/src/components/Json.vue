<template>
    <div id="cp-json">
        <div id="json_markdown"></div>
        <div id="json_hidden" class="d-none">{{ data.user }}</div>
    </div>
</template>

<script>
    export default {
        components: {
        },
        props: {
            data: {
                type: Object,
                required: true
            }
        },
        methods: {}
    }
</script>

<style>
</style>