import Vue from 'vue';
import Vuex from 'vuex';
// import { freeze, unfreeze } from '@/utils';
import products from './modules/products';
import banners from './modules/banners';
import cart from './modules/cart';
import page from './modules/page';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  modules: {
    products,
    banners,
    cart,
    page,
  },
  strict: debug,
});

// ТУДУ сделать фриз по открытию панельки и анфриз по закрытию

// store.watch(
//   state => state.page.isMenuOpen || state.page.isCartOpen,
//   haveToFreeze => (haveToFreeze ? freeze() : unfreeze()),
// );

const keys = ['pizza', 'desserts', 'drinks', 'salad', 'snack'];
keys.map(key => store.dispatch('fetchProductsByKey', key));
store.dispatch('fetchBanners');

export default store;
