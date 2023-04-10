"use strict";(self.webpackChunkfirebase_test=self.webpackChunkfirebase_test||[]).push([[293],{3293:function(e,r,s){s.r(r),s.d(r,{default:function(){return u}});var n=s(1413),a=s(885),l=(s(1787),s(3634)),t=s(8530),i=s(834),c=s(7689),o=s(1134),d=s(2791),h=s(184);var u=function(e){var r=e.createAccount,s=e.customError,u=e.setCustomError,m=(0,o.cI)(),p=m.register,x=m.handleSubmit,j=m.setError,g=m.formState.errors,Z=(0,d.useState)({country:"",region:""}),b=(0,a.Z)(Z,2),y=b[0],f=b[1],_=(0,c.s0)(),N=new Date,w=N.getMonth()+1,F=N.getDate(),v={day:1===String(F).length?"0".concat(F):F,month:1===String(w).length?"0".concat(w):w,year:N.getFullYear()};return(0,h.jsx)("div",{className:"registration_page",children:(0,h.jsx)("div",{className:"form_block",children:(0,h.jsxs)(t.Z,{onSubmit:x((function(e){e.password===e.passTwo?(r((0,n.Z)((0,n.Z)({},e),{},{country:y.country,region:y.region})),f({country:"",region:""})):j("passTwo",{type:"value",message:"passwords do not match"})})),children:[s?(0,h.jsx)("p",{className:"error_message",style:{textAlign:"center"},children:s}):null,(0,h.jsx)("h1",{children:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f"}),(0,h.jsxs)("div",{className:"reg_block",children:[(0,h.jsxs)(t.Z.Field,{className:"field_block",children:[(0,h.jsxs)(t.Z.Field,{children:[(0,h.jsx)("label",{children:"Email:"}),(0,h.jsx)("input",(0,n.Z)({type:"email",placeholder:"\u0415mail..."},p("email",{required:"error email"}))),g.email&&(0,h.jsx)("p",{className:"error_message",children:"*\u041d\u0435\u043a\u043e\u0440\u0435\u043a\u0442\u043d\u0438\u0439 email"})]}),(0,h.jsxs)(t.Z.Field,{children:[(0,h.jsx)("label",{children:"\u041f\u0430\u0440\u043e\u043b\u044c:"}),(0,h.jsx)("input",(0,n.Z)({type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c..."},p("password",{required:"error password"}))),g.password&&(0,h.jsx)("p",{className:"error_message",children:"*\u041d\u0435\u043a\u043e\u0440\u0435\u043a\u0442\u043d\u0438\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"})]}),(0,h.jsxs)(t.Z.Field,{children:[(0,h.jsx)("label",{children:"\u041f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0456\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c:"}),(0,h.jsx)("input",(0,n.Z)({type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c..."},p("passTwo",{required:"error confirm"}))),g.passTwo&&(0,h.jsx)("p",{className:"error_message",children:"*\u041f\u0430\u0440\u043e\u043b\u0456 \u043d\u0435 \u0441\u043f\u0456\u0432\u043f\u0430\u0434\u0430\u044e\u0442\u044c"})]}),(0,h.jsxs)(t.Z.Field,{children:[(0,h.jsx)("label",{children:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443:"}),(0,h.jsx)("p",{children:"\u0424\u043e\u0440\u043c\u0430\u0442: 000-000-0000"}),(0,h.jsx)("input",(0,n.Z)((0,n.Z)({type:"tel",placeholder:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443..."},p("phone",{required:"error phone number"})),{},{pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}"})),g.phone&&(0,h.jsx)("p",{className:"error_message",children:"*\u041d\u0435\u043a\u043e\u0440\u0435\u043a\u0442\u043d\u0438\u0439 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443"})]})]}),(0,h.jsxs)(t.Z.Field,{className:"field_block",children:[(0,h.jsxs)(t.Z.Field,{children:[(0,h.jsx)("label",{children:"\u0406\u043c'\u044f:"}),(0,h.jsx)("input",(0,n.Z)((0,n.Z)({type:"text",placeholder:"\u0406\u043c'\u044f..."},p("firstname",{required:"error confirm"})),{},{maxLength:"10"})),g.firstname&&(0,h.jsx)("p",{className:"error_message",children:"*\u0412\u0456\u0434\u0441\u0443\u0442\u043d\u0454 \u0456\u043c'\u044f"})]}),(0,h.jsxs)(t.Z.Field,{children:[(0,h.jsx)("label",{children:"\u041f\u0440\u0456\u0437\u0432\u0438\u0449\u0435:"}),(0,h.jsx)("input",(0,n.Z)((0,n.Z)({type:"text",placeholder:"\u041f\u0440\u0456\u0437\u0432\u0438\u0449\u0435..."},p("lastname",{required:"error lastname"})),{},{maxLength:"40"})),g.lastname&&(0,h.jsx)("p",{className:"error_message",children:"*\u0412\u0456\u0434\u0441\u0443\u0442\u043d\u0454 \u043f\u0440\u0456\u0437\u0432\u0438\u0449\u0435"})]}),(0,h.jsxs)(t.Z.Field,{children:[(0,h.jsx)("label",{children:"\u0414\u0430\u0442\u0430 \u043d\u0430\u0440\u043e\u0434\u0436\u0435\u043d\u043d\u044f:"}),(0,h.jsx)("input",(0,n.Z)({type:"date"},p("age",{required:"error age",max:"".concat(v.year-18,"-").concat(v.month,"-").concat(v.day),min:"".concat(v.year-100,"-").concat(v.month,"-").concat(v.day)}))),g.age&&(0,h.jsx)("p",{className:"error_message",children:"*\u041d\u0435\u043a\u043e\u0440\u0435\u043a\u0442\u043d\u0430 \u0434\u0430\u0442\u0430 \u043d\u0430\u0440\u043e\u0434\u0436\u0435\u043d\u043d\u044f"})]}),(0,h.jsxs)(t.Z.Field,{children:[(0,h.jsx)("label",{children:"\u041a\u0440\u0430\u0457\u043d\u0430 \u0442\u0430 \u0440\u0435\u0433\u0456\u043e\u043d:"}),(0,h.jsx)(l.Px,{value:y.country,onChange:function(e){return f((function(r){return(0,n.Z)((0,n.Z)({},r),{},{country:e})}))}}),(0,h.jsx)(l.Xz,{country:y.country,value:y.region,onChange:function(e){return f((function(r){return(0,n.Z)((0,n.Z)({},r),{},{region:e})}))}})]})]})]}),(0,h.jsxs)(t.Z.Field,{className:"btns_field",children:[(0,h.jsx)(i.Z,{className:"non_active_btn sign_btn",type:"button",onClick:function(e){_("/"),u("")},children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0456\u044f"}),(0,h.jsx)(i.Z,{className:"sign-in_btn sign_btn",type:"submit",children:"\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044c"})]})]})})})}},1787:function(){}}]);
//# sourceMappingURL=293.f4db8d4f.chunk.js.map