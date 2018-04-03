import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';
import modules from './modules';

Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage,
  modules: ['products', 'banners', 'cart'],
});

const store = new Vuex.Store({
  modules,
  plugins: [vuexLocalStorage.plugin],
});

const keys = ['pizza', 'desserts', 'drinks', 'salad', 'snack'];
keys.map(key => store.dispatch('fetchProductsByKey', key));
store.dispatch('fetchBanners');

export default store;
