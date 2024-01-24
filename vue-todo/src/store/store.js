import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const storage = {
  fetch() {
    let arr = [];
    if (localStorage.getItem('todoItems') !== null) {
      arr = JSON.parse(localStorage.getItem('todoItems'));
    }
    return arr;
  },
};

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch(),
  },
  mutations: {
    addTodo(state, payload) {
      const time = new Date().toJSON().replaceAll(/[^0-9]/g, '');
      const obj = { time: time, completed: false, item: payload.newTodoItem };
      state.todoItems.push(obj);
      this.commit('setLocalStorage');
    },
    removeTodo(state, payload) {
      const idx = state.todoItems.indexOf(payload.todoItem);
      state.todoItems.splice(idx, 1);
      this.commit('setLocalStorage');
    },
    toggleComplete(state, payload) {
      const idx = state.todoItems.indexOf(payload.todoItem);
      state.todoItems[idx].completed = !state.todoItems[idx].completed;
      this.commit('setLocalStorage');
    },
    clearTodo(state) {
      state.todoItems = [];
      this.commit('setLocalStorage');
    },
    setLocalStorage(state) {
      localStorage.setItem('todoItems', JSON.stringify(state.todoItems));
    },
  },
  getters: {},
});
