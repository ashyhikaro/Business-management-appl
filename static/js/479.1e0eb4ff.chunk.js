"use strict";(self.webpackChunkfirebase_test=self.webpackChunkfirebase_test||[]).push([[479],{3479:function(e,a,t){t.r(a);var n=t(4942),r=t(1413),l=t(885),c=(t(3755),t(1787),t(477),t(2791)),i=t(794),u=t(8530),s=t(834),d=t(1134),o=t(4778),m=t(184);a.default=function(e){var a,t=e.regime,p=e.userData,h=e.openForm,v=e.mode,x=e.usersNoteId,y=(0,d.cI)(),Z=y.register,j=y.reset,f=y.handleSubmit,g=y.formState,D=y.formState,b=D.errors,P=(D.isSubmitSuccessful,(0,i._B)()),S=P.setValue,C=P.value,U=(0,c.useState)(""),T=(0,l.Z)(U,2),_=T[0],F=T[1];"edit"===v&&o.db.ref(t).child(p.id).child(x).once("value",(function(e){a=e.val()}));var N=new Date,V=N.getMonth()+1,A=N.getDate(),B={day:1===String(A).length?"0".concat(A):A,month:1===String(V).length?"0".concat(V):V,year:N.getFullYear()};return(0,c.useEffect)((function(){g.isSubmitSuccessful&&(j({date:"",sum:"",project:""}),S(""),F(""))}),[g,j,S]),(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(u.Z,{onSubmit:f((function(e){var l=e.date.split("-"),c=(0,r.Z)((0,r.Z)({},e),{},{id:"".concat(Date.now()),date:"".concat(l[2],"-").concat(l[1],"-").concat(l[0])});c="create"===v?C?(0,r.Z)((0,r.Z)({},c),{},{value:C}):"income"===t?(0,r.Z)((0,r.Z)({},c),{},{value:"\u0417\u0430 \u0442\u043e\u0432\u0430\u0440 / \u043f\u043e\u0441\u043b\u0443\u0433\u0443"}):(0,r.Z)((0,r.Z)({},c),{},{value:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d / \u0456\u043d\u0442\u0435\u0440\u043d\u0435\u0442"}):(0,r.Z)((0,r.Z)({},c),{},{value:C}),c="create"===v&&""===_?(0,r.Z)((0,r.Z)({},c),{},{curr:"UAH"}):(0,r.Z)((0,r.Z)({},c),{},{curr:_});var i=new Date,u=i.getMonth()+1,s=i.getDate(),d={day:1===String(s).length?"0".concat(s):s,month:1===String(u).length?"0".concat(u):u,year:i.getFullYear()};"create"===v?o.db.ref(t).child(p.id).update((0,n.Z)({},c.id,{DateOfCreation:"".concat(d.day,"-").concat(d.month,"-").concat(d.year),DateOfDBInput:i,Date:c.date,Value:c.sum,Currency:c.curr,Type:c.value,Project:c.project?c.project:""})):o.db.ref(t).child(p.id).update((0,n.Z)({},x,{DateOfCreation:a.DateOfCreation,DateOfDBInput:a.DateOfDBInput,Date:c.date&&"undefined-undefined-"!==c.date?c.date:a.Date,Value:c.sum?c.sum:a.Value,Currency:c.curr?c.curr:a.Currency,Type:c.value?c.value:a.Type,Project:c.project?c.project:a.Project}))})),className:"finance__form form_hiden",children:["income"===t?(0,m.jsxs)("h2",{children:["create"===v?"\u0414\u043e\u0434\u0430\u0442\u0438":"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438"," \u043f\u0440\u0438\u0431\u0443\u0442\u043e\u043a"]}):(0,m.jsxs)("h2",{children:["create"===v?"\u0414\u043e\u0434\u0430\u0442\u0438":"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438"," \u0432\u0438\u0442\u0440\u0430\u0442\u0438"]}),(0,m.jsxs)(u.Z.Field,{children:[(0,m.jsx)("label",{children:"\u0414\u0430\u0442\u0430 \u043f\u043b\u0430\u0442\u0435\u0436\u0443:"}),"create"===v?(0,m.jsx)("input",(0,r.Z)({type:"date"},Z("date",{required:"error date",max:"".concat(B.year+5,"-").concat(B.month,"-").concat(B.day),min:"".concat(B.year-5,"-").concat(B.month,"-").concat(B.day)}))):(0,m.jsx)("input",(0,r.Z)((0,r.Z)({},Z("date",{required:!1,max:"".concat(B.year+5,"-").concat(B.month,"-").concat(B.day),min:"".concat(B.year-5,"-").concat(B.month,"-").concat(B.day)})),{},{placeholder:a.Date,type:"text",onFocus:function(e){return e.target.type="date"},onBlur:function(e){return e.target.type="text"}})),b.date&&(0,m.jsx)("p",{className:"error_message",children:"*\u0417\u0430\u043f\u043e\u0432\u043d\u0456\u0442\u044c \u043f\u043e\u043b\u0435"})]}),(0,m.jsxs)(u.Z.Field,{style:{display:"flex",alignItems:"flex-end",gap:"10px",marginBottom:"0"},children:[(0,m.jsxs)(u.Z.Field,{children:[(0,m.jsx)("label",{children:"\u0421\u0443\u043c\u0430 \u043f\u043b\u0430\u0442\u0435\u0436\u0443:"}),"create"===v?(0,m.jsx)("input",(0,r.Z)((0,r.Z)({type:"number",placeholder:"\u0421\u0443\u043c\u0430..."},Z("sum",{required:"error value"})),{},{min:1,max:1e9})):(0,m.jsx)("input",(0,r.Z)((0,r.Z)({type:"number",placeholder:a.Value},Z("sum",{required:!1})),{},{min:1,max:1e9})),b.sum&&(0,m.jsx)("p",{className:"error_message",children:"*\u0417\u0430\u043f\u043e\u0432\u043d\u0456\u0442\u044c \u043f\u043e\u043b\u0435"})]}),(0,m.jsxs)(u.Z.Field,{children:["create"===v?(0,m.jsx)(i.ZP,{style:{marginTop:"8px"},value:_,setValue:F,placeholder:"UAH",items:[{id:"UAH",value:"UAH"},{id:"USD",value:"USD"},{id:"EUR",value:"EUR"},{id:"GBP",value:"GBP"},{id:"JPY",value:"JPY"},{id:"CNY",value:"CNY"}]}):(0,m.jsx)(i.ZP,{style:{marginTop:"8px"},value:_,setValue:F,placeholder:a.Currency,items:[{id:"UAH",value:"UAH"},{id:"USD",value:"USD"},{id:"EUR",value:"EUR"},{id:"GBP",value:"GBP"},{id:"JPY",value:"JPY"},{id:"CNY",value:"CNY"}]}),b.sum&&(0,m.jsx)("p",{className:"error_message",children:"\xa0"})]})]}),(0,m.jsxs)(u.Z.Field,{children:[(0,m.jsx)("label",{children:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044f:"}),"create"===v?"income"===t?(0,m.jsx)(i.ZP,{style:{marginTop:"8px"},value:C,setValue:S,placeholder:"\u0417\u0430 \u0442\u043e\u0432\u0430\u0440 / \u043f\u043e\u0441\u043b\u0443\u0433\u0443",items:[{id:"Payment",value:"\u0417\u0430 \u0442\u043e\u0432\u0430\u0440 / \u043f\u043e\u0441\u043b\u0443\u0433\u0443"},{id:"Prepayment",value:"\u041f\u0435\u0440\u0435\u0434\u043e\u043f\u043b\u0430\u0442\u0430"},{id:"Another",value:"\u0406\u043d\u0448\u0456 \u043d\u0430\u0434\u0445\u043e\u0434\u0436\u0435\u043d\u043d\u044f"}]}):(0,m.jsx)(i.ZP,{style:{marginTop:"8px"},value:C,setValue:S,placeholder:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d / \u0456\u043d\u0442\u0435\u0440\u043d\u0435\u0442",items:[{id:"Connection",value:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d / \u0456\u043d\u0442\u0435\u0440\u043d\u0435\u0442"},{id:"Suppliers",value:"\u041e\u043f\u043b\u0430\u0442\u0430 \u043f\u043e\u0441\u0442\u0430\u0447\u0430\u043b\u044c\u043d\u0438\u043a\u0430\u043c"},{id:"Rent",value:"\u041e\u0440\u0435\u043d\u0434\u0430"},{id:"Taxes",value:"\u041f\u043e\u0434\u0430\u0442\u043a\u0438"},{id:"Salary",value:"\u0417\u0430\u0440\u043e\u0431\u0456\u0442\u043d\u0430 \u043f\u043b\u0430\u0442\u0430"},{id:"Another payments",value:"\u0406\u043d\u0448\u0456 \u0432\u0438\u043f\u043b\u0430\u0442\u0438"}]}):"income"===t?(0,m.jsx)(i.ZP,{style:{marginTop:"8px"},value:C,setValue:S,placeholder:a.Type,items:[{id:"Payment",value:"\u0417\u0430 \u0442\u043e\u0432\u0430\u0440 / \u043f\u043e\u0441\u043b\u0443\u0433\u0443"},{id:"Prepayment",value:"\u041f\u0435\u0440\u0435\u0434\u043e\u043f\u043b\u0430\u0442\u0430"},{id:"Another",value:"\u0406\u043d\u0448\u0456 \u043d\u0430\u0434\u0445\u043e\u0434\u0436\u0435\u043d\u043d\u044f"}]}):(0,m.jsx)(i.ZP,{style:{marginTop:"8px"},value:C,setValue:S,placeholder:a.Type,items:[{id:"Connection",value:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d / \u0456\u043d\u0442\u0435\u0440\u043d\u0435\u0442"},{id:"Suppliers",value:"\u041e\u043f\u043b\u0430\u0442\u0430 \u043f\u043e\u0441\u0442\u0430\u0447\u0430\u043b\u044c\u043d\u0438\u043a\u0430\u043c"},{id:"Rent",value:"\u041e\u0440\u0435\u043d\u0434\u0430"},{id:"Taxes",value:"\u041f\u043e\u0434\u0430\u0442\u043a\u0438"},{id:"Salary",value:"\u0417\u0430\u0440\u043e\u0431\u0456\u0442\u043d\u0430 \u043f\u043b\u0430\u0442\u0430"},{id:"Another payments",value:"\u0406\u043d\u0448\u0456 \u0432\u0438\u043f\u043b\u0430\u0442\u0438"}]})]}),(0,m.jsxs)(u.Z.Field,{children:[(0,m.jsx)("label",{children:"\u041f\u0440\u043e\u0454\u043a\u0442:"}),"create"===v?(0,m.jsx)("input",(0,r.Z)((0,r.Z)({type:"text",placeholder:"\u041f\u0440\u043e\u0454\u043a\u0442..."},Z("project")),{},{maxLength:"30"})):(0,m.jsx)("input",(0,r.Z)((0,r.Z)({type:"text",placeholder:a.Project},Z("project")),{},{maxLength:"30"}))]}),(0,m.jsxs)(u.Z.Field,{className:"btns_field",children:[(0,m.jsx)(s.Z,{className:"non_active_btn",onClick:function(){S(""),h("back")},type:"reset",children:"\u041d\u0430\u0437\u0430\u0434"}),(0,m.jsx)(s.Z,{className:"sign-in_btn",type:"submit",children:"create"===v?"\u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438":"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438"})]})]})})}},3755:function(){},477:function(){},1787:function(){}}]);
//# sourceMappingURL=479.1e0eb4ff.chunk.js.map