(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{38:function(e,t,c){},39:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},71:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),a=c(16),r=c.n(a),i=c(12),o=c.n(i),d=c(14),j=c(13),l=(c(38),c(31)),u=c.n(l),b=(c(39),c(17)),h=c(2),O=function(e){var t=e.todo;return Object(h.jsxs)("div",{className:"todoDetails",children:[Object(h.jsx)("div",{className:"todo",children:Object(h.jsx)("p",{children:t.id})}),Object(h.jsx)("div",{className:"todo",children:Object(h.jsx)("p",{children:t.title})}),Object(h.jsx)("div",{className:"todo",children:Object(h.jsx)("p",{children:!1!==t.completed?"Completd":"Icompleted"})}),Object(h.jsx)("div",{className:"todo",children:Object(h.jsx)("div",{className:"todoButton",children:Object(h.jsx)(b.b,{to:"/user_details",children:"View user"})})})]})},x=function(e){var t=e.todos;return t.slice(0,5).map((function(e){return Object(h.jsx)(O,{todo:e},e.id)}))},p=c(15),v=c.n(p);var f=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(!1),r=Object(j.a)(a,2),i=r[0],l=r[1],b=Object(s.useState)(""),O=Object(j.a)(b,2),p=O[0],f=O[1],m=Object(s.useState)([]),N=Object(j.a)(m,2),g=N[0],w=N[1];return Object(s.useEffect)((function(){(function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,v.a.get("https://jsonplaceholder.typicode.com/todos");case 3:t=e.sent,l(!1),n(t.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(h.jsxs)("div",{className:"home",children:[Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)("div",{className:"title",children:Object(h.jsx)("h1",{children:"Todos"})}),Object(h.jsxs)("div",{className:"searchBar",children:[Object(h.jsx)("div",{className:"searchBar_icon",children:Object(h.jsx)(u.a,{})}),Object(h.jsx)("div",{className:"searchBar_title",children:Object(h.jsx)("input",{type:"text",style:{border:"none"},placeholder:"Search...",onChange:function(e){if(f(e.target.value),""!==p){var t=c.filter((function(e){return e.title.toLowerCase().includes(p.toLowerCase())}));w(t)}else w(c)},value:p})})]})]}),Object(h.jsxs)("div",{className:"todoList",children:[Object(h.jsx)("div",{className:"todo",children:"ToDo ID"}),Object(h.jsx)("div",{className:"todo",children:"Title"}),Object(h.jsx)("div",{className:"todo",children:"Status"}),Object(h.jsx)("div",{className:"todo",children:"Action"})]}),i?Object(h.jsx)("p",{children:"Loading..."}):Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(x,{todos:p.length<1?c:g})})]})},m=c(3);c(68),c(69);var N=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)([]),r=Object(j.a)(a,2),i=(r[0],r[1]);return Object(s.useEffect)((function(){(function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,n(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(s.useEffect)((function(){(function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://jsonplaceholder.typicode.com/todos");case 2:t=e.sent,i(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(h.jsxs)("div",{className:"user",children:[Object(h.jsx)("h1",{children:"User Details"}),Object(h.jsxs)("div",{className:"userList",children:[Object(h.jsx)("div",{className:"user",children:"ToDo ID"}),Object(h.jsx)("div",{className:"user",children:"ToDo Title"}),Object(h.jsx)("div",{className:"user",children:"UserId"}),Object(h.jsx)("div",{className:"user",children:"Name"}),Object(h.jsx)("div",{className:"user",children:"Email"})]}),c.map((function(e){}))]})};var g=function(){return Object(h.jsx)(b.a,{children:Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(m.c,{children:[Object(h.jsx)(m.a,{path:"/user_details",children:Object(h.jsx)(N,{})}),Object(h.jsx)(m.a,{path:"/",children:Object(h.jsx)(f,{})})]})})})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,83)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),a(e),r(e)}))};r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root")),w()}},[[71,1,2]]]);
//# sourceMappingURL=main.174cc77d.chunk.js.map