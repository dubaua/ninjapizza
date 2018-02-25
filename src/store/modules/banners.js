import api from '@/api/';
/* eslint-disable */

const state = null;

// getters
const getters = {
  banners: state => state,
};

// actions
const actions = {
  fetchBanners({ commit }) {
    api.get('banners').then(banners => commit('setBanners', banners));
  },
};

// mutations
const mutations = {
  setBanners(state, banners) {
    state = banners;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
