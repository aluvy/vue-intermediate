<template>
  <div class="list">
    <ul>
      <li v-for="(a, i) in propsdata" v-bind:key="i" class="shadow">
        <span class="chkBtn" v-bind:class="{ checkBtnCompleted: a.completed }">
          <input :id="`chk_${i}`" type="checkbox" v-on:click="toggleComplete(a, i)">
          <label :for="`chk_${i}`"><i class="fa-solid fa-check"></i></label>
        </span>
        <p v-bind:class="{ textCompleted: a.completed }">{{ a.item }}</p>
        <button type="button" class="removeBtn" v-on:click="removeTodo(a, i)" aria-label="delete" title="delete">
          <i class="fa-regular fa-trash-can"></i>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    removeTodo: function(a, i) {
      this.$emit('removeTodo', a, i);
    },
    toggleComplete: function(a, i) {
      this.$emit('toggleComplete', a, i);
    }
  },
  props: {
    propsdata: Array
  }
}
</script>

<style scoped>
.list { margin: 2rem 0; }
.list ul li { display: flex; justify-content: space-between; gap: 0.6rem; padding: 1.2rem; background: #fff; border-radius: 1rem; }
.list ul li + li { margin-top: 0.6rem; }
.list ul li p { flex: 1 1 auto; margin-right: auto; line-height: 3rem; }
.list ul li .chkBtn { position: relative; flex: 0 0 3rem; max-width: 3rem; height: 3rem;  }
.list ul li .chkBtn input { position: absolute; left: 0; top: 0; width: 100%; height: 100%; border: 0 none; z-index: 0; }

.list ul li .chkBtn label { position: absolute; left: 0; top: 0; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; z-index: 1; }
.list ul li .removeBtn { flex: 0 0 3rem; max-width: 3rem; height: 3rem; opacity: .4; }
.list ul li .removeBtn:focus { opacity: 1; }

.checkBtnCompleted { color: #b3adad; }
.textCompleted { text-decoration: line-through; color: #b3adad; }
</style>
