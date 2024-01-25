<template>
  <div class="todoList">
    <TransitionGroup name="todoList" tag="ul" v-if="this.todoItems.length">
      <li v-for="(a, i) in this.todoItems" :key="a.time" class="shadow" :class="{ completed: a.completed }">
        <span class="chkBtn" v-bind:class="{ checkBtnCompleted: a.completed }">
          <input :id="`chk_${i}`" type="checkbox" @click="toggleComplete({ todoItem: a })">
          <label :for="`chk_${i}`"><i class="fa-solid fa-check"></i></label>
        </span>
        <p v-bind:class="{ textCompleted: a.completed }">{{ a.item }}</p>
        <button type="button" class="removeBtn" @click="removeTodo({ todoItem: a })" aria-label="delete" title="delete">
          <i class="fa-regular fa-trash-can"></i>
        </button>
      </li>
    </TransitionGroup>
    <div class="NoItems" v-else>no items 💬</div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters({ todoItems: 'getTodoItems'}),
  },
  methods: {
    ...mapMutations(['removeTodo', 'toggleComplete']),
  },
}
</script>

<style>
.todoList { margin: 2rem 0; }
.todoList ul { position: relative; }
.todoList ul li { display: flex; width: 100%; justify-content: space-between; gap: 0.6rem; padding: 1.2rem; background: #fff; border-radius: 1rem; transition: all .5s ease;  }
.todoList ul li + li { margin-top: 0.6rem; }
.todoList ul li p { flex: 1 1 auto; margin-right: auto; line-height: 3rem; }
.todoList ul li .chkBtn { position: relative; flex: 0 0 3rem; max-width: 3rem; height: 3rem;  }
.todoList ul li .chkBtn input { position: absolute; left: 0; top: 0; width: 100%; height: 100%; border: 0 none; z-index: 0; }
.todoList ul li .chkBtn label { position: absolute; left: 0; top: 0; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; z-index: 1; }
.todoList ul li .removeBtn { flex: 0 0 3rem; max-width: 3rem; height: 3rem; opacity: .4; }
.todoList ul li .removeBtn:focus { opacity: 1; }
.todoList ul li.completed .chkBtn label { color: #b3adad; }
.todoList ul li.completed p { text-decoration: line-through; color: #b3adad; }
.todoList .NoItems { font-size: 1.4rem; padding: 3rem 0; text-align: center; opacity: .3; }

/* transition */
.todoList-enter-active,
.todoList-leave-active { transition: all .5s ease; }
.todoList-enter,
.todoList-leave-to { opacity: 0; transform: translateX(30px); }
.todoList-leave-active { position: absolute; }
</style>
