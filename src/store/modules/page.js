/* eslint-disable no-shadow */
import disableScroll from 'disable-scroll';

const state = {
  isMenuOpen: false,
  isCartOpen: false,
  isOrderOpen: false,
};

// mutations
const mutations = {
  openMenu(state) {
    state.isMenuOpen = true;
    disableScroll.on();
  },
  closeMenu(state) {
    state.isMenuOpen = false;
    disableScroll.off();
  },
  toggleMenu(state) {
    state.isMenuOpen = !state.isMenuOpen;
    if (state.isMenuOpen) {
      disableScroll.on();
    } else {
      disableScroll.off();
    }
  },
  openCart(state) {
    state.isCartOpen = true;
    disableScroll.on();
  },
  closeCart(state) {
    state.isCartOpen = false;
    disableScroll.off();
  },
  toggleCart(state) {
    state.isCartOpen = !state.isCartOpen;
    if (state.isCartOpen) {
      disableScroll.on();
    } else {
      disableScroll.off();
    }
  },
  openOrder(state) {
    state.isOrderOpen = true;
    disableScroll.on();
  },
  closeOrder(state) {
    state.isOrderOpen = false;
    disableScroll.off();
  },
  toggleOrder(state) {
    state.isOrderOpen = !state.isOrderOpen;
    if (state.isOrderOpen) {
      disableScroll.on();
    } else {
      disableScroll.off();
    }
  },
};

export default {
  state,
  mutations,
};
