<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" v-on:removeTodo="removeTodo" v-on:toggleComplete="toggleComplete"></TodoList>
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
      const obj = {
        completed: false,
        item: newTodoItem
      };
      this.todoItems.push(obj);
      this.setLocalStorage();
    },
    removeTodo: function(a, i) {
      localStorage.removeItem(a.item);
      this.todoItems.splice(i, 1);
      this.setLocalStorage();
    },
    toggleComplete: function(a, i) {
      this.todoItems[i].completed = !this.todoItems[i].completed;
      this.setLocalStorage();
    },
    clearTodo: function() {
      this.todoItems = [];
      localStorage.clear();
    },
    setLocalStorage: function() {
      this.todoItems.forEach( a => {
        localStorage.setItem(a.item, JSON.stringify(a));
      })
    }
  },
  created: function() {
    if( localStorage.length > 0 ){
      for(var i=0; i<localStorage.length; i++){
        let item = JSON.parse(localStorage.getItem(localStorage.key(i)));
        this.todoItems.push(item);
      }
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
