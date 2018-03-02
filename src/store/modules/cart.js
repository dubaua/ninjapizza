import Vue from 'vue';
/* eslint-disable no-shadow, no-mixed-operators, no-underscore-dangle */

const state = {};

// helpers
const createProduct = p => ({
  _id: p._id,
  cartId: p.versions ? `${p._id}_ver${p.versions[p.chosenVersion].id}` : p._id,
  amount: 1,
  price: p.versions ? p.versions[p.chosenVersion].price : p.price,
  title: p.versions ? `${p.title} ${p.versions[p.chosenVersion].measure}` : p.title,
});

// getters
const getters = {
  totalPrice: state =>
    Object.keys(state).reduce((sum, cartId) => sum + state[cartId].price * state[cartId].amount, 0),
  isInCart: state => id => Object.keys(state).some(p => p.indexOf(id) !== -1),
};

// actions
const actions = {
  addToCart({ state, commit }, product) {
    const position = createProduct(product);
    if (typeof state[position.cartId] !== 'undefined') {
      commit('changeAmount', { cartId: position.cartId, modifier: 1 });
    } else {
      commit('addToCart', position);
    }
  },
  changeAmount({ state, commit }, { cartId, modifier }) {
    if (state[cartId].amount === -modifier) {
      commit('removeFromCart', cartId);
    } else {
      commit('changeAmount', { cartId, modifier });
    }
  },
};

// mutations
const mutations = {
  addToCart(state, position) {
    Vue.set(state, position.cartId, position);
  },
  removeFromCart(state, cartId) {
    Vue.delete(state, cartId);
  },
  changeAmount(state, { cartId, modifier }) {
    state[cartId].amount += modifier;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
