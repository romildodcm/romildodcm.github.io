(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{87:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(10),i=a.n(r),s=(a(87),a(144)),j=a(72),o=a(64),l=a.n(o),b=a(65),d=a.n(b),h=Object(j.a)({palette:{primary:l.a,secondary:d.a}}),x=a(42),O=a(124),p=a(148),u=a(57),m=a(125),g=a(127),f=a(128),w=a(43),y=a(67),v=a.n(y),k=a(2),C=Object(O.a)((function(e){return{menuButton:Object(u.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),title:{flexGrow:1},appBar:Object(u.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)"),marginLeft:240})}})),P=function(e){var t=C();return Object(k.jsx)(m.a,{position:"fixed",color:"primary",className:t.appBar,children:Object(k.jsxs)(g.a,{children:[Object(k.jsx)(f.a,{color:"inherit","aria-label":"menu",className:t.menuButton,onClick:function(){return e.openAction()},children:Object(k.jsx)(v.a,{})}),Object(k.jsx)(w.a,{variant:"h6",className:t.title,children:"Tabela de Permiss\xf5es"})]})})},N=a(146),B=a(145),S=a(134),A=a(129),D=a(130),I=a(131),T=a(132),W=a(133),E=a(69),M=a.n(E),G=a(68),L=a.n(G),F=function(){return Object(k.jsx)("div",{children:Object(k.jsxs)(A.a,{component:"nav",children:[Object(k.jsx)(D.a,{href:"https://www.mobixtec.com/",color:"textPrimary",underline:"none",children:Object(k.jsxs)(I.a,{button:!0,children:[Object(k.jsx)(T.a,{children:Object(k.jsx)(L.a,{})}),Object(k.jsx)(W.a,{primary:"Mobix"})]})}),Object(k.jsx)(D.a,{href:"https://www.figma.com/file/bLdWjL7pxSdWde02icnhmX/Desafios-da-Mobix?node-id=0%3A1",color:"textPrimary",underline:"none",children:Object(k.jsxs)(I.a,{button:!0,children:[Object(k.jsx)(T.a,{children:Object(k.jsx)(M.a,{})}),Object(k.jsx)(W.a,{primary:"Figma"})]})}),Object(k.jsx)(S.a,{})]})})},J=Object(O.a)((function(e){return{drawer:{width:240,flexShrink:0},drawerPaper:{width:240},toolbar:e.mixins.toolbar}})),V=function(e){var t=J();return Object(k.jsxs)(N.a,{className:t.drawer,classes:{paper:t.drawerPaper},anchor:"left",variant:e.variant,open:e.open,onClose:e.onClose?e.onClose:null,children:[Object(k.jsx)("div",{className:t.toolbar,children:Object(k.jsx)(w.a,{component:"div",color:"primary",variant:"h5",children:Object(k.jsx)(B.a,{textAlign:"center",margin:2,fontWeight:"fontWeightBold",letterSpacing:2,children:"Desafio Mobix"})})}),Object(k.jsx)(S.a,{}),Object(k.jsx)(F,{})]})},z=a(142),R=a(143),U=a(137),X=a(138),$=a(140),q=a(136),H=a(141),K=a(139),Q=a(135),Y=a(96),Z=a(71),_=a.n(Z),ee=a(70),te=a.n(ee),ae=a(147),ce=Object(O.a)({root:{"& > *":{borderBottom:"unset"}}});function ne(e,t,a,c,n,r){return{name:e,calories:t,fat:a,carbs:c,protein:n,price:r,history:[{date:"2020-01-05",customerId:"11091700",amount:3},{date:"2020-01-02",customerId:"Anonymous",amount:1}]}}function re(e){var t=e.row,a=n.a.useState(!1),c=Object(x.a)(a,2),r=c[0],i=c[1],s=ce();return Object(k.jsxs)(n.a.Fragment,{children:[Object(k.jsxs)(Q.a,{className:s.root,children:[Object(k.jsx)(q.a,{children:Object(k.jsx)(f.a,{"aria-label":"expand row",size:"small",onClick:function(){return i(!r)},children:r?Object(k.jsx)(te.a,{}):Object(k.jsx)(_.a,{})})}),Object(k.jsx)(q.a,{component:"th",scope:"row",children:t.name}),Object(k.jsx)(q.a,{align:"right",children:t.calories}),Object(k.jsx)(q.a,{align:"right",children:t.fat}),Object(k.jsx)(q.a,{align:"right",children:t.carbs}),Object(k.jsx)(q.a,{align:"right",children:t.protein})]}),Object(k.jsx)(Q.a,{children:Object(k.jsx)(q.a,{style:{paddingBottom:0,paddingTop:0},colSpan:6,children:Object(k.jsx)(U.a,{in:r,timeout:"auto",unmountOnExit:!0,children:Object(k.jsx)(B.a,{margin:1,children:Object(k.jsxs)(X.a,{"aria-label":"purchases",children:[Object(k.jsx)(K.a,{children:Object(k.jsxs)(Q.a,{children:[Object(k.jsx)(q.a,{children:"Date"}),Object(k.jsx)(q.a,{children:"Customer"}),Object(k.jsx)(q.a,{align:"right",children:"Amount"}),Object(k.jsx)(q.a,{align:"right",children:"Total price ($)"})]})}),Object(k.jsx)($.a,{children:t.history.map((function(e){return Object(k.jsxs)(Q.a,{children:[Object(k.jsx)(q.a,{component:"th",scope:"row",children:e.date}),Object(k.jsx)(q.a,{children:e.customerId}),Object(k.jsx)(q.a,{align:"right",children:e.amount}),Object(k.jsx)(q.a,{align:"right",children:Math.round(e.amount*t.price*100)/100})]},e.date)}))})]})})})})})]})}var ie=[ne("Todos",159,6,24,4,3.99),ne("Ice cream sandwich",237,9,37,4.3,4.99),ne("Eclair",262,16,24,6,3.79),ne("Cupcake",305,3.7,67,4.3,2.5),ne("Gingerbread",356,16,49,3.9,1.5)],se=function(){var e=n.a.useState(!1),t=Object(x.a)(e,2),a=t[0],c=t[1],r=function(e){c(e.target.checked)};return Object(k.jsx)(H.a,{component:Y.a,children:Object(k.jsxs)(X.a,{"aria-label":"collapsible table",children:[Object(k.jsxs)(K.a,{children:[Object(k.jsxs)(Q.a,{children:[Object(k.jsx)(q.a,{}),Object(k.jsx)(q.a,{align:"center",children:"Ver listagem"}),Object(k.jsx)(q.a,{align:"center",children:"Ver detalhes"}),Object(k.jsx)(q.a,{align:"center",children:"Criar"}),Object(k.jsx)(q.a,{align:"center",children:"Editar"}),Object(k.jsx)(q.a,{align:"center",children:"Deletar"})]}),Object(k.jsxs)(Q.a,{children:[Object(k.jsx)(q.a,{align:"left",children:"Todos"}),Object(k.jsx)(q.a,{align:"center",children:Object(k.jsx)(ae.a,{checked:a,onChange:r,inputProps:{"aria-label":"primary checkbox"}})}),Object(k.jsx)(q.a,{align:"center",children:Object(k.jsx)(ae.a,{checked:a,color:"primary",inputProps:{"aria-label":"secondary checkbox"}})}),Object(k.jsx)(q.a,{align:"center",children:Object(k.jsx)(ae.a,{checked:a,onChange:r,inputProps:{"aria-label":"primary checkbox"}})}),Object(k.jsx)(q.a,{align:"center",children:Object(k.jsx)(ae.a,{checked:a,onChange:r,inputProps:{"aria-label":"primary checkbox"}})}),Object(k.jsx)(q.a,{align:"center",children:Object(k.jsx)(ae.a,{checked:a,onChange:r,inputProps:{"aria-label":"primary checkbox"}})})]})]}),Object(k.jsx)($.a,{children:ie.map((function(e){return Object(k.jsx)(re,{row:e},e.name)}))})]})})},je=function(){return Object(k.jsx)("div",{children:Object(k.jsx)(z.a,{container:!0,xs:12,children:Object(k.jsx)(R.a,{maxWidth:"md",children:Object(k.jsx)(se,{})})})})},oe=Object(O.a)((function(e){return{root:{display:"flex"},toolbar:e.mixins.toolbar,content:{flexGrow:1,backgroundColor:e.palette.background.default,padding:e.spacing(3)}}})),le=function(){var e=oe(),t=n.a.useState(!1),a=Object(x.a)(t,2),c=a[0],r=a[1],i=function(){r(!c)};return Object(k.jsxs)("div",{className:e.root,children:[Object(k.jsx)(P,{openAction:i}),Object(k.jsx)(p.a,{xsDown:!0,children:Object(k.jsx)(V,{variant:"permanent",open:!0})}),Object(k.jsx)(p.a,{smUp:!0,children:Object(k.jsx)(V,{variant:"temporary",open:c,onClose:i})}),Object(k.jsxs)("div",{className:e.content,children:[Object(k.jsx)("div",{className:e.toolbar}),Object(k.jsx)(je,{})]})]})};var be=function(){return Object(k.jsx)(s.a,{theme:h,children:Object(k.jsx)(le,{})})};i.a.render(Object(k.jsx)(be,{}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.597fbe0d.chunk.js.map