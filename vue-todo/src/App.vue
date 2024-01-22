<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" v-on:removeTodo="removeTodo" v-on:toggleComplete="toggleComplete"></TodoList>
    <TodoFooter v-on:clearTodo="clearTodo"></TodoFooter>
  </div>
</template>

<script>
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
      a.completed = !a.completed;
      this.todoItems[i] = a;
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
* { box-sizing: border-box; }
html, body { padding: 0; margin: 0; }
html { font-size: 10px; }
body { background: #f6f6f6; font-size: 16px; font-family: Ubuntu, Avenir, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; color: #2f3b52; }
p,
fieldset,
input,
button { border: 0 none; padding: 0; margin: 0; background: transparent; font-size: inherit; font-family: inherit; }
ul,
li,
ol { padding: 0; margin: 0; list-style: none; }

label:hover,
button:hover { cursor: pointer; }

input[type='text']:focus { outline: none; }

.shadow { box-shadow: 0rem 0.7rem 1rem rgba(0,0,0, 0.07); }
.blind { position: relative;
    z-index: -1;
    display: inline-block;
    overflow: hidden;
    height: 1px;
    width: 1px;
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    word-break: initial;
    word-wrap: initial; }

#app { width: 100%; max-width: 46rem; margin: 0 auto; }
</style>
