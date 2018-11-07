// vue/vuex imports
import Vue from 'vue'
import Vuex from 'vuex'
// third party imports
import createLogger from 'vuex/dist/logger'
// self imports

// enable vue to use vuex
Vue.use(Vuex);

// set to dev. environment
const debug = process.env.NODE_ENV !== 'production';


// export default store
export default new Vuex.Store({
  // store modules
  modules: {
  },
  // store debug flag
  strict: debug,
  // enabled plugins
  plugins: debug ? [createLogger()] : [],
});

// Add a global settigs for plugins to be run on development and production
// get debug flag from same settings file