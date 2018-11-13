// vue/vuex imports
import Vue from 'vue';
import Router from 'vue-router';
// self imports
import Index from '../apps/client/IndexView'

// 
Vue.use(Router);

// 
const routes = [

    { 
        path: '/', 
        redirect: '/index', 
    },

    { 
        path: '/index', 
        component: Index, 
    },

    { 
        path: '*',
        redirect: '/index',
    },    
]

// 
export default new Router({
    saveScrollPosition: true,
    routes,
});
