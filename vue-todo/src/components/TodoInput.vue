<template>
  <div>

    <fieldset class="shadow">
      <input type="text" v-model="newTodoItem" v-on:keypress.enter="setAddTodo">
      <button type="button" v-on:click="setAddTodo" title="add" aria-label="add" ref="focusBtn">
        <i class="fa-solid fa-plus"></i>
      </button>
    </fieldset>

    <Teleport to="body">
      <ModalPopup :show="showModal" @close="showModal=false">
        <template #header>
          <h3>warning!</h3>
        </template>
        <template #body>
          <p>Enter the content.</p>
        </template>
      </ModalPopup>
    </Teleport>

  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import ModalPopup from './common/ModalPopup.vue'
import Teleport from 'vue2-teleport';

export default {
  data () {
    return {
      newTodoItem: '',
      showModal: false,
      focusBtn: this.$refs.focusBtn,
    }
  },
  methods: {
    ...mapMutations(['addTodo']),
    setAddTodo () {
      const text = this.newTodoItem.trim();
      if( text !== '' ){
        this.addTodo({ newTodoItem: text });
      } else {
        this.showModal = !this.showModal;
      }
      this.newTodoItem = '';
    }
  },
  components: {
    ModalPopup,
    Teleport
  }
}
</script>

<style scoped>
fieldset { display: flex; border-radius: 0.8rem; background: #fff; overflow: hidden; }
input { flex: 1 1 calc(100% - 5rem); max-width: calc(100% - 5rem); padding: 0 1.6rem; }
button { flex: 1 1 5rem; width: 5rem; background: #00c471; color: #fff; outline-offset: -1px; }
input,
button { height: 5rem; }
</style>
