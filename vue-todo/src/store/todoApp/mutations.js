// export 방법2
export default {
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
};
