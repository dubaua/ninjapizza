import api from '@/api/';
/* eslint-disable */

const state = {
  pizza: null,
  desserts: null,
  drinks: null,
  salad: null,
  snack: null,
};

// getters
const getters = {
  getProductsByKey: state => key => state[key],
};

// here we can inject cart state to products

// actions
const actions = {
  fetchProductsByKey({ commit }, key) {
    api.get(key).then(products => commit('setProducts', { products, key }));
  },
};

// mutations
const mutations = {
  setProducts(state, { products, key }) {
    state[key] = products;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
