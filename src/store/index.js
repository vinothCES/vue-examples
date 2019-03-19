import Vue from 'vue';
import Vuex from 'vuex';
import categories from './modules/categories';

// Load Vuex
Vue.use(Vuex);

// Create Store
export default new Vuex.Store({
  modules: {
    categories
  }
});