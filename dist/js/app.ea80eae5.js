(function(){"use strict";var o={9199:function(o,t,e){var n=e(9242),r=e(3396);function d(o,t,e,n,d,c){const a=(0,r.up)("HeaderLayout"),i=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(a),(0,r.Wm)(i)],64)}const c=o=>((0,r.dD)("data-v-0193a99c"),o=o(),(0,r.Cn)(),o),a={class:"header"},i=c((()=>(0,r._)("h1",null,"TodoList",-1))),u={id:"nav",class:"nav-container"},s=(0,r.Uk)("Home"),l=(0,r.Uk)("About");function p(o,t,e,n,d,c){const p=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("header",a,[i,(0,r._)("nav",u,[(0,r.Wm)(p,{to:"/todo/main"},{default:(0,r.w5)((()=>[s])),_:1}),(0,r.Wm)(p,{to:"/todo/about"},{default:(0,r.w5)((()=>[l])),_:1})])])}var h={name:"HeaderLayout"},m=e(89);const f=(0,m.Z)(h,[["render",p],["__scopeId","data-v-0193a99c"]]);var v=f,b={name:"App",components:{HeaderLayout:v}};const _=(0,m.Z)(b,[["render",d]]);var k=_,g=e(678);const w=o=>((0,r.dD)("data-v-7b3b495a"),o=o(),(0,r.Cn)(),o),T={class:"about-container container"},y=w((()=>(0,r._)("h3",null,"Version 1.1.0",-1))),C=[y];function D(o,t){return(0,r.wg)(),(0,r.iD)("div",T,C)}const O={},j=(0,m.Z)(O,[["render",D],["__scopeId","data-v-7b3b495a"]]);var A=j;const H={class:"container"},W=(0,r.Uk)("About");function E(o,t,e,n,d,c){const a=(0,r.up)("AddTodoComp"),i=(0,r.up)("TodosComp"),u=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",H,[(0,r.Wm)(a,{onAddTodo:c.addNewTodo},null,8,["onAddTodo"]),(0,r.Wm)(i,{todos:d.todos,onDelTodo:c.deleteTodo},null,8,["todos","onDelTodo"])]),(0,r.Wm)(u,{to:"/about"},{default:(0,r.w5)((()=>[W])),_:1})],64)}function I(o,t,e,n,d,c){const a=(0,r.up)("TodoItemComp");return(0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.todos,(t=>((0,r.wg)(),(0,r.iD)("div",{key:t.id},[(0,r.Wm)(a,{todo:t,checked:t.completed,onDelTodo:e=>o.$emit("del-todo",t.id),onCheckChange:c.toggleCheck},null,8,["todo","checked","onDelTodo","onCheckChange"])])))),128)}var Z=e(7139);const x=["checked"];function L(o,t,e,n,d,c){return(0,r.wg)(),(0,r.iD)("div",{class:(0,Z.C_)(["todo-item",e.todo.completed?"is-complete":""])},[(0,r._)("input",{type:"checkbox",onClick:t[0]||(t[0]=t=>o.$emit("check-change",e.todo)),checked:e.checked},null,8,x),(0,r._)("p",null,(0,Z.zw)(e.todo.title),1),(0,r._)("button",{class:"del",onClick:t[1]||(t[1]=t=>o.$emit("del-todo",e.todo.id))},"X")],2)}var $={name:"TodoItemComp",props:{todo:Object,checked:Boolean},emits:["check-change"]};const P=(0,m.Z)($,[["render",L],["__scopeId","data-v-6e24da89"]]);var S=P,U={name:"TodosComp",props:{todos:Array},components:{TodoItemComp:S},emits:["del-todo"],methods:{toggleCheck(o){o.completed=!o.completed}}};const N=(0,m.Z)(U,[["render",I]]);var V=N;const Y=o=>((0,r.dD)("data-v-0741e5f8"),o=o(),(0,r.Cn)(),o),M=Y((()=>(0,r._)("input",{value:"Submit",type:"submit",class:"btn"},null,-1)));function z(o,t,e,d,c,a){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("form",{onSubmit:t[1]||(t[1]=(0,n.iM)((t=>{o.$emit("add-todo",{title:this.title,completed:!1}),this.title=""}),["prevent"]))},[(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=o=>c.title=o),name:"title",placehodler:"add todo ..."},null,512),[[n.nr,c.title]]),M],32)])}var B={name:"AddTodoComp",data(){return{title:""}},method:{}};const F=(0,m.Z)(B,[["render",z],["__scopeId","data-v-0741e5f8"]]);var J=F,K={name:"HomeView",components:{AddTodoComp:J,TodosComp:V},data(){return{todos:[]}},methods:{deleteTodo(o){fetch(`https://jsonplaceholder.typicode.com/todos/${o}`,{method:"DELETE"}).then((o=>o.json())).then((()=>{this.todos=this.todos.filter((t=>t.id!==o))})).catch((o=>{console.error("Error:",o)}))},addNewTodo(o){const t=o;fetch("https://jsonplaceholder.typicode.com/todos",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((o=>o.json())).then((o=>{this.todos=[...this.todos,o]})).catch((o=>{console.error("Error:",o)}))}},created(){fetch("https://jsonplaceholder.typicode.com/todos?_limit=5").then((o=>o.json())).then((o=>{this.todos=o})).catch((o=>{console.error("Error:",o)}))}};const X=(0,m.Z)(K,[["render",E]]);var q=X;const G=[{path:"/todo/about",name:"About",component:A},{path:"/todo/main",name:"Home",component:q}],Q=(0,g.p7)({history:(0,g.PO)("/"),routes:G});var R=Q;(0,n.ri)(k).use(R).mount("#app")}},t={};function e(n){var r=t[n];if(void 0!==r)return r.exports;var d=t[n]={exports:{}};return o[n](d,d.exports,e),d.exports}e.m=o,function(){var o=[];e.O=function(t,n,r,d){if(!n){var c=1/0;for(s=0;s<o.length;s++){n=o[s][0],r=o[s][1],d=o[s][2];for(var a=!0,i=0;i<n.length;i++)(!1&d||c>=d)&&Object.keys(e.O).every((function(o){return e.O[o](n[i])}))?n.splice(i--,1):(a=!1,d<c&&(c=d));if(a){o.splice(s--,1);var u=r();void 0!==u&&(t=u)}}return t}d=d||0;for(var s=o.length;s>0&&o[s-1][2]>d;s--)o[s]=o[s-1];o[s]=[n,r,d]}}(),function(){e.n=function(o){var t=o&&o.__esModule?function(){return o["default"]}:function(){return o};return e.d(t,{a:t}),t}}(),function(){e.d=function(o,t){for(var n in t)e.o(t,n)&&!e.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:t[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"===typeof window)return window}}()}(),function(){e.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)}}(),function(){var o={143:0};e.O.j=function(t){return 0===o[t]};var t=function(t,n){var r,d,c=n[0],a=n[1],i=n[2],u=0;if(c.some((function(t){return 0!==o[t]}))){for(r in a)e.o(a,r)&&(e.m[r]=a[r]);if(i)var s=i(e)}for(t&&t(n);u<c.length;u++)d=c[u],e.o(o,d)&&o[d]&&o[d][0](),o[d]=0;return e.O(s)},n=self["webpackChunktodo_vue"]=self["webpackChunktodo_vue"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(9199)}));n=e.O(n)})();
//# sourceMappingURL=app.ea80eae5.js.map