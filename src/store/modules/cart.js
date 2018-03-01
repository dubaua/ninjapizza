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
  isInCart: state => id => state.filter(p => p._id === id && p.amount > 0).length > 0,
};

// actions
const actions = {};

// mutations
const mutations = {
  addToCart(state, product) {
    // check if already in cart => changeAmount
    const newProduct = createProduct(product);
    if (getProductIndex(newProduct.cartId) !== -1) {
      // TODO convert to action
      store.commit('changeAmount', { cartId: newProduct.cartId, modifier: 1 });
    } else {
      // add to cart
      state.push(newProduct);
    }
  },
  changeAmount(state, { cartId, modifier }) {
    getProduct(cartId).amount += modifier;
    // const amount = getProduct(cartId).amount;
    // if (amount === -modifier) {
    //   const index = getProductIndex(cartId);
    //   state.splice(index, 1);
    // } else {
    //   getProduct(cartId).amount += modifier;
    // }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
