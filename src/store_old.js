import Vue from 'vue'
import Vuex from 'vuex'
import { setTimeout } from 'timers';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [
      {id: 1, name: 'UI'},
      {id: 2, name: 'Server Side'},
      {id: 3, name: 'QA'},
      {id: 4, name: 'HR'},
    ],
  },
  getters: {
    countCategories: function(state) {
      return state.categories.length;
    }
  },
  mutations: {
    ADD_CATEGORY: function(state, category) {
      state.categories.push(category);
    },
    REMOVE_CATEGORY: function(state, index) {
      state.categories.splice(index, 1);
    }
  },
  actions: {
    remove: function(context, index) {
      // context.commit('REMOVE_CATEGORY', index);
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          context.commit('REMOVE_CATEGORY', index);
          resolve();
        }, 2000); 
      });
    }
  }
})
