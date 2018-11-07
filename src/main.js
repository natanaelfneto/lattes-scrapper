// vue/vuex imports
import Vue from 'vue';
// third party imports
// self imports
import App from './App';
import router from './router';
import store from './store';


new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App },
})