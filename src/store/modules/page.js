/* eslint-disable no-shadow */
// import disableScroll from 'disable-scroll';

const state = {
  isMenuOpen: false,
  isCartOpen: false,
  isOrderOpen: false,
};

// mutations
const mutations = {
  openMenu(state) {
    state.isMenuOpen = true;
  },
  closeMenu(state) {
    state.isMenuOpen = false;
  },
  toggleMenu(state) {
    state.isMenuOpen = !state.isMenuOpen;
  },
  openCart(state) {
    state.isCartOpen = true;
  },
  closeCart(state) {
    state.isCartOpen = false;
  },
  toggleCart(state) {
    state.isCartOpen = !state.isCartOpen;
  },
  openOrder(state) {
    state.isOrderOpen = true;
  },
  closeOrder(state) {
    state.isOrderOpen = false;
  },
  toggleOrder(state) {
    state.isOrderOpen = !state.isOrderOpen;
  },
};

export default {
  state,
  mutations,
};
