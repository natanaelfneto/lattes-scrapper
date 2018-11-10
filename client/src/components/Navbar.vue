<template>
    <div 
        id="cp-navbar">
        <nav class="navbar navbar-expand-md fixed-top bg-light">
            <span class="navbar-brand h1">{{ data.app.name }}</span>
            <button 
                class="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarComponent" 
                aria-controls="navbarComponent" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarComponent">
                <form class="form-inline my-2 my-lg-0 ml-auto">
                    <input 
                        ref="lattes_url_or_id"
                        class="form-control mr-2" 
                        type="text" 
                        placeholder="Lattes URL or ID" 
                        aria-label="Search">
                    <button 
                        @click.stop.prevent="resquestUserData()"
                        class="btn btn-secondary my-2 mr-2 my-sm-0 item"
                        type="submit">
                        <span aria-hidden="true" class="icon-eyeglasses"></span>
                    </button>
                    <button 
                        @click.stop.prevent="clearUserData()"
                        class="btn btn-secondary my-2 mr-2 my-sm-0 item"
                        type="submit">
                        <span aria-hidden="true" class="icon-trash"></span>
                    </button>
                </form>
            </div>
        </nav>
    </div>
</template>

<script>
    import axios from 'axios';

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
            resquestUserData() {
                // get input value
                let cleanID = this.$refs.lattes_url_or_id.value.trim().match(/[0-9]{16}/g)[0];
                let error = (cleanID === null ? true : false);

                if(error) {
                    alert(
                        "this is not a valid lattes URL or ID.\n" + 
                        "Please use the following options:\n" + 
                        "1: https://lattes.cnpq.br/01234567890122345\n" +
                        "2: http://lattes.cnpq.br/01234567890122345\n" +
                        "3: lattes.cnpq.br/01234567890122345\n" +
                        "4: 01234567890122345"
                    );
                    this.$refs.lattes_url_or_id.value = '';
                    return;
                }
                this.$refs.lattes_url_or_id.value = cleanID;
                
                // set lattes url
                let url = this.data.app.base_url + cleanID
                //set wainting params
                this.data.user = {
                        lattes_id: cleanID,
                        name: "Loading...",
                        references: ["Loading..."],
                        academics: ["Loading..."]
                    }
                // request server api to return user data
                axios.get(url).then(res => {
                    console.log(res.data)
                    // update user data object
                    this.data.user = {
                        name: res.data.name,
                        references: res.data.references,
                        academics: res.data.academics
                    }

                    var search = {
                        "id": cleanID, 
                        "name": res.data.name,
                        "datetime": this.getCurrentDateTime()
                    };

                    var contains = false;
                    for (var i=0; i < this.data.logs.searched.length; i++) {
                        if (this.data.logs.searched[i].id === cleanID) {
                            contains = true;
                            var index = i;
                        }
                    }

                    if(!contains) {
                        this.data.logs.searched.push(search);
                    }
                    else {
                        this.data.logs.searched.splice(index, 1);
                        this.data.logs.searched.push(search);
                    }
                })
                .catch(error => {
                    console.log("ERROR:"+error.response)
                });
            },
            clearUserData() {
                this.data.user = {
                    name: 'No Input Provided',
                    references: ['No Input Provided'],
                    academics: ['No Input Provided']
                }
            },
            getCurrentDateTime () {
                var current = new Date();
                var date = `${current.getDate()}/${(current.getMonth()+1)}/${current.getFullYear()}`;
                var time = `${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`;
                return `${date} ${time}`;
            }
        }
    }
</script>

<style>
</style>