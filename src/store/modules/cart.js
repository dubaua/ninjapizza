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
  addToCart(state, incomingProduct) {
    // check if already in cart => incrementAmount
    if (state.filter(product => product._id === incomingProduct._id)) {
      console.log('so product have same id. check for version')
    }
    // check if product have versions
    const processedProduct = {
      ...product,
      amount: product.versions ? null : 1,
      price: product.versions ? null : product.price,
    };

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
