<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask" :class="{ on: show }">
      <div class="modal-container" ref="modalContainer" tabindex="0" role="dialog" aria-modal="true">

        <div class="modal-header">
          <slot name="header">default header</slot>
        </div>

        <div class="modal-body">
          <slot name="body">default body</slot>
        </div>

        <div class="modal-footer"> 
          <slot name="footer"></slot>  
        </div>

        <button class="modal-default-button" @click="$emit('close')" @blur="focusOn">
          <i class="fa-solid fa-xmark"></i>
        </button>

      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  props: {
    show: Boolean
  },
  methods: {
    focusOn () {
      const target = this.$refs.modalContainer;
      setTimeout(()=>{ target.focus() }, 0);
    }
  },
  updated () {
    const isOpen = this.show;
    const target = isOpen ? this.$refs.modalContainer : this.$parent.$parent.$refs.focusBtn;
    setTimeout(()=>{ target.focus() }, 0);
  },
}
</script>

<style scoped>
.modal-mask { position: fixed; left: 0; top: 0; display: flex; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); transition: opacity .3s ease; z-index: 9998; }
.modal-container { position: relative; width: 30rem; margin: auto; padding: 2rem 3rem; background-color: #fff; border-radius: 2px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33); transition: all .3s ease; }

.modal-header h3 { padding-right: 3rem; color: #42b983; }
.modal-body { margin: 2rem 0; }
.modal-default-button { position: absolute; right: 2rem; top: 1.4rem; width: 3rem; height: 3rem; }

.modal-enter-active { transition: all .2s ease; }
.modal-leave-active { transition: all .3s ease; }
.modal-enter,
.modal-leave-to { opacity: 0; }
.modal-enter .modal-container,
.modal-leave-to .modal-container{ transform: scale(1.1); -webkit-transform: scale(1.1); }
</style>
