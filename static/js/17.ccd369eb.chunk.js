(this.webpackJsonpdsmorais=this.webpackJsonpdsmorais||[]).push([[17],{192:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t(126),i=t(127),r=t(167),s=t.n(r),o=t(125),d=t(63),l=t(35),u=t(32),b=t(196),m=t(168),j=t.n(m),h=t(26),p=function(e){var n=Object(a.useState)({}),t=Object(u.a)(n,2),c=t[0],i=t[1],r=Object(a.useState)({}),s=Object(u.a)(r,2),o=s[0],m=s[1],p=Object(a.useState)(!1),O=Object(u.a)(p,2),x=O[0],g=O[1];Object(a.useEffect)((function(){var e;0===Object.keys(o).length&&x&&(i(""),e="success",b.a[e]({message:"Success",description:"Your message has been sent!"}))}),[o,x]);return{handleChange:function(e){e.persist(),i((function(n){return Object(l.a)(Object(l.a)({},n),{},Object(d.a)({},e.target.name,e.target.value))})),m((function(n){return Object(l.a)(Object(l.a)({},n),{},Object(d.a)({},e.target.name,""))}))},handleSubmit:function(n){n.preventDefault(),m(e(c));var t="https://mailthis.to/".concat(h.a.contacts.email);3===Object.keys(c).length&&j.a.post(t,Object(l.a)({},c)).then((function(){g(!0)}))},values:c,errors:o}};function O(e){var n={};return e.name||(n.name="Name is required"),e.email?/\S+@\S+\.\S+/.test(e.email)||(n.email="Email address is invalid"):n.email="Email address is required",e.message||(n.message="Message is required"),n}var x,g,f,v,y,w,S,k,C,E,Y=t(4),q=t(3),z=t(58),M=Object(q.c)(z.h)(x||(x=Object(Y.a)(["\nposition: relative;\nbottom: calc(72px * 1.75);\ncolor:",""])),(function(e){return e.theme.background})),N=Object(q.c)(z.h)(g||(g=Object(Y.a)(["\n  color: ",";\n  position: relative;\n  bottom: calc(72px);\n"])),(function(e){return e.theme.text})),J=Object(q.c)(z.c)(f||(f=Object(Y.a)(["\nheight: 100%;\nflex: 1;\nmax-width: 50%;\njustify-content: space-between"]))),D=q.c.div(v||(v=Object(Y.a)(["\n  padding: 5rem 0;\n  height: 100%;\n"]))),U=q.c.section(y||(y=Object(Y.a)(["\n  position: relative;\n  width: 100%;\n  max-width: 1280px;\n"]))),A=(q.c.div(w||(w=Object(Y.a)(["\n  @media only screen and (min-width: 980px) {\n    padding: 10rem 7rem;\n  }\n"]))),q.c.form(S||(S=Object(Y.a)(["\n  width: 100%;\n  background: ",";\n  padding: ","px;\n  padding-bottom: ","px;\n  max-width: 520px;\n  border: 1px solid ",";\n  transition: all 0.5s;\n  box-shadow: none;\n  &:hover {\n    box-shadow: 0px -2px 10px ",";\n    border: 1px solid ",";\n  }\n  @media only screen and (max-width: 1045px) {\n    max-width: 100%;\n    margin-top: 2rem;\n  }\n"])),(function(e){return e.theme.background}),(function(e){return 2*e.theme.margin}),(function(e){return 4*e.theme.margin}),(function(e){return e.theme.accent.secondary}),(function(e){return e.theme.accent.main}),(function(e){return e.theme.accent.main}))),B=Object(q.c)(z.g)(k||(k=Object(Y.a)(["\n  color: ",";\n  margin: ","px;\n"])),(function(e){return e.theme.accent.secondary}),(function(e){return e.theme.margin})),F=q.c.span(C||(C=Object(Y.a)(["\n  display: block;\n  font-family: 'Ubuntu', sans-serif;\n  font-weight: 600;\n  color: rgb(255, 130, 92);\n  height: 0.775rem;\n  padding: 0 0.675rem;\n"]))),G=q.c.div(E||(E=Object(Y.a)(["\n  text-align: end;\n  position: relative;\n  @media only screen and (max-width: 414px) {\n    padding-top: 0.75rem;\n  }\n"]))),H=t(1),I=Object(a.lazy)((function(){return t.e(14).then(t.bind(null,197))})),K=Object(a.lazy)((function(){return t.e(4).then(t.bind(null,146))})),L=Object(a.lazy)((function(){return t.e(15).then(t.bind(null,198))}));n.default=Object(o.a)()((function(e){var n=e.title,t=e.id,a=e.t,r=e.subtitle,o=p(O),d=o.values,l=o.errors,u=o.handleChange,b=o.handleSubmit,m=function(e){var n=e.type,t=l[n];return l[n]?Object(H.jsx)(s.a,{cascade:!0,children:Object(H.jsx)(F,{children:t})}):Object(H.jsx)(F,{})},j=function(){var e=a(n).split("\n");return{top:(null===e||void 0===e?void 0:e[0])||"",bottom:(null===e||void 0===e?void 0:e[1])||""}}();return Object(H.jsx)(D,{id:t,children:Object(H.jsx)(U,{children:Object(H.jsxs)(c.a,{type:"flex",justify:"space-between",align:"middle",children:[Object(H.jsxs)(J,{children:[Object(H.jsx)(M,{children:j.top}),Object(H.jsx)(N,{children:j.bottom})]}),Object(H.jsx)(i.a,{children:Object(H.jsxs)(A,{autoComplete:"off",onSubmit:b,children:[Object(H.jsx)(B,{children:a(r)}),Object(H.jsxs)(i.a,{span:24,children:[Object(H.jsx)(I,{type:"text",name:"name",id:"Name",placeholder:"Your Name",value:d.name||"",onChange:u}),Object(H.jsx)(m,{type:"name"})]}),Object(H.jsxs)(i.a,{span:24,children:[Object(H.jsx)(I,{type:"text",name:"email",id:"Email",placeholder:"Your Email",value:d.email||"",onChange:u}),Object(H.jsx)(m,{type:"email"})]}),Object(H.jsxs)(i.a,{span:24,children:[Object(H.jsx)(L,{placeholder:"Your Message",value:d.message||"",name:"message",id:"Message",onChange:u}),Object(H.jsx)(m,{type:"message"})]}),Object(H.jsx)(G,{children:Object(H.jsx)(K,{name:"submit",type:"submit",children:a("send")})})]})})]})})})}))}}]);
//# sourceMappingURL=17.ccd369eb.chunk.js.map