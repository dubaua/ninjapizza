import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import modules from './modules';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const vuexPersist = new VuexPersistence({
  key: 'vuex',
  strictMode: debug,
  storage: window.localStorage,
  modules: ['products', 'banners', 'cart'],
});

const store = new Vuex.Store({
  modules,
  strict: debug,
  mutations: {
    RESTORE_MUTATION: vuexPersist.RESTORE_MUTATION,
  },
  plugins: [vuexPersist.plugin],
});

const keys = ['pizza', 'desserts', 'drinks', 'salad', 'snack'];
keys.map(key => store.dispatch('fetchProductsByKey', key));
store.dispatch('fetchBanners');

export default store;
