import Vue from 'vue';
import Vuex from 'vuex';
import todoApp from './todoApp/todoApp.js';
Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    todoApp,
  },
});
