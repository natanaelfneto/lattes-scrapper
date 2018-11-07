<template>
    <div
        id="cp-resume"
        class="news-v3 bg-color-white mb-4 print-mb-md-0">
        <div class="news-v3-in">
            <ul class="list-inline d-flex">
                <li class="print mr-auto">
                    <div v-if="item.year.start != item.year.end">
                        <span>{{ item.year.end }}</span>
                        <span class="px-1">-</span>
                        <span>{{ item.year.start }}</span>
                    </div>
                    <div v-if="item.year.start == item.year.end">
                        <span>{{ item.year.start }}</span>
                    </div>
                </li>
                <li class="print ml-auto">
                    <a href="#">{{ item.location }}
                        <span aria-hidden="true" class="icon-pointer"></span>
                    </a> 
                </li>
            </ul>
            <h3>{{ item.position }}</h3>
            <p>{{ item.description }}</p>
            <div class="row px-0 mx-0 print-place">
                <ul class="print-d-none post-shares col-md-4 my-0">
                    <li class="print m r-auto">
                        <a href="#">
                            <i 
                                data-toggle="tooltip"
                                data-placement="bottom" 
                                v-bind:title="item.place.name"
                                v-bind:style="{ 'background-image': 'url(' + data.settings.logos + item.place.image.logo + ')' }">
                            </i>
                        </a>
                    </li>
                    <li class="print mr-auto" v-for="parent in item.place.parents">
                        <a href="#">
                            <i
                                data-toggle="tooltip"
                                data-placement="bottom" 
                                v-bind:title="parent.name"
                                v-bind:style="{ 'background-image': 'url(' + data.settings.logos + parent.image.logo + ')' }">
                            </i>
                        </a>
                    </li>
                </ul>
                <ul class="print-col-12 list-inline d-flex col-md-8 my-auto">
                    <li class="print ml-auto print-place">
                        <div v-if="item.place.acronym != ''">
                            <span>
                                <a v-bind:href="item.place.page_url" target="_blank">
                                    {{ item.place.name }} - {{ item.place.acronym }}
                                </a>
                            </span>
                        </div>
                        <div v-if="item.place.acronym == ''">
                            <span>
                                <a v-bind:href="item.place.page_url" target="_blank">{{ item.place.name }}</a>
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <hr class="hr d-none mx-4 mb-2">
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

<style>
    .test {
        background-size: 100%;
    }
    .news-v3-in:hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
</style>