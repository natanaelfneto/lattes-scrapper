<template>
    <div id="cp-content">
        <main role="main">
            <div class="row mt-5">
                <div class="col-9 mt-4">
                    <div class="container">
                        <ul
                            class="nav justify-content-center nav-pills mb-4 mt-2"
                            id="ContentTab" 
                            role="tablist">
                            <li class="nav-item">
                                <a
                                    class="nav-link mx-2 active"
                                    id="formatted" 
                                    ref="formatted" 
                                    data-toggle="tab" 
                                    href="#formatted_tab" 
                                    role="tab" 
                                    aria-controls="formatted_tab" 
                                    aria-selected="true">
                                    Formatted result
                                </a>
                            </li>
                            <li class="nav-item">
                                <a
                                    class="nav-link mx-2"
                                    id="json" 
                                    ref="json" 
                                    data-toggle="tab" 
                                    href="#json_tab" 
                                    role="tab" 
                                    aria-controls="json_tab" 
                                    aria-selected="true"
                                    @click="markToHtml()">
                                    JSON result
                                </a>
                            </li>
                            <li class="nav-item">
                                <a
                                    class="nav-link mx-2"
                                    id="howto" 
                                    ref="howto" 
                                    data-toggle="tab" 
                                    href="#howto_tab" 
                                    role="tab" 
                                    aria-controls="howto_tab" 
                                    aria-selected="true">
                                    How it works
                                </a>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div 
                                class="tab-pane fade show active" 
                                id="formatted_tab" 
                                ref="formatted_tab" 
                                role="tabpanel" 
                                aria-labelledby="formatted">
                                <Formatted :data="data"></Formatted> 
                            </div>
                            <div 
                                class="tab-pane fade" 
                                id="json_tab" 
                                ref="json_tab" 
                                role="tabpanel" 
                                aria-labelledby="json">
                                <div id="cp-json">
                                    <div id="json_markdown"></div>
                                    <div id="json_hidden" class="d-none">
                                        {{ data.user }}
                                    </div>
                                </div>
                            </div>
                            <div 
                                class="tab-pane fade" 
                                id="howto_tab" 
                                ref="howto_tab" 
                                role="tabpanel" 
                                aria-labelledby="howto">
                                <div 
                                    class="w-75 img mx-auto"
                                    v-bind:style="{
                                        'background-image': 'url(' + data.app.image + ')'
                                    }">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-3 mt-4 pr-5">
                    <ul class="list-group">
                        <li
                            class="list-group-item bg-secondary text-light">
                            Searched Users
                        </li>
                        <li
                            class="list-group-item" 
                            v-for="user in data.logs.searched.slice().reverse()"
                            v-if="data.logs.searched.length > 0">
                            <div>ID: {{ user.id }}</div>
                            <div>Name: {{ user.name }}</div>
                            <div>Searched at: {{ user.datetime }}</div>
                        </li>
                        <li
                            class="list-group-item" 
                            v-if="data.logs.searched.length == 0">
                            No Search History Available
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import marked from 'marked'
    import Formatted from './Formatted.vue'

    export default {
        components: {
            Formatted
        },
        props: {
            data: {
                type: Object,
                required: true
            }
        },
        methods: {
            markToHtml () {
                // get data content
                var json_hidden = document.getElementById('json_hidden').textContent;
                // add markdown and convert it to html
                var pre_output = '<div class="col-1 pr-0"><b>"user"</b>:</div><div class="col pl-0">';
                var output = marked('```JSON\n'+json_hidden.trim()+'```');

                // create new element and set its parameters
                var newcontent = document.createElement('div');
                newcontent.setAttribute("id", "json_content");
                newcontent.innerHTML = '<div class="row">' + pre_output + output + '</div></div>';

                // remove any older content and append new json data
                document.getElementById('json_markdown').innerHTML = '';
                document.getElementById('json_markdown').appendChild(newcontent.firstChild);
            }
        }
    }
</script>

<style scoped>
    .img {
        height: 45rem;
        background-size: 100%;
        background-repeat: no-repeat;
    }
</style>