import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import cart from './modules/cart_store';
import goods from './modules/goods_store';
const store = new Vuex.Store({
  modules: {
    cart,
    goods
  },
  strict: process.env.NODE_ENV !== 'production', // 严格模式
});
export default store
