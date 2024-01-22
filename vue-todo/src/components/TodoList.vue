<template>
  <div class="list">
    <ul>
      <li v-for="(a, i) in todoItems" v-bind:key="i" class="shadow">
        <span class="chkBtn" v-bind:class="{ checkBtnCompleted: a.completed }">
          <input :id="`chk_${i}`" type="checkbox" v-on:click="toggleCompete(a, i)">
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
  data: function() {
    return {
      todoItems: [],
    }
  },
  methods: {
    removeTodo: function(a, i) {
      console.log(a, i, this.todoItems);
      localStorage.removeItem(a.item);
      this.todoItems.splice(i, 1);
    },
    toggleCompete: function(a, i) {
      a.completed = !a.completed;
      localStorage.setItem(a.item, JSON.stringify(a));
      this.todoItems[i] = a;
    }
  },
  created: function() {
    if( localStorage.length > 0 ){
      for(var i=0; i<localStorage.length; i++){
        let item = JSON.parse(localStorage.getItem(localStorage.key(i)));
        this.todoItems.push(item);
      }
    }
  }
}
</script>

<style scoped>
.list { margin: 2rem 0; }
.list ul li { display: flex; justify-content: space-between; gap: 0.6rem; padding: 1.2rem; background: #fff; border-radius: 1rem; }
.list ul li + li { margin-top: 0.6rem; }
.list ul li p { flex: 1 1 auto; margin-right: auto; line-height: 3rem; }
.list ul li .chkBtn { position: relative; flex: 0 0 3rem; max-width: 3rem; height: 3rem;  }
.list ul li .chkBtn input { position: absolute; left: 0; top: 0; width: 100%; height: 100%; border: 0 none; z-index: 0; opacity: 0; }
.list ul li .chkBtn label { position: absolute; left: 0; top: 0; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; z-index: 1; }
.list ul li .removeBtn { flex: 0 0 3rem; max-width: 3rem; height: 3rem; opacity: .4; }

.checkBtnCompleted { color: #b3adad; }
.textCompleted { text-decoration: line-through; color: #b3adad; }
</style>
