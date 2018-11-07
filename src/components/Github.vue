<template>
    <div id="cp-github">
        <div class="headline-v2"><h2>Github</h2></div>
        <ul class="list-unstyled">
            <h3><small>Organizações</small></h3>
            <li class="mb-4">
                <div class="row mb-2" v-for="org in data.sidebar.github.object.orgs">
                    <a href="#" class="col-md-2 my-auto">
                        <i 
                            data-toggle="tooltip"
                            data-placement="bottom" 
                            v-bind:title="org.login"
                            v-bind:style="{ 'background-image': 'url(' + org.avatar_url + ')' }"></i>
                    </a>
                    <a href="#" class="col">
                        <span class="">{{ org.name }}</span>
                    </a>
                </div>
            </li>
            <h3><small>Repositórios Abertos</small></h3>
            <li class="mb-4">
                <div class="row mb-2" v-for="repo in data.sidebar.github.object.featured_repos">
                    <span class="col mt-auto">
                        <a 
                            class="d-block badge badge-secondary cp-font"
                            v-bind:href="repo.clone_url"
                            target="_blank">
                            <span class="align-middle">{{ repo.name }}</span>
                        </a>
                    </span>
                    <span class="col mx-auto">
                        <button 
                            class="btn btn-outline-info item w-100 py-0"
                            @click.stop.prevent="clipboardCopy(repo.clone_url)">
                            <span>
                                <small class="d-inline">clone repo</small>
                                <i aria-hidden="true" class="icon-cloud-download cp-font pl-2"></i>
                            </span>
                            
                        </button>
                    </span>
                </div>
            </li>
        </ul>
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
        methods: {
            clipboardCopy: function(url) {
                let CopiedObject = document.createElement("textarea");
                var output = "";
                try {
                    CopiedObject.value = 'git clone '+url
                    CopiedObject.setAttribute('readonly', '');
                    document.body.appendChild(CopiedObject);
                    CopiedObject.select()
                    document.execCommand('copy');
                    document.body.removeChild(CopiedObject);
                    output = "O comando: <git clone "+url+"> foi copiado com sucesso!";
                } catch (err) {
                    output = "Element value could not be copied"
                }
                alert(output);
            },
        }
    }
</script>

<style scoped>
    .cp-font {
        font-size: 0.8rem;
        height: 1.5rem;
    }
    ul > li > div > a > i {
        color: #555;
        width: 1rem;
        height: 1rem;
        padding: 13px;
        display: inline-block;
        background-size: 100%;
        vertical-align: middle;
        border-radius: 5px;
    }
</style>