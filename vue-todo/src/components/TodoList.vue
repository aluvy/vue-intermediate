<template>
  <div class="list">
    <TransitionGroup name="list" tag="ul">
      <li v-for="(a, i) in propsdata" :key="a.time" class="shadow">
        <span class="chkBtn" v-bind:class="{ checkBtnCompleted: a.completed }">
          <input :id="`chk_${i}`" type="checkbox" @click="toggleComplete(a)">
          <label :for="`chk_${i}`"><i class="fa-solid fa-check"></i></label>
        </span>
        <p v-bind:class="{ textCompleted: a.completed }">{{ a.item }}</p>
        <button type="button" class="removeBtn" @click="removeTodo(a)" aria-label="delete" title="delete">
          <i class="fa-regular fa-trash-can"></i>
        </button>
      </li>
    </TransitionGroup>

  </div>
</template>

<script>
export default {
  methods: {
    removeTodo: function(a) {
      this.$emit('removeTodo', a);
    },
    toggleComplete: function(a) {
      this.$emit('toggleComplete', a);
    }
  },
  props: {
    propsdata: Array,
  }
}
</script>

<style scoped>
.list { margin: 2rem 0; }
.list ul { position: relative; }
.list ul li { display: flex; width: 100%; justify-content: space-between; gap: 0.6rem; padding: 1.2rem; background: #fff; border-radius: 1rem; transition: all .5s ease;  }
.list ul li + li { margin-top: 0.6rem; }
.list ul li p { flex: 1 1 auto; margin-right: auto; line-height: 3rem; }
.list ul li .chkBtn { position: relative; flex: 0 0 3rem; max-width: 3rem; height: 3rem;  }
.list ul li .chkBtn input { position: absolute; left: 0; top: 0; width: 100%; height: 100%; border: 0 none; z-index: 0; }

.list ul li .chkBtn label { position: absolute; left: 0; top: 0; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; z-index: 1; }
.list ul li .removeBtn { flex: 0 0 3rem; max-width: 3rem; height: 3rem; opacity: .4; }
.list ul li .removeBtn:focus { opacity: 1; }

.checkBtnCompleted { color: #b3adad; }
.textCompleted { text-decoration: line-through; color: #b3adad; }

/* .list-item {
  display: inline-block;
  margin-right: 10px;
} */
.list-enter-active,
.list-leave-active { transition: all .5s ease; }
.list-enter,
.list-leave-to { opacity: 0; transform: translateX(30px); }
.list-leave-active { position: absolute; }
</style>
