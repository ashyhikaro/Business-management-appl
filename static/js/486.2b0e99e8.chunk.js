"use strict";(self.webpackChunkfirebase_test=self.webpackChunkfirebase_test||[]).push([[486,878],{1878:function(e,n,s){s.r(n);var t=s(1413),r=s(885),l=(s(7497),s(1787),s(8530)),a=s(834),i=s(7689),c=s(1134),o=s(2791),u=s(3634),d=s(184);n.default=function(e){var n=e.setUserSettings,s=e.handleLogout,h=e.nonActive,m=(0,c.cI)(),p=m.register,x=m.reset,g=m.handleSubmit,j=m.formState.errors,A=(0,o.useState)({country:"",region:""}),f=(0,r.Z)(A,2),_=f[0],b=f[1],Z=(0,i.s0)();return(0,d.jsx)("div",{className:"form_block login_block ".concat(h),children:(0,d.jsxs)(l.Z,{onSubmit:g((function(e){n((0,t.Z)((0,t.Z)({},e),{},{country:_.country,region:_.region})),b({country:"",region:""}),localStorage.getItem("user")||Z("/")})),children:[(0,d.jsxs)(l.Z.Field,{children:[(0,d.jsx)("label",{children:"\u0406\u043c'\u044f:"}),localStorage.getItem("user")?(0,d.jsx)("input",(0,t.Z)((0,t.Z)({type:"text",placeholder:"\u0406\u043c'\u044f"},p("firstname")),{},{maxLength:"10"})):(0,d.jsx)("input",(0,t.Z)((0,t.Z)({type:"text",placeholder:"\u0406\u043c'\u044f"},p("firstname",{required:"\u0412\u0456\u0434\u0441\u0443\u0442\u043d\u0454 \u0456\u043c'\u044f \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430"})),{},{maxLength:"10"})),j.firstname&&(0,d.jsx)("p",{className:"error_message",children:"*\u0412\u0456\u0434\u0441\u0443\u0442\u043d\u0454 \u0456\u043c'\u044f \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430"})]}),(0,d.jsxs)(l.Z.Field,{children:[(0,d.jsx)("label",{children:"\u041f\u0440\u0456\u0437\u0432\u0438\u0449\u0435:"}),localStorage.getItem("user")?(0,d.jsx)("input",(0,t.Z)((0,t.Z)({type:"text",placeholder:"\u041f\u0440\u0456\u0437\u0432\u0438\u0449\u0435"},p("lastname")),{},{maxLength:"15"})):(0,d.jsx)("input",(0,t.Z)((0,t.Z)({type:"text",placeholder:"\u041f\u0440\u0456\u0437\u0432\u0438\u0449\u0435"},p("lastname",{required:"\u0412\u0456\u0434\u0441\u0443\u0442\u043d\u0454 \u043f\u0440\u0456\u0437\u0432\u0438\u0449\u0435 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430"})),{},{maxLength:"15"})),j.lastname&&(0,d.jsx)("p",{className:"error_message",children:"*\u0412\u0456\u0434\u0441\u0443\u0442\u043d\u0454 \u043f\u0440\u0456\u0437\u0432\u0438\u0449\u0435 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430"})]}),(0,d.jsxs)(l.Z.Field,{children:[(0,d.jsx)("label",{children:"\u0412\u0456\u043a:"}),localStorage.getItem("user")?(0,d.jsx)("input",(0,t.Z)({type:"date"},p("age"))):(0,d.jsx)("input",(0,t.Z)({type:"date"},p("age",{required:"\u0412\u0456\u0434\u0441\u0443\u0442\u043d\u044f \u0434\u0430\u0442\u0430 \u043d\u0430\u0440\u043e\u0434\u0436\u0435\u043d\u043d\u044f \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430"}))),j.age&&(0,d.jsx)("p",{className:"error_message",children:"*\u0412\u0456\u0434\u0441\u0443\u0442\u043d\u044f \u0434\u0430\u0442\u0430 \u043d\u0430\u0440\u043e\u0434\u0436\u0435\u043d\u043d\u044f \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430"})]}),(0,d.jsxs)(l.Z.Field,{children:[(0,d.jsx)("label",{children:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443:"}),(0,d.jsx)("p",{children:"\u0424\u043e\u0440\u043c\u0430\u0442: 000-000-0000"}),localStorage.getItem("user")?(0,d.jsx)("input",(0,t.Z)((0,t.Z)({type:"tel",placeholder:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443"},p("phone")),{},{pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}"})):(0,d.jsx)("input",(0,t.Z)((0,t.Z)({type:"tel",placeholder:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443"},p("phone",{required:"\u041f\u0440\u043e\u043f\u0443\u0449\u0435\u043d\u043e \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443"})),{},{pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}"})),j.phone&&(0,d.jsx)("p",{className:"error_message",children:"*\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0438\u0439 \u043d\u043e\u043c\u0435\u0440"})]}),(0,d.jsxs)(l.Z.Field,{children:[(0,d.jsx)("label",{children:"\u041a\u0440\u0430\u0457\u043d\u0430 \u0442\u0430 \u0440\u0435\u0433\u0456\u043e\u043d:"}),(0,d.jsx)(u.Px,{value:_.country,onChange:function(e){return b((function(n){return e!==n.country?{country:e,region:"-"}:(0,t.Z)((0,t.Z)({},n),{},{country:e})}))}}),(0,d.jsx)(u.Xz,{country:_.country,value:_.region,onChange:function(e){return b((function(n){return(0,t.Z)((0,t.Z)({},n),{},{region:e})}))}})]}),localStorage.getItem("user")?(0,d.jsxs)(l.Z.Field,{className:"btns_field",children:[(0,d.jsx)(a.Z,{className:"cancel_btn",type:"button",onClick:function(){document.querySelector(".form_block").classList.toggle("non_active"),x({firstname:"",lastname:"",age:"",phone:""})},children:"\u0421\u043a\u0430\u0441\u0443\u0432\u0430\u0442\u0438"}),(0,d.jsx)(a.Z,{className:"submit_btn",type:"submit",children:"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438"})]}):(0,d.jsxs)(l.Z.Field,{className:"btns_field",children:[(0,d.jsx)(a.Z,{className:"cancel_btn",type:"button",onClick:function(e){e.preventDefault(),Z("/"),s()},children:"\u0421\u043a\u0430\u0441\u0443\u0432\u0430\u0442\u0438"}),(0,d.jsx)(a.Z,{className:"submit_btn",type:"submit",children:"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438"})]})]})})}},3486:function(e,n,s){s.r(n),s.d(n,{default:function(){return i}});var t=s(1878),r=s(9573),l=s(2791),a=s(184);var i=function(e){var n=e.userData,s=e.setUserSettings;return(0,l.useEffect)((function(){document.querySelector(".menu_small_screen").classList.contains("hidden")||(document.querySelector(".menu_small_screen").classList.add("hidden"),document.querySelector(".burger_btn_img").src=r)}),[]),(0,a.jsxs)("div",{className:"profile_page page",children:[(0,a.jsx)("h1",{className:"user__profile_title title",children:"\u041f\u0440\u043e\u0444\u0456\u043b\u044c"}),(0,a.jsxs)("div",{className:"user__info_container",children:[(0,a.jsxs)("div",{className:"user_info",children:[(0,a.jsxs)("p",{children:["\u0406\u043c'\u044f: ",(0,a.jsx)("span",{children:n.firstname})]}),(0,a.jsxs)("p",{children:["\u041f\u0440\u0456\u0437\u0432\u0438\u0449\u0435: ",(0,a.jsx)("span",{children:n.lastname})]}),(0,a.jsxs)("p",{children:["\u0414\u0430\u0442\u0430 \u043d\u0430\u0440\u043e\u0434\u0436\u0435\u043d\u043d\u044f: ",(0,a.jsx)("span",{children:n.age})]}),(0,a.jsxs)("p",{children:["Email: ",(0,a.jsx)("span",{children:n.email})]}),(0,a.jsxs)("p",{children:["\u0422\u0435\u043b\u0435\u0444\u043e\u043d: ",(0,a.jsx)("span",{children:n.phone})]}),(0,a.jsxs)("p",{children:["\u041a\u0440\u0430\u0457\u043d\u0430: ",(0,a.jsx)("span",{children:n.country})]}),(0,a.jsxs)("p",{children:["\u0420\u0435\u0433\u0456\u043e\u043d: ",(0,a.jsx)("span",{children:n.region})]}),(0,a.jsx)("button",{onClick:function(){document.querySelector(".form_block").classList.toggle("non_active")},className:"open_setting_btn",children:"\u041d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f"})]}),(0,a.jsx)(t.default,{setUserSettings:s,nonActive:"non_active"})]})]})}},1787:function(){},7497:function(){},9573:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAO0lEQVR4nO3RAQ0AMAgEsfdvmrkYBFoHl0sAgEFquAholvUHALithouAZll/AIDbargIaJb1BwCA/PMAXDx46rGiKioAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=486.2b0e99e8.chunk.js.map