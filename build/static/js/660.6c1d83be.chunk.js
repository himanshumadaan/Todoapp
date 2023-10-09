"use strict";(self.webpackChunkcrm_project=self.webpackChunkcrm_project||[]).push([[660],{660:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var s=n(439),c=n(243),i=n(791),a=n(157),o=n(448),r=n(591),l=n(184),d=function(){var t=(0,i.useState)(!1),e=(0,s.Z)(t,2),n=e[0],d=e[1],u=(0,i.useState)(null),h=(0,s.Z)(u,2),m=h[0],x=h[1],j=(0,i.useState)([]),p=(0,s.Z)(j,2),f=p[0],g=p[1],b=(0,i.useState)(!1),v=(0,s.Z)(b,2),N=v[0],Z=v[1],C=(0,i.useState)(null),A=(0,s.Z)(C,2),k=A[0],w=A[1],D=(0,i.useState)(null),T=(0,s.Z)(D,2),S=T[0],y=T[1],U=(0,i.useState)(""),M=(0,s.Z)(U,2),E=M[0],F=M[1];f.filter((function(t){var e;return""===E||null!==(e=t.name)&&void 0!==e&&e.toLowerCase().includes(E.toLowerCase())?t:void 0}));(0,i.useEffect)((function(){L()}),[]);var H=f.filter((function(t){return"pending"===t.status})).length,P=f.filter((function(t){return"completed"===t.status})).length,I=function(){return d(!1)},L=function(){c.Z.get("http://localhost:4300/todo").then((function(t){return g(t.data)})).catch((function(t){return console.log(t)}))};return(0,i.useEffect)((function(){L()}),[]),(0,l.jsx)("div",{className:"main-content",children:(0,l.jsx)("div",{className:"page-content",children:(0,l.jsxs)("div",{className:"container-fluid",children:[(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-12",children:(0,l.jsx)("div",{className:"page-title-box d-sm-flex align-items-center justify-content-between",children:(0,l.jsx)("h4",{className:"mb-sm-0 font-size-18",children:"To Do"})})})}),(0,l.jsxs)("div",{className:" d-flex justify-content-end",children:[(0,l.jsx)("input",{type:"search",className:"srch-inpt"}),(0,l.jsx)("span",{children:(0,l.jsx)(a.Z,{className:"srch-inpt-1",onInput:function(t){return F(t.target.value)},children:"search"})}),(0,l.jsx)("button",{className:"mx-1 btn btn-sm btn-primary",onClick:function(){return d(!0)},children:"add todo"}),(0,l.jsxs)("button",{className:"mx-2 btn btn-sm btn-success",children:["COMPLETED = ",P]}),(0,l.jsxs)("button",{className:"mx-1 btn btn-sm btn-warning",children:["PANDING = ",H]})]}),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(o.Z,{show:n,onHide:I,children:[(0,l.jsx)(o.Z.Header,{closeButton:!0,children:(0,l.jsx)(o.Z.Title,{children:"Create ToDo"})}),(0,l.jsxs)(o.Z.Body,{children:[" ",(0,l.jsx)("input",{className:"form-control",placeholder:"todo....",onChange:function(t){return x(t.target.value)}})]}),(0,l.jsxs)(o.Z.Footer,{children:[(0,l.jsx)(a.Z,{variant:"secondary",onClick:I,children:"Close"}),(0,l.jsx)(a.Z,{variant:"primary",onClick:function(){var t={todo:m,status:"pending",createdAt:(new Date).toDateString(),Assigntime:"".concat((new Date).getHours(),":").concat((new Date).getMinutes()),updateAt:null,UpdatedTime:null};c.Z.post("http://localhost:4300/todo",t).then((function(t){t&&(I(),L())})).catch((function(t){return console.log(t)}))},children:"Save"})]})]})}),(0,l.jsxs)(r.Z,{striped:!0,bordered:!0,hover:!0,className:"mt-4",children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"Id"}),(0,l.jsx)("th",{children:"Mark as done "}),(0,l.jsx)("th",{children:"Todo"}),(0,l.jsx)("th",{children:"Status"}),(0,l.jsx)("th",{children:"createdAt"}),(0,l.jsx)("th",{children:"Assigntime"}),(0,l.jsx)("th",{children:"Updated Time"}),(0,l.jsx)("th",{children:"UpdatedAt"}),(0,l.jsx)("th",{children:"Action"})]})}),(0,l.jsx)("tbody",{children:f.map((function(t,e){var n;return(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:t.id}),(0,l.jsx)("td",{children:(0,l.jsx)("input",{type:"checkbox",defaultChecked:"completed"==t.status,onClick:function(e){return function(t,e){var n,s=t.target.checked,i=e.id;n=s?{status:"completed",updateAt:(new Date).toDateString(),UpdatedTime:"".concat((new Date).getHours(),":").concat((new Date).getMinutes())}:{status:"pending",updateAt:null,UpdatedTime:null},c.Z.patch("http://localhost:4300/todo/".concat(i),n).then((function(t){L()})).catch((function(t){return console.log(t)}))}(e,t)}})}),(0,l.jsx)("td",{children:N&&k===e?(0,l.jsx)("input",{defaultValue:t.todo,onChange:function(t){return y(t.target.value)}}):t.todo}),(0,l.jsx)("td",{className:"pending"===t.status?"text-primary":"completed"===t.status&&"text-success",children:t.status}),(0,l.jsx)("td",{children:t.createdAt}),(0,l.jsx)("td",{children:(null===(n=t.Assigntime)||void 0===n?void 0:n.split(":")[0])<12?t.Assigntime+" AM":t.Assigntime+"PM"}),(0,l.jsx)("td",{children:t.UpdatedTime?t.UpdatedTime.split(":")[0]<12?t.UpdatedTime+" AM":t.UpdatedTime+" PM":"-"}),(0,l.jsx)("td",{children:t.updateAt?t.updateAt:"-"}),(0,l.jsx)("td",{children:(0,l.jsx)(l.Fragment,{children:N&&k===e?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("button",{className:"btn btn-sm btn-danger mx-3",onClick:function(){return Z(!1)},children:"Cancel"}),(0,l.jsx)("button",{className:" btn btn-sm btn-success",onClick:function(){return function(t){var e=t.id,n={todo:S||t.todo};c.Z.patch("http://localhost:4300/todo/".concat(e),n).then((function(t){y(null),w(null),Z(!1),L()})).catch((function(t){console.log(t)}))}(t)},children:"Save"})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("button",{className:"btn btn-sm btn-danger mx-3",onClick:function(){return function(t){var e=t.id;c.Z.delete("http://localhost:4300/todo/".concat(e)).then((function(t){return L()})).catch((function(t){return console.log(t)}))}(t)},children:"Delete"}),(0,l.jsx)("button",{disabled:"completed"===t.status,className:" btn btn-sm btn-success",onClick:function(){w(e),Z(!0)},children:"Edit"})]})})})]})}))})]})]})})})}}}]);
//# sourceMappingURL=660.6c1d83be.chunk.js.map