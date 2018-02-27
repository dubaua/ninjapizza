import store from '@/store/';

/* eslint-disable no-shadow, no-mixed-operators, no-underscore-dangle */

const state = [];

// helpers
const getChosenVersion = p => p.versions.find(version => version.isChosen);
const getCartId = p => (p.versions ? `${p._id}_ver${getChosenVersion(p).id}` : p._id);
const getPrice = p => (p.versions ? getChosenVersion(p).price : p.price);
const getTitle = p => (p.versions ? `${p.title} ${getChosenVersion(p).measure}` : p.title);
const getProduct = cartId => state.find(p => p.cartId === cartId);
const getProductIndex = cartId => state.map(p => p.cartId).indexOf(cartId);
const createProduct = p => ({
  _id: p._id,
  cartId: getCartId(p),
  amount: 1,
  price: getPrice(p),
  title: getTitle(p),
});

// getters
const getters = {
  totalPrice: state => state.reduce((sum, product) => sum + product.price * product.amount, 0),
  isInCart: state => id => state.filter(p => p._id === id) > 0,
};

// actions
const actions = {};

// mutations
const mutations = {
  addToCart(state, product) {
    // check if already in cart => incrementAmount
    const newProduct = createProduct(product);
    if (getProductIndex(newProduct.cartId) !== -1) {
      // TODO convert to action
      store.commit('incrementAmount', newProduct.cartId);
    } else {
      // add to cart
      state.push(newProduct);
    }
  },
  incrementAmount(state, cartId) {
    const amount = getProduct(cartId).amount;
    getProduct(cartId).amount = amount + 1;
  },
  decrementAmount(state, cartId) {
    const amount = getProduct(cartId).amount;
    if (amount === 1) {
      const index = getProductIndex(cartId);
      state.splice(index, 1);
    } else {
      getProduct(cartId).amount = amount - 1;
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
