(this.webpackJsonpdsmorais=this.webpackJsonpdsmorais||[]).push([[13,17],{123:function(n,t,e){"use strict";e.r(t);var r,i=e(4),c=e(3).c.button(r||(r=Object(i.a)(["\n  background: ",";\n\n  color: ",";\n  font-family: Cabin;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 1rem;\n  font-weight: 700;\n  width: 100%;\n  border: ",";\n  height: 48px;\n  outline: none;\n  cursor: pointer;\n  margin-top: 0.625rem;\n  max-width: 180px;\n\n  @media only screen and (max-width: 1024px) {\n    width: ",";\n  }\n\n  @media only screen and (max-width: 768px) {\n    width: ",";\n  }\n\n  @media only screen and (max-width: 480px) {\n    width: ",";\n  }\n"])),(function(n){var t=n.theme;return"secondary"===n.type?t.background:t.accent.secondary}),(function(n){var t=n.theme;return"secondary"===n.type?t.accent.secondary:t.background}),(function(n){return"secondary"===n.type?"1px solid ".concat(n.theme.accent.secondary):"0px"}),(function(n){return n.width?"160px":"100%"}),(function(n){return n.width?"140px":"100%"}),(function(n){return n.width?"130px":"100%"})),o=e(1);t.default=function(n){var t=n.type,e=n.width,r=n.children,i=n.onClick;return Object(o.jsx)(c,{type:t,width:e,onClick:i,children:r})}},128:function(n,t,e){"use strict";var r,i,c=e(0),o=e(8),a=e(34),d=e(54),u=e(4),m=e(3),h=Object(m.c)(d.c)(r||(r=Object(u.a)(["\n  flex: 1;\n  min-width: 300px;\n  max-width: 300px;\n  background: ",";\n  padding: ","px;\n  padding-bottom: ","px;\n  margin-right: ","px;\n  border: 1px solid ",";\n  transition: all 0.5s;\n  box-shadow: none;\n  color: ",";\n  &:hover {\n    box-shadow: 0px -2px 10px ",";\n    border: 1px solid ",";\n  }\n  @media only screen and (max-width: 1045px) {\n    max-width: 100%;\n    margin-top: 2rem;\n  }\n  > * {\n    flex: 1;\n  }\n  img {\n    margin: ","px;\n    max-width: 100%;\n  }\n"])),(function(n){return n.theme.background}),(function(n){return 2*n.theme.margin}),(function(n){return 4*n.theme.margin}),(function(n){return 4*n.theme.margin}),(function(n){return n.theme.accent.secondary}),(function(n){return n.theme.text}),(function(n){return n.theme.accent.main}),(function(n){return n.theme.accent.main}),(function(n){return n.theme.margin})),s=Object(m.c)(d.b)(i||(i=Object(u.a)(["\n  color: ",";\n"])),(function(n){return n.theme.accent.main})),l=e(1),p=Object(c.lazy)((function(){return Promise.resolve().then(e.bind(null,123))}));t.a=function(n){var t=n.title,e=n.brief,r=n.dateAdded,i=n.coverImage,c=n.slug,u=Object(a.a)().t,m=Object(o.f)();return Object(l.jsxs)(h,{children:[Object(l.jsx)(d.a,{children:t}),Object(l.jsx)(s,{children:new Date(r).toLocaleDateString()}),Object(l.jsx)("img",{src:i,alt:c}),Object(l.jsx)(d.b,{children:e}),Object(l.jsx)(p,{type:"secondary",onClick:function(){return m.push("/post?slug=".concat(c))},children:u("Read More")})]})}},180:function(n,t,e){"use strict";e.r(t);var r,i=e(29),c=e(8),o=e(34),a=e(128),d=e(123),u=e(4),m=e(3),h=e(54),s=Object(m.c)(h.g)(r||(r=Object(u.a)(["\n  width: 100%;\n  overflow-x: scroll;\n  margin-top: ","px;\n  padding-right: ","px;\n  padding-left: ","px;\n\n  ::-webkit-scrollbar-thumb:hover {\n    border: 1px solid ",";\n  }\n  @media only screen and (max-width: 480px) {\n    flex-flow: column;\n    align-items: center;\n    > div {\n      margin: ","px auto;\n    }\n  }\n  > button {\n    margin: auto;\n    min-width: 150px;\n  }\n  button:hover {\n    border: 1px solid ",";\n  }\n"])),(function(n){return 4*n.theme.margin}),(function(n){return 4*n.theme.margin}),(function(n){return 4*n.theme.margin}),(function(n){return n.theme.accent.main}),(function(n){return n.theme.margin}),(function(n){return n.theme.accent.main})),l=e(1);t.default=function(n){var t=n.posts,e=n.loading,r=Object(o.a)().t,u=Object(c.f)();return Object(l.jsxs)(s,{children:[e||!t&&r("Loading")||t.map((function(n){return Object(l.jsx)(a.a,Object(i.a)({},n),n.slug)})),!e&&t.length<t.length&&Object(l.jsx)(d.default,{type:"secondary",onClick:function(){return u.push("/all-posts")},children:r("Load More")})]})}}}]);
//# sourceMappingURL=13.91f5ab34.chunk.js.map