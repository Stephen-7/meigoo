import Vue from 'vue'
import Vuex from "vuex"

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    loading: false,
    addressList: [],
  },
  mutations: {
    showLoading(state) {
      state.loading = true;
    },
    hideLoading(state) {
      state.loading = false;
    },
    addressList(state, val) {
      state.addressList.push(val);
    },
    deleteAddressList(state, val) {
      state.addressList.splice(val,1);
    },
  }
});

export default store
