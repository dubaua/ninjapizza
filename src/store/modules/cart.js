/* eslint-disable */
const state = [];

// getters
const getters = {
  totalPrice: state => state.reduce((sum, product) => sum + product.price, 0),
};

// actions
const actions = {};

// mutations
const mutations = {
  addToCart(state, product) {
    // add amount
    const processedProduct = {
      ...product,
      amount: 1,
      // rework price
      price: product.versions
        ? product.versions.find(version => version.isChosen).value.price
        : product.price,
    };
    // check if already in cart => incrementAmount
    // state = [...state, processedProduct];
    state.push(processedProduct);
  },
  incrementAmount(state, id) {
    state.find(product => product._id === id).amount++; // rework immutable
  },
  decrementAmount(state, id) {
    state.find(product => product._id === id).amount--; // rework immutable
    // check for removing from cart
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
