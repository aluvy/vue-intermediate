import * as getters from './getters.js'; // import 방법1
import mutations from './mutations.js'; // import 방법2
import actions from './actions.js';

const storage = {
  fetch() {
    let arr = [];
    if (localStorage.getItem('todoItems') !== null) {
      arr = JSON.parse(localStorage.getItem('todoItems'));
    }
    return arr;
  },
};

const state = {
  todoItems: storage.fetch(),
};

export default {
  state,
  getters,
  mutations,
  actions,
};
