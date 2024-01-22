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
      if( this.newTodoItem !== '' ){
        this.$emit('addTodo', this.newTodoItem);
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
input { flex: 1 1 calc(100% - 5rem); max-width: calc(100% - 5rem); padding: 0 1.6rem; }
button { flex: 1 1 5rem; width: 5rem; background: #00c471; color: #fff; }
input,
button { height: 5rem; }
</style>
