(function(){"use strict";var t={8029:function(t,o,e){var n=e(7195),s=function(){var t=this,o=t._self._c;return o("div",{attrs:{id:"app"}},[o("TodoHeader"),o("TodoInput"),o("TodoList"),o("TodoFooter")],1)},r=[],a=function(){var t=this;t._self._c;return t._m(0)},i=[function(){var t=this,o=t._self._c;return o("header",[o("h1",[t._v("TODO it!")])])}],l=e(1001),c={},d=(0,l.Z)(c,a,i,!1,null,"70e5d1b8",null),u=d.exports,m=function(){var t=this,o=t._self._c;return o("div",[o("fieldset",{staticClass:"shadow"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodoItem,expression:"newTodoItem"}],attrs:{type:"text"},domProps:{value:t.newTodoItem},on:{keypress:function(o){return!o.type.indexOf("key")&&t._k(o.keyCode,"enter",13,o.key,"Enter")?null:t.addTodo.apply(null,arguments)},input:function(o){o.target.composing||(t.newTodoItem=o.target.value)}}}),o("button",{ref:"focusBtn",attrs:{type:"button",title:"add","aria-label":"add"},on:{click:t.addTodo}},[o("i",{staticClass:"fa-solid fa-plus"})])]),o("Teleport",{attrs:{to:"body"}},[o("ModalPopup",{attrs:{show:t.showModal},on:{close:function(o){t.showModal=!1}},scopedSlots:t._u([{key:"header",fn:function(){return[o("h3",[t._v("warning!")])]},proxy:!0},{key:"body",fn:function(){return[o("p",[t._v("Enter the content.")])]},proxy:!0}])})],1)],1)},f=[],p=function(){var t=this,o=t._self._c;return o("Transition",{attrs:{name:"modal"}},[t.show?o("div",{staticClass:"modal-mask",class:{on:t.show}},[o("div",{ref:"modalContainer",staticClass:"modal-container",attrs:{tabindex:"0",role:"dialog","aria-modal":"true"}},[o("div",{staticClass:"modal-header"},[t._t("header",(function(){return[t._v("default header")]}))],2),o("div",{staticClass:"modal-body"},[t._t("body",(function(){return[t._v("default body")]}))],2),o("div",{staticClass:"modal-footer"},[t._t("footer")],2),o("button",{staticClass:"modal-default-button",on:{click:function(o){return t.$emit("close")},blur:t.focusOn}},[o("i",{staticClass:"fa-solid fa-xmark"})])])]):t._e()])},h=[],v={props:{show:Boolean},methods:{focusOn(){const t=this.$refs.modalContainer;setTimeout((()=>{t.focus()}),0)}},updated(){const t=this.show,o=t?this.$refs.modalContainer:this.$parent.$parent.$refs.focusBtn;setTimeout((()=>{o.focus()}),0)}},T=v,g=(0,l.Z)(T,p,h,!1,null,"17b3c3ce",null),_=g.exports,b=e(5774),I={data(){return{newTodoItem:"",showModal:!1,focusBtn:this.$refs.focusBtn}},methods:{addTodo(){const t=this.newTodoItem.trim();""!==t?this.$store.commit("addTodo",{newTodoItem:t}):this.showModal=!this.showModal,this.clearInput()},clearInput(){this.newTodoItem=""}},components:{ModalPopup:_,Teleport:b.Z}},w=I,y=(0,l.Z)(w,m,f,!1,null,"df990fa6",null),C=y.exports,k=function(){var t=this,o=t._self._c;return o("div",{staticClass:"list"},[this.$store.state.todoItems.length?o("TransitionGroup",{attrs:{name:"list",tag:"ul"}},t._l(this.$store.state.todoItems,(function(e,n){return o("li",{key:e.time,staticClass:"shadow",class:{completed:e.completed}},[o("span",{staticClass:"chkBtn",class:{checkBtnCompleted:e.completed}},[o("input",{attrs:{id:`chk_${n}`,type:"checkbox"},on:{click:function(o){return t.toggleComplete(e)}}}),o("label",{attrs:{for:`chk_${n}`}},[o("i",{staticClass:"fa-solid fa-check"})])]),o("p",{class:{textCompleted:e.completed}},[t._v(t._s(e.item))]),o("button",{staticClass:"removeBtn",attrs:{type:"button","aria-label":"delete",title:"delete"},on:{click:function(o){return t.removeTodo(e)}}},[o("i",{staticClass:"fa-regular fa-trash-can"})])])})),0):o("div",{staticClass:"NoItems"},[t._v("no items")])],1)},x=[],O={methods:{removeTodo(t){this.$store.commit("removeTodo",{todoItem:t})},toggleComplete(t){this.$store.commit("toggleComplete",{todoItem:t})}}},$=O,S=(0,l.Z)($,k,x,!1,null,"4e7d8392",null),Z=S.exports,P=function(){var t=this,o=t._self._c;return o("footer",[o("span",[t._v("© footer")]),o("button",{attrs:{type:"button"},on:{click:t.clearTodo}},[t._v("Clear All")])])},B=[],M={methods:{clearTodo(){this.$store.commit("clearTodo")}}},L=M,j=(0,l.Z)(L,P,B,!1,null,"40caa5cb",null),N=j.exports,A={name:"App",components:{TodoHeader:u,TodoInput:C,TodoList:Z,TodoFooter:N}},E=A,F=(0,l.Z)(E,s,r,!1,null,null,null),J=F.exports,D=(e(560),e(408));n.ZP.use(D.ZP);const H={fetch(){let t=[];return null!==localStorage.getItem("todoItems")&&(t=JSON.parse(localStorage.getItem("todoItems"))),t}},G=new D.ZP.Store({state:{todoItems:H.fetch()},mutations:{addTodo(t,o){const e=(new Date).toJSON().replaceAll(/[^0-9]/g,""),n={time:e,completed:!1,item:o.newTodoItem};t.todoItems.push(n),this.commit("setLocalStorage")},removeTodo(t,o){const e=t.todoItems.indexOf(o.todoItem);t.todoItems.splice(e,1),this.commit("setLocalStorage")},toggleComplete(t,o){const e=t.todoItems.indexOf(o.todoItem);t.todoItems[e].completed=!t.todoItems[e].completed,this.commit("setLocalStorage")},clearTodo(t){t.todoItems=[],this.commit("setLocalStorage")},setLocalStorage(t){localStorage.setItem("todoItems",JSON.stringify(t.todoItems))}},getters:{}});n.ZP.config.productionTip=!1,new n.ZP({store:G,render:t=>t(J)}).$mount("#app")}},o={};function e(n){var s=o[n];if(void 0!==s)return s.exports;var r=o[n]={exports:{}};return t[n].call(r.exports,r,r.exports,e),r.exports}e.m=t,function(){var t=[];e.O=function(o,n,s,r){if(!n){var a=1/0;for(d=0;d<t.length;d++){n=t[d][0],s=t[d][1],r=t[d][2];for(var i=!0,l=0;l<n.length;l++)(!1&r||a>=r)&&Object.keys(e.O).every((function(t){return e.O[t](n[l])}))?n.splice(l--,1):(i=!1,r<a&&(a=r));if(i){t.splice(d--,1);var c=s();void 0!==c&&(o=c)}}return o}r=r||0;for(var d=t.length;d>0&&t[d-1][2]>r;d--)t[d]=t[d-1];t[d]=[n,s,r]}}(),function(){e.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(o,{a:o}),o}}(),function(){e.d=function(t,o){for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){var t={143:0};e.O.j=function(o){return 0===t[o]};var o=function(o,n){var s,r,a=n[0],i=n[1],l=n[2],c=0;if(a.some((function(o){return 0!==t[o]}))){for(s in i)e.o(i,s)&&(e.m[s]=i[s]);if(l)var d=l(e)}for(o&&o(n);c<a.length;c++)r=a[c],e.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return e.O(d)},n=self["webpackChunkvue_todo"]=self["webpackChunkvue_todo"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(8029)}));n=e.O(n)})();
//# sourceMappingURL=app.2e66ee14.js.map