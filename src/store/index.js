import Vue from 'vue';
import Vuex from 'vuex';
import products from './modules/products';
import banners from './modules/banners';
import cart from './modules/cart';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  modules: {
    products,
    banners,
    cart,
  },
  strict: debug,
});

const keys = ['pizza', 'desserts', 'drinks', 'salad', 'snack'];
keys.map(key => store.dispatch('fetchProductsByKey', key));
store.dispatch('fetchBanners');

export default store;
