<template>
    <div
        id="cp-published"
        class="news-v3 bg-color-white mb-4 print-mt">
        
        <div class="news-v3-in">
            <ul class="list-inline d-flex print-mb">
                <li class="mr-auto">
                    <div>
                        <span>{{ item.year }}</span>
                        <span class="mx-2">-</span>
                        <span>{{ item.type }}</span>
                    </div>
                </li>
                <li class="ml-auto">
                    <a v-bind:href="item.periodic.link" target="_blank">
                        <span v-if="item.periodic.register.type == 'issn'">ISSN: {{ item.periodic.register.value }}</span>
                        <span v-if="item.periodic.register.type == 'isbn'">ISBN: {{ item.periodic.register.value }}</span>
                    </a>
                </li>
            </ul> 
            <h3 class="print-my-0">{{ item.title }}</h3>
            <div class="print-py">
                <span class="pr-2" v-for="author in item.authors">{{ author.name }};</span>
            </div>
            <p class="mb-0 mt-3 print-my-0">{{ item.description }}</p>
            <div class="row px-0 mx-0">
                <ul class="post-shares ml-auto my-0 print-d-none">
                    <li v-for="source in item.sources">
                        <a v-bind:href="source.link">
                            <i v-bind:class="source.icon" class="cp-font"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <hr class="hr d-none mx-4 mt-0 mb-4">
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
            },
            item: {
                type: Object,
                required: true
            }
        },
        methods: {
        }
    }
</script>

<style scoped>
    .cp-font {
        font-size: 2rem !important;
    }
    .news-v3-in:hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
</style>