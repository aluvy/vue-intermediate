<template>
  <footer>
    <span>&copy; footer</span>
    <button type="button" v-on:click="clearTodo">Clear All</button>
  </footer>
</template>

<script>
export default {
  methods: {
    clearTodo () {
      this.$emit('clearTodo');
    }
  }
}
</script>

<style scoped>
footer { display: flex; align-items: center; justify-content: center; font-size: 1.2rem; text-align: center; }
footer span { margin-right: auto; }
footer button { background: #fff; border-radius: 5px; padding: 1rem 1.6rem; color: red; }
</style>
