<template>
    <div
        id="cp-patent"
        class="col-4 news-v3 mb-4 px-2 print-page-break">
        
        <div class="news-v3-in bg-color-white print-page-break">
            <ul class="row list-inline">
                <li class="col-12">
                    <div>
                        <span>{{ item.year }}</span>
                        <span>-</span>
                        <span>{{ item.type }}</span>
                    </div>
                </li>
                <li class="col-12">
                    <a v-bind:href="item.ownership.link" target="_blank">
                        <span v-if="item.ownership.register.type == 'software'">Nº {{ item.ownership.register.value }}</span>
                    </a>
                </li>
                <li class="col-12">
                    <a v-bind:href="item.ownership.link" target="_blank">
                        <span>{{ item.ownership.name }}</span>
                    </a>
                </li>
            </ul> 
            <h3>{{ item.title }}</h3>
            <div class="h-25">
                <span class="pr-2" v-for="author in item.authors">{{ author.name }};</span>
            </div>
            <div class="row px-0 mx-0">
                <ul class="mr-auto post-shares mb-0 mt-auto">
                    <li>
                        
                            <i 
                                v-bind:style="{ 'background-image': 'url(' + data.settings.logos + item.icon + ')' }">
                            </i>
                        
                    </li>
                </ul>
                <ul class="ml-auto post-shares mb-0 mt-auto">
                    <li v-for="source in item.sources">
                        <a v-bind:href="source.link">
                            <i v-bind:class="source.icon" class="cp-font"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
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
    .news-v3-in {
        height: 16rem;
    }
    .news-v3-in:hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
</style>