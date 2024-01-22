<template>
  <fieldset class="shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <button type="button" v-on:click="addTodo" title="add" aria-label="add"><i class="fa-solid fa-plus"></i></button>
  </fieldset>
</template>

<script>
export default {
  data: function() {
    return {
      newTodoItem: '',
    }
  },
  methods: {
    addTodo: function() {
      console.log(this.newTodoItem);
      if( this.newTodoItem !== '' ){
        const obj = {
          completed: false,
          item: this.newTodoItem
        };
        localStorage.setItem( this.newTodoItem, JSON.stringify(obj) );
        this.clearInput();
      } else {
        alert('값을 입력하세요');
      }
    },
    clearInput: function() {
      this.newTodoItem = '';
    }
  }
}
</script>

<style scoped>
fieldset { display: flex; border-radius: 0.8rem; background: #fff; overflow: hidden; }
input { flex: 1 1 calc(100% - 5rem); max-width: calc(100% - 5rem); padding: 0 1.2rem; }
button { flex: 1 1 5rem; width: 5rem; background: #00c471; color: #fff; }
input,
button { height: 5rem; }
</style>
