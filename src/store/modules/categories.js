const state = {
  categories: [
    {id: 1, name: 'UI'},
    {id: 2, name: 'Server Side'},
    {id: 3, name: 'QA'},
    {id: 4, name: 'HR'},
  ],
};

const getters = {
  getAllCategories: (state) => {
    return state.categories;
  },
  countCategories: (state) => {
    return state.categories.length;
  }
};

const mutations = {
  ADD_CATEGORY: function(state, category) {
    state.categories.push(category);
  },
  REMOVE_CATEGORY: function(state, index) {
    state.categories.splice(index, 1);
  }
};

const actions = {
  remove: function(context, index) {
    // context.commit('REMOVE_CATEGORY', index);
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        context.commit('REMOVE_CATEGORY', index);
        resolve();
      }, 2000); 
    });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};