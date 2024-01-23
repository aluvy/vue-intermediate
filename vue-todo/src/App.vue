<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoList :propsdata="todoItems" v-on:removeTodo="removeTodo" v-on:toggleComplete="toggleComplete"></TodoList>
    <TodoFooter v-on:clearTodo="clearTodo"></TodoFooter>
  </div>
</template>

<script>
import './reset.css'
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  name: 'App',
  data: function() {
    return {
      todoItems: [],
    }
  },
  methods: {
    addTodo: function(newTodoItem) {
      const time = new Date().toJSON().replaceAll(/[^0-9]/g, '');
      const obj = { time: time, completed: false, item: newTodoItem }
      this.todoItems.push(obj);
      this.setLocalStorage();
    },
    removeTodo: function(a) {
      const idx = this.todoItems.indexOf(a);
      this.todoItems.splice(idx, 1);
      this.setLocalStorage();
    },
    toggleComplete: function(a) {
      const idx = this.todoItems.indexOf(a);
      this.todoItems[idx].completed = !this.todoItems[idx].completed;
      this.setLocalStorage();
    },
    clearTodo: function() {
      this.todoItems = [];
      this.setLocalStorage();
    },
    setLocalStorage: function() {
      localStorage.setItem('todoItems', JSON.stringify(this.todoItems));
    }
  },
  created: function() {
    if ( localStorage.getItem('todoItems') !== null ){
      this.todoItems = JSON.parse(localStorage.getItem('todoItems'));
    }
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
}
</script>

<style>
#app { width: 100%; max-width: 46rem; margin: 0 auto; }
</style>
