(function(){"use strict";var t={5655:function(t,o,e){var n=e(6369),s=function(){var t=this,o=t._self._c;return o("div",{attrs:{id:"app"}},[o("TodoHeader"),o("TodoInput",{on:{addTodo:t.addTodo}}),o("TodoList",{attrs:{propsdata:t.todoItems},on:{removeTodo:t.removeTodo,toggleComplete:t.toggleComplete}}),o("TodoFooter",{on:{clearTodo:t.clearTodo}})],1)},r=[],a=(e(560),function(){var t=this;t._self._c;return t._m(0)}),l=[function(){var t=this,o=t._self._c;return o("header",[o("h1",[t._v("TODO it!")])])}],i=e(1001),d={},c=(0,i.Z)(d,a,l,!1,null,"61469da6",null),u=c.exports,f=function(){var t=this,o=t._self._c;return o("div",[o("fieldset",{staticClass:"shadow"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodoItem,expression:"newTodoItem"}],attrs:{type:"text"},domProps:{value:t.newTodoItem},on:{keypress:function(o){return!o.type.indexOf("key")&&t._k(o.keyCode,"enter",13,o.key,"Enter")?null:t.addTodo.apply(null,arguments)},input:function(o){o.target.composing||(t.newTodoItem=o.target.value)}}}),o("button",{ref:"focusBtn",attrs:{type:"button",title:"add","aria-label":"add"},on:{click:t.addTodo}},[o("i",{staticClass:"fa-solid fa-plus"})])]),o("Teleport",{attrs:{to:"body"}},[o("ModalPopup",{attrs:{show:t.showModal},on:{close:function(o){t.showModal=!1}},scopedSlots:t._u([{key:"header",fn:function(){return[o("h3",[t._v("warning!")])]},proxy:!0},{key:"body",fn:function(){return[o("p",[t._v("Enter the content.")])]},proxy:!0}])})],1)],1)},p=[],m=function(){var t=this,o=t._self._c;return o("Transition",{attrs:{name:"modal"}},[t.show?o("div",{staticClass:"modal-mask",class:{on:t.show}},[o("div",{ref:"modalContainer",staticClass:"modal-container",attrs:{tabindex:"0",role:"dialog","aria-modal":"true"}},[o("div",{staticClass:"modal-header"},[t._t("header",(function(){return[t._v("default header")]}))],2),o("div",{staticClass:"modal-body"},[t._t("body",(function(){return[t._v("default body")]}))],2),o("div",{staticClass:"modal-footer"},[t._t("footer")],2),o("button",{staticClass:"modal-default-button",on:{click:function(o){return t.$emit("close")},blur:t.focusOn}},[o("i",{staticClass:"fa-solid fa-xmark"})])])]):t._e()])},h=[],v={props:{show:Boolean},methods:{focusOn(){const t=this.$refs.modalContainer;setTimeout((()=>{t.focus()}),0)}},updated(){const t=this.show,o=t?this.$refs.modalContainer:this.$parent.$parent.$refs.focusBtn;setTimeout((()=>{o.focus()}),0)}},T=v,g=(0,i.Z)(T,m,h,!1,null,"20a66411",null),_=g.exports,b=e(5772),w={data(){return{newTodoItem:"",showModal:!1,focusBtn:this.$refs.focusBtn}},methods:{addTodo(){""!==this.newTodoItem.trim()?this.$emit("addTodo",this.newTodoItem):this.showModal=!this.showModal,this.clearInput()},clearInput(){this.newTodoItem=""}},components:{ModalPopup:_,Teleport:b.Z}},y=w,C=(0,i.Z)(y,f,p,!1,null,"783b5a22",null),I=C.exports,k=function(){var t=this,o=t._self._c;return o("div",{staticClass:"list"},[t.propsdata.length?o("TransitionGroup",{attrs:{name:"list",tag:"ul"}},t._l(t.propsdata,(function(e,n){return o("li",{key:e.time,staticClass:"shadow",class:{completed:e.completed}},[o("span",{staticClass:"chkBtn",class:{checkBtnCompleted:e.completed}},[o("input",{attrs:{id:`chk_${n}`,type:"checkbox"},on:{click:function(o){return t.toggleComplete(e)}}}),o("label",{attrs:{for:`chk_${n}`}},[o("i",{staticClass:"fa-solid fa-check"})])]),o("p",{class:{textCompleted:e.completed}},[t._v(t._s(e.item))]),o("button",{staticClass:"removeBtn",attrs:{type:"button","aria-label":"delete",title:"delete"},on:{click:function(o){return t.removeTodo(e)}}},[o("i",{staticClass:"fa-regular fa-trash-can"})])])})),0):o("div",{staticClass:"NoItems"},[t._v("no items")])],1)},x=[],O={methods:{removeTodo(t){this.$emit("removeTodo",t)},toggleComplete(t){this.$emit("toggleComplete",t)}},props:{propsdata:Array}},$=O,S=(0,i.Z)($,k,x,!1,null,"2ee3266e",null),Z=S.exports,B=function(){var t=this,o=t._self._c;return o("footer",[o("span",[t._v("© footer")]),o("button",{attrs:{type:"button"},on:{click:t.clearTodo}},[t._v("Clear All")])])},M=[],L={methods:{clearTodo(){this.$emit("clearTodo")}}},P=L,j=(0,i.Z)(P,B,M,!1,null,"783d0c4e",null),N=j.exports,A={name:"App",data(){return{todoItems:[]}},methods:{addTodo(t){const o=(new Date).toJSON().replaceAll(/[^0-9]/g,""),e={time:o,completed:!1,item:t};this.todoItems.push(e),this.setLocalStorage()},removeTodo(t){const o=this.todoItems.indexOf(t);this.todoItems.splice(o,1),this.setLocalStorage()},toggleComplete(t){const o=this.todoItems.indexOf(t);this.todoItems[o].completed=!this.todoItems[o].completed,this.setLocalStorage()},clearTodo(){this.todoItems=[],this.setLocalStorage()},setLocalStorage(){localStorage.setItem("todoItems",JSON.stringify(this.todoItems))}},created(){null!==localStorage.getItem("todoItems")&&(this.todoItems=JSON.parse(localStorage.getItem("todoItems")))},components:{TodoHeader:u,TodoInput:I,TodoList:Z,TodoFooter:N}},E=A,F=(0,i.Z)(E,s,r,!1,null,null,null),J=F.exports;n.ZP.config.productionTip=!1,new n.ZP({render:t=>t(J)}).$mount("#app")}},o={};function e(n){var s=o[n];if(void 0!==s)return s.exports;var r=o[n]={exports:{}};return t[n].call(r.exports,r,r.exports,e),r.exports}e.m=t,function(){var t=[];e.O=function(o,n,s,r){if(!n){var a=1/0;for(c=0;c<t.length;c++){n=t[c][0],s=t[c][1],r=t[c][2];for(var l=!0,i=0;i<n.length;i++)(!1&r||a>=r)&&Object.keys(e.O).every((function(t){return e.O[t](n[i])}))?n.splice(i--,1):(l=!1,r<a&&(a=r));if(l){t.splice(c--,1);var d=s();void 0!==d&&(o=d)}}return o}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[n,s,r]}}(),function(){e.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(o,{a:o}),o}}(),function(){e.d=function(t,o){for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){var t={143:0};e.O.j=function(o){return 0===t[o]};var o=function(o,n){var s,r,a=n[0],l=n[1],i=n[2],d=0;if(a.some((function(o){return 0!==t[o]}))){for(s in l)e.o(l,s)&&(e.m[s]=l[s]);if(i)var c=i(e)}for(o&&o(n);d<a.length;d++)r=a[d],e.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return e.O(c)},n=self["webpackChunkvue_todo"]=self["webpackChunkvue_todo"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(5655)}));n=e.O(n)})();
//# sourceMappingURL=app.aecc2607.js.map
