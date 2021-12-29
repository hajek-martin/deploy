(function(t){function e(e){for(var a,o,i=e[0],c=e[1],l=e[2],d=0,p=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},s={app:0},r=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"09b4":function(t,e,n){},1475:function(t,e,n){},"2a30":function(t,e,n){"use strict";n("fa98")},"2e97":function(t,e,n){"use strict";n("afe4")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}}),n("router-view")],1)},r=[],o={name:"App"},i=o,c=(n("034f"),n("2877")),l=Object(c["a"])(i,s,r,!1,null,null,null),u=l.exports,d=n("8c4f"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("html",{attrs:{lang:"cs"}},[a("body",{staticClass:"text-center"},[a("main",{staticClass:"form-signin"},[a("form",[a("img",{staticClass:"mb-4",attrs:{src:n("f505"),alt:"",width:"72",height:"72"}}),a("h1",{staticClass:"h3 mb-3 fw-normal"},[t._v("Please sign in")]),a("div",{staticClass:"form-floating"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.input.username,expression:"input.username"}],staticClass:"form-control",attrs:{type:"email",placeholder:"name@example.com"},domProps:{value:t.input.username},on:{input:function(e){e.target.composing||t.$set(t.input,"username",e.target.value)}}})]),a("div",{staticClass:"form-floating"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.input.password,expression:"input.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.input.password},on:{input:function(e){e.target.composing||t.$set(t.input,"password",e.target.value)}}})]),t._m(0),t.showError?a("p",{attrs:{id:"error"}},[t._v("Username or Password is incorrect")]):t._e(),a("button",{staticClass:"w-100 btn btn-lg btn-primary",attrs:{type:"submit"},on:{click:t.login}},[t._v(" Sign in ")]),a("p",{staticClass:"mt-5 mb-3 text-muted"},[t._v("© 2021–2021")])])])])])},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"checkbox mb-3"},[n("label",[n("input",{attrs:{type:"checkbox",value:"remember-me"}}),t._v(" Remember me ")])])}],m=n("1da1"),h=n("5530"),v=(n("96cf"),n("bc3a")),k=n.n(v),b=n("2f62"),g={name:"Login",data:function(){return{input:{username:"",password:""},showError:!1}},methods:Object(h["a"])(Object(h["a"])({},Object(b["b"])(["setUser","setToken"])),{},{login:function(t){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.preventDefault(),""==e.input.username||""==e.input.password){n.next=8;break}return n.next=4,k.a.post("https://wea-todolist.herokuapp.com/api/users/valid",{email:e.input.username,password:e.input.password});case 4:a=n.sent,e.setUser(a.data.user),e.setToken(a.data.token),e.$router.push("/todolist");case 8:case"end":return n.stop()}}),n)})))()}})},w=g,x=(n("2e97"),Object(c["a"])(w,p,f,!1,null,"25171a7e",null)),_=x.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("body",[n("div",{staticClass:"page-content page-container",attrs:{id:"page-content"}},[n("div",{staticClass:"padding"},[n("div",{staticClass:"row container d-flex justify-content-center"},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"card px-3"},[n("div",{staticClass:"card-body"},[n("h4",{staticClass:"card-title"},[t._v("TO-DO List")]),n("AddTask"),n("FilterList"),n("TaskList")],1)]),n("Exports")],1)])])])])},C=[],O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"add-items d-flex"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"form-control todo-list-input",attrs:{type:"text",placeholder:"What do you need to do today?"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}}),n("button",{staticClass:"add btn btn-primary font-weight-bold todo-list-add-btn",on:{click:function(e){return t.TaskAdd()}}},[t._v(" Add ")])])},T=[],j={name:"AddTask",data:function(){return{content:""}},methods:{TaskAdd:function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("AddTask.TaskAdd"),""==this.content){t.next=4;break}return t.next=4,k.a.post("https://wea-todolist.herokuapp.com/api/tasks/",{content:this.content});case 4:this.content="";case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},E=j,R=(n("94ba"),Object(c["a"])(E,O,T,!1,null,"ae9266b6",null)),$=R.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"nav nav-pills todo-nav"},[n("li",{staticClass:"nav-item all-task active",attrs:{role:"presentation"},on:{click:function(e){return t.ApplyFilter(null)}}},[n("a",{staticClass:"nav-link"},[t._v("All")])]),n("li",{staticClass:"nav-item active-task",attrs:{role:"presentation"},on:{click:function(e){return t.ApplyFilter(0)}}},[n("a",{staticClass:"nav-link"},[t._v("Active")])]),n("li",{staticClass:"nav-item completed-task",attrs:{role:"presentation"},on:{click:function(e){return t.ApplyFilter(1)}}},[n("a",{staticClass:"nav-link"},[t._v("Completed")])])])},A=[],P=(n("4de4"),n("d3b7"),{name:"FilterList",data:function(){return{filter:null}},methods:{ApplyFilter:function(t){console.log("FilterList.ApplyFilter"),this.filter=t,this.$router.push({path:"todolist",query:{filter:this.filter}}).catch((function(){}))}}}),M=P,D=(n("c29b"),Object(c["a"])(M,L,A,!1,null,"1e9e4725",null)),S=D.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-wrapper"},[n("ul",{staticClass:"d-flex flex-column-reverse todo-list"},t._l(t.tasks,(function(e){return n("li",{key:e.id,class:{completed:e.completed}},[n("div",{staticClass:"form-check"},[n("label",{staticClass:"form-check-label"},[n("input",{staticClass:"checkbox",attrs:{type:"checkbox"},domProps:{checked:!!e.completed||null},on:{click:function(n){return t.TaskComplete(e.id,e.content)}}}),n("i",{staticClass:"input-helper"}),t._v(t._s(e.content))])]),n("div",{staticClass:"task-icons"},[n("b-icon",{staticClass:"remove mdi",attrs:{icon:"trash"},on:{click:function(n){return t.TaskDelete(e.id)}}}),n("b-icon",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-edit",modifiers:{"modal-edit":!0}}],staticClass:"edit mdi",attrs:{icon:"pencil"},on:{click:function(n){return t.TaskEdit(e.id)}}})],1)])})),0),n("ModalEdit")],1)},J=[],N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-modal",{attrs:{id:"modal-edit",title:"Edit Task"},on:{ok:t.HandleOk,show:t.ResetModal}},[n("form",{ref:"form"},[n("b-form-group",{attrs:{label:"Task:","label-for":"task-input"}},[n("b-form-input",{attrs:{id:"task_input",required:""},model:{value:t.task_input,callback:function(e){t.task_input=e},expression:"task_input"}})],1)],1)])},q=[],I={name:"ModalEdit",data:function(){return{task_input:"",id:null,completed:""}},methods:{HandleOk:function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("ModalEdit.HandleOk"),t.next=3,k.a.put("https://wea-todolist.herokuapp.com/api/tasks/"+this.id,{content:this.task_input,completed:this.completed});case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),ResetModal:function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("ModalEdit.ResetModal"),this.id=this.$route.query.id,t.next=4,k.a.get("https://wea-todolist.herokuapp.com/api/tasks/"+this.id);case 4:e=t.sent,this.task_input=e.data.content,this.completed=e.data.completed;case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},U=I,H=Object(c["a"])(U,N,q,!1,null,null,null),z=H.exports,W={name:"TaskList",data:function(){return{tasks:[],timer:void 0,filter:null}},methods:{Refresh:function(){var t=this,e=this.$route.query.filter;void 0!==e&&(this.filter=null==e?null:e),null==this.filter?k.a.get("https://wea-todolist.herokuapp.com/api/tasks/").then((function(e){t.tasks=e.data})):k.a.get("https://wea-todolist.herokuapp.com/api/tasks/completed/"+this.filter).then((function(e){t.tasks=e.data}))},TaskDelete:function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("TaskList.TaskDelete"),t.next=3,k.a.delete("https://wea-todolist.herokuapp.com/api/tasks/"+e);case 3:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),TaskComplete:function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(e,n){var a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("TaskList.TaskComplete"),t.next=3,k.a.get("https://wea-todolist.herokuapp.com/api/tasks/"+e);case 3:return a=t.sent,s=1,1===a.data.completed&&(s=0),t.next=8,k.a.put("https://wea-todolist.herokuapp.com/api/tasks/"+e,{content:n,completed:s});case 8:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),TaskEdit:function(t){console.log("TaskList.TaskEdit"+t),this.$router.push({path:"todolist",query:{id:t}}).catch((function(){}))}},created:function(){this.tasks=[],this.Refresh(),this.timer=setInterval(this.Refresh,100)},components:{ModalEdit:z}},B=W,G=(n("d3cd"),Object(c["a"])(B,F,J,!1,null,"59b5d4de",null)),K=G.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"nav exports"},[n("li",{on:{click:function(e){return t.ExportJson()}}},[n("b-button",{attrs:{size:"sm"}},[t._v("JSON")])],1)])},V=[],X={name:"Exports",data:function(){return{}},methods:{ExportJson:function(){console.log("Exports.ExportJson");var t=this.$router.resolve({name:"json"});window.open(t.href,"_blank")}}},Y=X,Z=(n("2a30"),Object(c["a"])(Y,Q,V,!1,null,"52ca8f86",null)),tt=Z.exports,et={name:"TodoList",data:function(){return{}},components:{AddTask:$,FilterList:S,TaskList:K,Exports:tt},head:{title:{inner:"ToDoList"}}},nt=et,at=(n("b9aa"),Object(c["a"])(nt,y,C,!1,null,"4ffebe12",null)),st=at.exports,rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v(t._s(t.tasks))])},ot=[],it={name:"ExportJSON",data:function(){return{tasks:""}},methods:{DownloadData:function(){var t=this;k.a.get("https://wea-todolist.herokuapp.com/api/tasks/").then((function(e){t.tasks=e.data}))}},created:function(){this.tasks="",this.DownloadData()},head:{title:function(){return{inner:"JSON"}}}},ct=it,lt=Object(c["a"])(ct,rt,ot,!1,null,null,null),ut=lt.exports;a["default"].use(b["a"]);var dt=new b["a"].Store({state:{user:null,token:null},mutations:{setUser:function(t,e){t.user=e},setToken:function(t,e){t.token=e}},actions:{},getters:{isLoggedIn:function(t){return!!t.token}}});a["default"].use(d["a"]);var pt=new d["a"]({routes:[{path:"/login",name:"login",component:_,beforeEnter:function(t,e,n){var a=dt.getters["isLoggedIn"];a?n("/todolist"):n()}},{path:"/todolist",name:"todolist",component:st,beforeEnter:function(t,e,n){var a=dt.getters["isLoggedIn"];a?n():n("/login")}},{path:"/todolist/json",name:"json",component:ut}]}),ft=n("342d"),mt=n.n(ft),ht=n("5f5b"),vt=n("b1e0");n("f9e3"),n("2dd8"),n("7d8e");a["default"].use(ht["a"]),a["default"].use(vt["a"]),a["default"].use(mt.a),a["default"].config.productionTip=!1,new a["default"]({router:pt,store:dt,render:function(t){return t(u)}}).$mount("#app")},"85ec":function(t,e,n){},"94ba":function(t,e,n){"use strict";n("1475")},afe4:function(t,e,n){},b9aa:function(t,e,n){"use strict";n("fcdc")},c29b:function(t,e,n){"use strict";n("f95f")},d3cd:function(t,e,n){"use strict";n("09b4")},f505:function(t,e,n){t.exports=n.p+"img/js.a2969c59.png"},f95f:function(t,e,n){},fa98:function(t,e,n){},fcdc:function(t,e,n){}});
//# sourceMappingURL=app.eecc4f49.js.map