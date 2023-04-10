"use strict";(self.webpackChunkfirebase_test=self.webpackChunkfirebase_test||[]).push([[878],{1878:function(e,t,n){n.r(t);var r=n(1413),s=n(885),l=(n(7497),n(1787),n(8530)),a=n(834),c=n(7689),i=n(1134),o=n(2791),u=n(3634),d=n(184);t.default=function(e){var t=e.setUserSettings,n=e.handleLogout,h=e.nonActive,m=(0,i.cI)(),x=m.register,p=m.reset,g=m.handleSubmit,j=m.formState.errors,Z=(0,o.useState)({country:"",region:""}),b=(0,s.Z)(Z,2),f=b[0],y=b[1],_=(0,c.s0)();return(0,d.jsx)("div",{className:"form_block login_block ".concat(h),children:(0,d.jsxs)(l.Z,{onSubmit:g((function(e){t((0,r.Z)((0,r.Z)({},e),{},{country:f.country,region:f.region})),y({country:"",region:""}),localStorage.getItem("user")||_("/")})),children:[(0,d.jsxs)(l.Z.Field,{children:[(0,d.jsx)("label",{children:"\u0406\u043c'\u044f:"}),localStorage.getItem("user")?(0,d.jsx)("input",(0,r.Z)((0,r.Z)({type:"text",placeholder:"\u0406\u043c'\u044f"},x("firstname")),{},{maxLength:"10"})):(0,d.jsx)("input",(0,r.Z)((0,r.Z)({type:"text",placeholder:"\u0406\u043c'\u044f"},x("firstname",{required:"\u0412\u0456\u0434\u0441\u0443\u0442\u043d\u0454 \u0456\u043c'\u044f \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430"})),{},{maxLength:"10"})),j.firstname&&(0,d.jsx)("p",{className:"error_message",children:"*\u0412\u0456\u0434\u0441\u0443\u0442\u043d\u0454 \u0456\u043c'\u044f \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430"})]}),(0,d.jsxs)(l.Z.Field,{children:[(0,d.jsx)("label",{children:"\u041f\u0440\u0456\u0437\u0432\u0438\u0449\u0435:"}),localStorage.getItem("user")?(0,d.jsx)("input",(0,r.Z)((0,r.Z)({type:"text",placeholder:"\u041f\u0440\u0456\u0437\u0432\u0438\u0449\u0435"},x("lastname")),{},{maxLength:"15"})):(0,d.jsx)("input",(0,r.Z)((0,r.Z)({type:"text",placeholder:"\u041f\u0440\u0456\u0437\u0432\u0438\u0449\u0435"},x("lastname",{required:"\u0412\u0456\u0434\u0441\u0443\u0442\u043d\u0454 \u043f\u0440\u0456\u0437\u0432\u0438\u0449\u0435 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430"})),{},{maxLength:"15"})),j.lastname&&(0,d.jsx)("p",{className:"error_message",children:"*\u0412\u0456\u0434\u0441\u0443\u0442\u043d\u0454 \u043f\u0440\u0456\u0437\u0432\u0438\u0449\u0435 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430"})]}),(0,d.jsxs)(l.Z.Field,{children:[(0,d.jsx)("label",{children:"\u0412\u0456\u043a:"}),localStorage.getItem("user")?(0,d.jsx)("input",(0,r.Z)({type:"date"},x("age"))):(0,d.jsx)("input",(0,r.Z)({type:"date"},x("age",{required:"\u0412\u0456\u0434\u0441\u0443\u0442\u043d\u044f \u0434\u0430\u0442\u0430 \u043d\u0430\u0440\u043e\u0434\u0436\u0435\u043d\u043d\u044f \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430"}))),j.age&&(0,d.jsx)("p",{className:"error_message",children:"*\u0412\u0456\u0434\u0441\u0443\u0442\u043d\u044f \u0434\u0430\u0442\u0430 \u043d\u0430\u0440\u043e\u0434\u0436\u0435\u043d\u043d\u044f \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430"})]}),(0,d.jsxs)(l.Z.Field,{children:[(0,d.jsx)("label",{children:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443:"}),(0,d.jsx)("p",{children:"\u0424\u043e\u0440\u043c\u0430\u0442: 000-000-0000"}),localStorage.getItem("user")?(0,d.jsx)("input",(0,r.Z)((0,r.Z)({type:"tel",placeholder:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443"},x("phone")),{},{pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}"})):(0,d.jsx)("input",(0,r.Z)((0,r.Z)({type:"tel",placeholder:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443"},x("phone",{required:"\u041f\u0440\u043e\u043f\u0443\u0449\u0435\u043d\u043e \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443"})),{},{pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}"})),j.phone&&(0,d.jsx)("p",{className:"error_message",children:"*\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0438\u0439 \u043d\u043e\u043c\u0435\u0440"})]}),(0,d.jsxs)(l.Z.Field,{children:[(0,d.jsx)("label",{children:"\u041a\u0440\u0430\u0457\u043d\u0430 \u0442\u0430 \u0440\u0435\u0433\u0456\u043e\u043d:"}),(0,d.jsx)(u.Px,{value:f.country,onChange:function(e){return y((function(t){return e!==t.country?{country:e,region:"-"}:(0,r.Z)((0,r.Z)({},t),{},{country:e})}))}}),(0,d.jsx)(u.Xz,{country:f.country,value:f.region,onChange:function(e){return y((function(t){return(0,r.Z)((0,r.Z)({},t),{},{region:e})}))}})]}),localStorage.getItem("user")?(0,d.jsxs)(l.Z.Field,{className:"btns_field",children:[(0,d.jsx)(a.Z,{className:"cancel_btn",type:"button",onClick:function(){document.querySelector(".form_block").classList.toggle("non_active"),p({firstname:"",lastname:"",age:"",phone:""})},children:"\u0421\u043a\u0430\u0441\u0443\u0432\u0430\u0442\u0438"}),(0,d.jsx)(a.Z,{className:"submit_btn",type:"submit",children:"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438"})]}):(0,d.jsxs)(l.Z.Field,{className:"btns_field",children:[(0,d.jsx)(a.Z,{className:"cancel_btn",type:"button",onClick:function(e){e.preventDefault(),_("/"),n()},children:"\u0421\u043a\u0430\u0441\u0443\u0432\u0430\u0442\u0438"}),(0,d.jsx)(a.Z,{className:"submit_btn",type:"submit",children:"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438"})]})]})})}},1787:function(){},7497:function(){}}]);
//# sourceMappingURL=878.1465eca9.chunk.js.map