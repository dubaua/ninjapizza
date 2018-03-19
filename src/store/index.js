import Vue from 'vue';
import Vuex from 'vuex';
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

const keys = ['pizza', 'desserts', 'drinks', 'salad', 'snack'];
keys.map(key => store.dispatch('fetchProductsByKey', key));
store.dispatch('fetchBanners');

export default store;
