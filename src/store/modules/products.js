import api from '@/api/';
import { schema, normalize } from 'normalizr';

const product = new schema.Entity('products', {}, { idAttribute: '_id' });
const arrayOfProducts = [product];

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
    state[key] = normalize(products, arrayOfProducts).entities.products;
  },
  toggleVersion(state, { key, _id }) {
    console.log(state, key, id);
    // get by key and id and toggle vesion
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
