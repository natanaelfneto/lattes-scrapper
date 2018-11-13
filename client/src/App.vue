<template>
    <router-view :data="data"></router-view>
</template>

<script>
    export default {
        name: "lattes_social_network_visualization",
        data: function() {
            return { data: {
                app: {
                    name: this.formatAppName(),
                    base_url: 'http://localhost:5000/api/getUser/',
                    image: 'assets/img/graph.png'
                },
                user: {
                    name: 'No Input Provided',
                    references: ['No Input Provided'],
                    academics: ['No Input Provided']
                },
                logs: {
                    searched: []
                }
            } };
        },
        methods: {
            formatAppName () {
                return this.$options.name.split('_').map(el => {
                    return el.charAt(0).toUpperCase() + el.substring(1)
                }).join(" ");
            }
        }
    }
</script>

<style>
    body {
        overflow-y: scroll;
        overflow-x: hidden;
    }
</style>










