"use strict";(self.webpackChunkfirebase_test=self.webpackChunkfirebase_test||[]).push([[449],{3449:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var l=a(2982),n=a(1413),r=a(885),s=(a(1787),a(3755),a(1996)),i=a(9573),c=a(5125),o=(a(1052),a(794)),u=a(8530),d=a(834),h=a(1134),p=a(2791),y=a(4778),v=a(184);var f=function(e){var t=e.userData,a=["\u0421\u0456\u0447\u0435\u043d\u044c","\u041b\u044e\u0442\u0438\u0439","\u0411\u0435\u0440\u0435\u0437\u0435\u043d\u044c","\u041a\u0432\u0456\u0442\u0435\u043d\u044c","\u0422\u0440\u0430\u0432\u0435\u043d\u044c","\u0427\u0435\u0440\u0432\u0435\u043d\u044c","\u041b\u0438\u043f\u0435\u043d\u044c","\u0421\u0435\u0440\u043f\u0435\u043d\u044c","\u0412\u0435\u0440\u0435\u0441\u0435\u043d\u044c","\u0416\u043e\u0432\u0442\u0435\u043d\u044c","\u041b\u0438\u0441\u0442\u043e\u043f\u0430\u0434","\u0413\u0440\u0443\u0434\u0435\u043d\u044c"],f=String((new Date).getFullYear()),m=(0,h.cI)(),b=m.register,g=m.reset,S=m.handleSubmit,_=m.formState,x=m.formState,j=(x.errors,x.isSubmitSuccessful,(0,p.useState)()),A=(0,r.Z)(j,2),Z=A[0],N=A[1],D=(0,p.useState)(""),F=(0,r.Z)(D,2),T=F[0],C=F[1],E=(0,p.useState)(""),V=(0,r.Z)(E,2),q=V[0],O=V[1],P=(0,p.useState)(),k=(0,r.Z)(P,2),U=k[0],w=k[1],H=(0,p.useState)(""),Y=(0,r.Z)(H,2),z=Y[0],I=Y[1],L=(0,p.useState)([]),M=(0,r.Z)(L,2),B=M[0],R=M[1],X=(0,p.useState)([]),G=(0,r.Z)(X,2),K=G[0],Q=G[1],J=(0,p.useState)([]),W=(0,r.Z)(J,2),$=W[0],ee=W[1],te=(0,p.useState)([]),ae=(0,r.Z)(te,2),le=ae[0],ne=ae[1],re=(0,p.useState)([]),se=(0,r.Z)(re,2),ie=se[0],ce=se[1],oe=(0,p.useState)([]),ue=(0,r.Z)(oe,2),de=ue[0],he=ue[1];function pe(e){var t=[];if(Z&&!T)for(var l in e)"1"!==l&&e[l].Date.split("-")[2]===Z&&t.push((0,n.Z)({id:l},e[l]));else if(Z&&T&&!q){for(var r in e)if("1"!==r&&e[r].Date.split("-")[2]===Z)switch(T){case"\u041f\u0435\u0440\u0448\u0438\u0439":"01"!==e[r].Date.split("-")[1]&&"02"!==e[r].Date.split("-")[1]&&"03"!==e[r].Date.split("-")[1]||t.push((0,n.Z)({id:r},e[r]));break;case"\u0414\u0440\u0443\u0433\u0438\u0439":"04"!==e[r].Date.split("-")[1]&&"05"!==e[r].Date.split("-")[1]&&"06"!==e[r].Date.split("-")[1]||t.push((0,n.Z)({id:r},e[r]));break;case"\u0422\u0440\u0435\u0442\u0456\u0439":"07"!==e[r].Date.split("-")[1]&&"08"!==e[r].Date.split("-")[1]&&"09"!==e[r].Date.split("-")[1]||t.push((0,n.Z)({id:r},e[r]));break;case"\u0427\u0435\u0442\u0432\u0435\u0440\u0442\u0438\u0439":"10"!==e[r].Date.split("-")[1]&&"11"!==e[r].Date.split("-")[1]&&"12"!==e[r].Date.split("-")[1]||t.push((0,n.Z)({id:r},e[r]))}}else if(Z&&T&&q){var s=String(a.indexOf(q)+1).length>1?String(a.indexOf(q)+1):"0".concat(String(a.indexOf(q)+1));for(var i in e)"1"!==i&&e[i].Date.split("-")[2]===Z&&e[i].Date.split("-")[1]===s&&t.push((0,n.Z)({id:i},e[i]))}return t}function ye(e,t){var a=pe(t);"income"===e?ne(a):ce(a);var l=a.reduce((function(e,t){return e[t.Type]?e[t.Type]+=parseFloat(t.Value):e[t.Type]=parseFloat(t.Value),e}),{});for(var n in a=[],l)a.push({type:n,value:l[n]});a.sort((function(e,t){return e.type.length>t.type.length?1:e.type.length<t.type.length?-1:0})),"income"===e?R(a):Q(a)}var ve=function(){I(""),document.querySelector(".report_form").classList.toggle("hiden")};return(0,p.useEffect)((function(){_.isSubmitSuccessful&&g({year:"",quarter:"",month:""})}),[_]),(0,p.useEffect)((function(){document.querySelector(".menu_small_screen").classList.contains("hidden")||(document.querySelector(".menu_small_screen").classList.add("hidden"),document.querySelector(".burger_btn_img").src=i)}),[]),(0,v.jsxs)("div",{className:"reports_page page",children:[(0,v.jsx)("h1",{className:"title",children:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"}),(0,v.jsxs)("div",{className:"reports_page__main",children:[(0,v.jsxs)("div",{className:"reports_page__main_form",children:[(0,v.jsxs)(u.Z,{onSubmit:S((function(e){""!==Z?(y.db.ref("income").child(t.id).on("value",(function(e){ye("income",e.val())})),y.db.ref("costs").child(t.id).on("value",(function(e){ye("costs",e.val())})),y.db.ref("loans").child(t.id).on("value",(function(e){!function(e){var t=pe(e),a=[],l=[];he(t),t.forEach((function(e){e.PaidOut?a.push(e):l.push(e)}));var n=a.reduce((function(e,t){return e[t.Type]?e[t.Type]+=parseFloat(t.Value):e[t.Type]=parseFloat(t.Value),e}),{}),r=l.reduce((function(e,t){return e[t.Type]?e[t.Type]+=parseFloat(t.Value):e[t.Type]=parseFloat(t.Value),e}),{});for(var s in a=[],l=[],n)a.push({type:s,value:n[s]});for(var i in r)l.push({type:i,value:r[i]});var c=[a.sort((function(e,t){return e.type.length>t.type.length?1:e.type.length<t.type.length?-1:0})),l.sort((function(e,t){return e.type.length>t.type.length?1:e.type.length<t.type.length?-1:0}))];ee(c)}(e.val())}))):(R([]),Q([]),ee([])),w({year:Z,quarter:T,month:q})})),className:"reports_form",children:[(0,v.jsxs)(u.Z.Field,{children:[(0,v.jsx)("label",{children:"\u0420\u0456\u043a:"}),(0,v.jsx)(o.ZP,(0,n.Z)({value:Z,setValue:N,placeholder:"\u0420\u0456\u043a...",items:[{id:"1",value:"".concat(+f-5)},{id:"2",value:"".concat(+f-4)},{id:"3",value:"".concat(+f-3)},{id:"4",value:"".concat(+f-2)},{id:"5",value:"".concat(+f-1)},{id:"6",value:"".concat(+f)},{id:"7",value:"".concat(+f+1)},{id:"8",value:"".concat(+f+2)},{id:"9",value:"".concat(+f+3)},{id:"10",value:"".concat(+f+4)},{id:"11",value:"".concat(+f+5)}]},b("year",{required:!1})))]}),Z?(0,v.jsxs)(u.Z.Field,{children:[(0,v.jsx)("label",{children:"\u041a\u0432\u0430\u0440\u0442\u0430\u043b:"}),(0,v.jsx)(o.ZP,(0,n.Z)({value:T,setValue:C,placeholder:"\u041a\u0432\u0430\u0440\u0442\u0430\u043b...",items:[{id:"1",value:"\u041f\u0435\u0440\u0448\u0438\u0439"},{id:"2",value:"\u0414\u0440\u0443\u0433\u0438\u0439"},{id:"3",value:"\u0422\u0440\u0435\u0442\u0456\u0439"},{id:"4",value:"\u0427\u0435\u0442\u0432\u0435\u0440\u0442\u0438\u0439"}]},b("quarter",{required:!1})))]}):null,T?(0,v.jsxs)(u.Z.Field,{children:[(0,v.jsx)("label",{children:"\u041c\u0456\u0441\u044f\u0446\u044c:"}),"\u041f\u0435\u0440\u0448\u0438\u0439"===T?(0,v.jsx)(o.ZP,(0,n.Z)({value:q,setValue:O,placeholder:"\u041c\u0456\u0441\u044f\u0446\u044c...",items:[{id:"1",value:"\u0421\u0456\u0447\u0435\u043d\u044c"},{id:"2",value:"\u041b\u044e\u0442\u0438\u0439"},{id:"3",value:"\u0411\u0435\u0440\u0435\u0437\u0435\u043d\u044c"}]},b("month",{required:!1}))):"\u0414\u0440\u0443\u0433\u0438\u0439"===T?(0,v.jsx)(o.ZP,(0,n.Z)({value:q,setValue:O,placeholder:"\u041c\u0456\u0441\u044f\u0446\u044c...",items:[{id:"1",value:"\u041a\u0432\u0456\u0442\u0435\u043d\u044c"},{id:"2",value:"\u0422\u0440\u0430\u0432\u0435\u043d\u044c"},{id:"3",value:"\u0427\u0435\u0440\u0432\u0435\u043d\u044c"}]},b("month",{required:!1}))):"\u0422\u0440\u0435\u0442\u0456\u0439"===T?(0,v.jsx)(o.ZP,(0,n.Z)({value:q,setValue:O,placeholder:"\u041c\u0456\u0441\u044f\u0446\u044c...",items:[{id:"1",value:"\u041b\u0438\u043f\u0435\u043d\u044c"},{id:"2",value:"\u0421\u0435\u0440\u043f\u0435\u043d\u044c"},{id:"3",value:"\u0412\u0435\u0440\u0435\u0441\u0435\u043d\u044c"}]},b("month",{required:!1}))):(0,v.jsx)(o.ZP,(0,n.Z)({value:q,setValue:O,placeholder:"\u041c\u0456\u0441\u044f\u0446\u044c...",items:[{id:"1",value:"\u0416\u043e\u0432\u0442\u0435\u043d\u044c"},{id:"2",value:"\u041b\u0438\u0441\u0442\u043e\u043f\u0430\u0434"},{id:"3",value:"\u0413\u0440\u0443\u0434\u0435\u043d\u044c"}]},b("month",{required:!1})))]}):null,(0,v.jsxs)(u.Z.Field,{className:"btns_field",children:[(0,v.jsx)(d.Z,{className:"non_active_btn",onClick:function(){N(""),C(""),O("")},type:"reset",children:"\u0421\u043a\u0438\u043d\u0443\u0442\u0438"}),(0,v.jsx)(d.Z,{className:"sign-in_btn",type:"submit",children:"\u041f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438"})]})]}),(0,v.jsxs)("div",{className:"report_form__container",children:[(0,v.jsx)("button",{className:"receipt_btn btn",onClick:ve,children:"\u0421\u0444\u043e\u0440\u043c\u0443\u0432\u0430\u0442\u0438 PDF-\u0437\u0432\u0456\u0442"}),(0,v.jsxs)(u.Z,{className:"report_form hiden",children:[(0,v.jsxs)(u.Z.Field,{children:[(0,v.jsx)("label",{children:"\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u0442\u0438\u043f \u0437\u0432\u0456\u0442\u0443:"}),(0,v.jsx)(o.ZP,{value:z,setValue:I,placeholder:"\u0422\u0438\u043f...",items:[{id:"1",value:"\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0438\u0439"},{id:"2",value:"\u041f\u0440\u0438\u0431\u0443\u0442\u043a\u0438"},{id:"3",value:"\u0412\u0438\u0442\u0440\u0430\u0442\u0438"},{id:"4",value:"\u0414\u0435\u043f\u043e\u0437\u0438\u0442\u0438"}]})]}),(0,v.jsxs)(u.Z.Field,{className:"btns_field",children:[(0,v.jsx)(d.Z,{className:"non_active_btn",onClick:ve,children:"\u041d\u0430\u0437\u0430\u0434"}),(0,v.jsx)(d.Z,{className:"sign-in_btn",onClick:function(){var e=new Date,t=(String(e.getDay()).length>1?String(e.getDay()):String(e.getDay()),String(e.getMonth()).length>1?String(e.getMonth()):String(e.getMonth()),String(e.getFullYear()),[]),a=new c.default("landscape","pt","a4");a.addFont(s,"CyrillicFont","normal");var n="CyrillicFont",r={font:n,fontSize:14},i={font:n,fontSize:12};if("\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0438\u0439"===z){t=(0,l.Z)(B);var o=[],u=[];t.forEach((function(e){return u.push([e.type,"".concat(e.value+" UAH")])})),le.forEach((function(e){return o.push([e.DateOfCreation,e.Date,e.Project,e.Type,"".concat(e.Value+" "+e.Currency)])})),a.setFont("CyrillicFont"),a.setFontSize(26),a.text(40,50,"\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0438\u0439 \u0437\u0432\u0456\u0442 \u043f\u043e \u0444\u0456\u043d\u0430\u043d\u0441\u0430\u043c"),o.length>0&&(a.autoTable({head:[["\u0414\u0430\u0442\u0430 \u0437\u0430\u043f\u0438\u0441\u0443","\u0414\u0430\u0442\u0430 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0456\u0457","\u041f\u0440\u043e\u0454\u043a\u0442","\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044f","\u0421\u0443\u043c\u0430"]],body:o,startY:80,headStyles:r,bodyStyles:i}),a.autoTable({head:[["\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044f","\u0421\u0443\u043c\u0430"]],body:u,headStyles:r,bodyStyles:i})),a.setFont("CyrillicFont"),a.setFontSize(20),t=(0,l.Z)(K),o=[],u=[],t.forEach((function(e){return u.push([e.type,"".concat(e.value+" UAH")])})),ie.forEach((function(e){return o.push([e.DateOfCreation,e.Date,e.Project,e.Type,"".concat(e.Value+" "+e.Currency)])})),o.length>0&&(a.autoTable({head:[["\u0414\u0430\u0442\u0430 \u0437\u0430\u043f\u0438\u0441\u0443","\u0414\u0430\u0442\u0430 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0456\u0457","\u041f\u0440\u043e\u0454\u043a\u0442","\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044f","\u0421\u0443\u043c\u0430"]],body:o,headStyles:r,bodyStyles:i}),a.autoTable({head:[["\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044f","\u0421\u0443\u043c\u0430"]],body:u,headStyles:r,bodyStyles:i})),t=(0,l.Z)($),o=[];var d=[],h=[];t[0].forEach((function(e){return d.push([e.type,"".concat(e.value+" UAH"),"\u0417\u0430\u043a\u0440\u0438\u0442\u0430"])})),t[1].forEach((function(e){return h.push([e.type,"".concat(e.value+" UAH"),"\u0412\u0456\u0434\u043a\u0440\u0438\u0442\u0430"])})),de.forEach((function(e){return o.push([e.DateOfCreation,e.Name,e.Type,"".concat(e.Value+" "+e.Currency),e.Date,"".concat(e.PaidOut?"\u0417\u0430\u043a\u0440\u0438\u0442\u0430":"\u0412\u0456\u0434\u043a\u0440\u0438\u0442\u0430")])})),o.length>0&&(a.autoTable({head:[["\u0414\u0430\u0442\u0430 \u0437\u0430\u043f\u0438\u0441\u0443","\u0406\u043c'\u044f / \u043a\u043e\u043c\u043f\u0430\u043d\u0456\u044f","\u0422\u0438\u043f \u0434\u0435\u043f\u043e\u0437\u0438\u0442\u0443","\u0421\u0443\u043c\u0430","\u0414\u0430\u0442\u0430 \u0432\u0438\u043f\u043b\u0430\u0442\u0438","\u0421\u0442\u0430\u0442\u0443\u0441"]],body:o,headStyles:r,bodyStyles:i}),a.autoTable({head:[["\u0422\u0438\u043f \u0434\u0435\u043f\u043e\u0437\u0438\u0442\u0443","\u0421\u0443\u043c\u0430","\u0421\u0442\u0430\u0442\u0443\u0441"]],body:d,headStyles:r,bodyStyles:i}),a.autoTable({head:[["\u0422\u0438\u043f \u0434\u0435\u043f\u043e\u0437\u0438\u0442\u0443","\u0421\u0443\u043c\u0430","\u0421\u0442\u0430\u0442\u0443\u0441"]],body:h,headStyles:r,bodyStyles:i})),a.save("General_report")}else if("\u041f\u0440\u0438\u0431\u0443\u0442\u043a\u0438"===z){t=(0,l.Z)(B);var p=[],y=[];t.forEach((function(e){return y.push([e.type,"".concat(e.value+" UAH")])})),le.forEach((function(e){return p.push([e.DateOfCreation,e.Date,e.Project,e.Type,"".concat(e.Value+" "+e.Currency)])})),a.setFont("CyrillicFont"),a.setFontSize(26),a.text(40,50,"\u0417\u0432\u0456\u0442 \u043f\u0440\u043e \u043f\u0440\u0438\u0431\u0443\u0442\u043a\u0438"),a.autoTable({head:[["\u0414\u0430\u0442\u0430 \u0437\u0430\u043f\u0438\u0441\u0443","\u0414\u0430\u0442\u0430 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0456\u0457","\u041f\u0440\u043e\u0454\u043a\u0442","\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044f","\u0421\u0443\u043c\u0430"]],body:p,startY:80,headStyles:r,bodyStyles:i}),a.autoTable({head:[["\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044f","\u0421\u0443\u043c\u0430"]],body:y,headStyles:r,bodyStyles:i}),a.save("Income_report")}else if("\u0412\u0438\u0442\u0440\u0430\u0442\u0438"===z){t=(0,l.Z)(K);var v=[],f=[];t.forEach((function(e){return f.push([e.type,"".concat(e.value+" UAH")])})),ie.forEach((function(e){return v.push([e.DateOfCreation,e.Date,e.Project,e.Type,"".concat(e.Value+" "+e.Currency)])})),a.setFont("CyrillicFont"),a.setFontSize(26),a.text(40,50,"\u0417\u0432\u0456\u0442 \u043f\u0440\u043e \u0432\u0438\u0442\u0440\u0430\u0442\u0438"),a.autoTable({head:[["\u0414\u0430\u0442\u0430 \u0437\u0430\u043f\u0438\u0441\u0443","\u0414\u0430\u0442\u0430 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0456\u0457","\u041f\u0440\u043e\u0454\u043a\u0442","\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044f","\u0421\u0443\u043c\u0430"]],body:v,startY:80,headStyles:r,bodyStyles:i}),a.autoTable({head:[["\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044f","\u0421\u0443\u043c\u0430"]],body:f,headStyles:r,bodyStyles:i}),a.save("Expense_report")}else if("\u0414\u0435\u043f\u043e\u0437\u0438\u0442\u0438"===z){t=(0,l.Z)($);var m=[],b=[],g=[];t[0].forEach((function(e){return b.push([e.type,"".concat(e.value+" UAH"),"\u0417\u0430\u043a\u0440\u0438\u0442\u0430"])})),t[1].forEach((function(e){return g.push([e.type,"".concat(e.value+" UAH"),"\u0412\u0456\u0434\u043a\u0440\u0438\u0442\u0430"])})),de.forEach((function(e){return m.push([e.DateOfCreation,e.Name,e.Type,"".concat(e.Value+" "+e.Currency),e.Date,"".concat(e.PaidOut?"\u0417\u0430\u043a\u0440\u0438\u0442\u0430":"\u0412\u0456\u0434\u043a\u0440\u0438\u0442\u0430")])})),a.setFont("CyrillicFont"),a.setFontSize(26),a.text(40,50,"\u0417\u0432\u0456\u0442 \u043f\u0440\u043e \u0434\u0435\u043f\u043e\u0437\u0438\u0442\u0438"),a.autoTable({head:[["\u0414\u0430\u0442\u0430 \u0437\u0430\u043f\u0438\u0441\u0443","\u0406\u043c'\u044f / \u043a\u043e\u043c\u043f\u0430\u043d\u0456\u044f","\u0422\u0438\u043f \u0434\u0435\u043f\u043e\u0437\u0438\u0442\u0443","\u0421\u0443\u043c\u0430","\u0414\u0430\u0442\u0430 \u0432\u0438\u043f\u043b\u0430\u0442\u0438","\u0421\u0442\u0430\u0442\u0443\u0441"]],body:m,startY:80,headStyles:r,bodyStyles:i}),a.autoTable({head:[["\u0422\u0438\u043f \u0434\u0435\u043f\u043e\u0437\u0438\u0442\u0443","\u0421\u0443\u043c\u0430","\u0421\u0442\u0430\u0442\u0443\u0441"]],body:b,headStyles:r,bodyStyles:i}),a.autoTable({head:[["\u0422\u0438\u043f \u0434\u0435\u043f\u043e\u0437\u0438\u0442\u0443","\u0421\u0443\u043c\u0430","\u0421\u0442\u0430\u0442\u0443\u0441"]],body:g,headStyles:r,bodyStyles:i}),a.save("Loan_report")}},children:"\u041f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438"})]})]})]})]}),B.length>0||K.length>0||$.length>0?(0,v.jsxs)("div",{className:"reports__container",children:[U.year?U.year.length>0&&0===U.quarter.length?(0,v.jsxs)("h3",{className:"reports__container_title",children:["\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u0437\u0430 ",U.year," \u0440\u0456\u043a"]}):U.year.length>0&&U.quarter.length>0&&0===U.month.length?(0,v.jsxs)("h3",{className:"reports__container_title",children:["\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u0437\u0430 ",U.year," \u0440\u0456\u043a, ",U.quarter," \u043a\u0432\u0430\u0440\u0442\u0430\u043b"]}):(0,v.jsxs)("h3",{className:"reports__container_title",children:["\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u0437\u0430 ",U.year," \u0440\u0456\u043a, ",U.quarter," \u043a\u0432\u0430\u0440\u0442\u0430\u043b, ",U.month]}):(0,v.jsx)("h3",{className:"reports__container_title",children:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"}),(0,v.jsx)("h4",{className:"reports__title",children:"\u0424\u0456\u043d\u0430\u043d\u0441\u0438"}),(0,v.jsxs)("div",{className:"report_finances",children:[(0,v.jsxs)("div",{className:"report_container",children:[(0,v.jsxs)("div",{children:[(0,v.jsx)("h5",{className:"report_title",children:"\u041f\u0440\u0438\u0431\u0443\u0442\u043a\u0438:"}),B.length>0?B.map((function(e,t){return(0,v.jsxs)("p",{className:"report_item",children:[e.type,": ",e.value," \u20b4"]},t)})):null]}),(0,v.jsxs)("p",{className:"report_item good",children:["\u0420\u0430\u0437\u043e\u043c: ",B.length>0?B.reduce((function(e,t){return e+t.value}),0):0," \u20b4"]})]}),(0,v.jsxs)("div",{className:"report_container",children:[(0,v.jsxs)("div",{children:[(0,v.jsx)("h5",{className:"report_title",children:"\u0412\u0438\u0442\u0440\u0430\u0442\u0438:"}),K.length>0?K.map((function(e,t){return(0,v.jsxs)("p",{className:"report_item",children:[e.type,": ",e.value," \u20b4"]},t)})):null]}),(0,v.jsxs)("p",{className:"report_item bad",children:["\u0420\u0430\u0437\u043e\u043c: ",K.length>0?K.reduce((function(e,t){return e+t.value}),0):0," \u20b4"]})]})]}),(0,v.jsx)("h4",{className:"reports__title",children:"\u0414\u0435\u043f\u043e\u0437\u0438\u0442\u0438"}),(0,v.jsxs)("div",{className:"report_finances",children:[(0,v.jsxs)("div",{className:"report_container",children:[(0,v.jsxs)("div",{children:[(0,v.jsx)("h5",{className:"report_title",children:"\u0417\u0430\u043a\u0440\u0438\u0442\u0456:"}),$.length>0?$[0].map((function(e,t){return(0,v.jsxs)("p",{className:"report_item",children:["\u041a\u0440\u0435\u0434\u0438\u0442"!==e.type?"\u041e\u0442\u0440\u0438\u043c\u0430\u043b\u0438":"\u0412\u0456\u0434\u0434\u0430\u043b\u0438",": ",e.value," \u20b4"]},t)})):null]}),(0,v.jsxs)("p",{className:"report_item dif",children:["\u0420\u0456\u0437\u043d\u0438\u0446\u044f: ",$&&$[0]&&$[1]&&$[0][0]&&$[0][1]&&$[1][0]&&$[1][1]&&($[0].length>0||$[1].length>0)?$[0][0].value&&$[0][1].value?$[0][1].value-$[0][0].value:$[0][0].value&&!$[0][1].value?$[0][0].value:$[0][1].value:0," \u20b4"]})]}),(0,v.jsxs)("div",{className:"report_container",children:[(0,v.jsxs)("div",{children:[(0,v.jsx)("h5",{className:"report_title",children:"\u0412\u0456\u0434\u043a\u0440\u0438\u0442\u0456:"}),$.length>0?$[1].map((function(e,t){return(0,v.jsxs)("p",{className:"report_item",children:[e.type,": ",e.value," \u20b4"]},t)})):null]}),(0,v.jsxs)("p",{className:"report_item dif",children:["\u0420\u0456\u0437\u043d\u0438\u0446\u044f: ",$&&$[0]&&$[1]&&$[0][0]&&$[0][1]&&$[1][0]&&$[1][1]&&($[0].length>0||$[1].length>0)?$[1][0].value&&$[1][1].value?$[1][1].value-$[1][0].value:$[1][0].value&&!$[1][1].value?$[1][0].value:$[1][1].value:0," \u20b4"]})]})]})]}):null]})]})}},3755:function(){},1787:function(){},1996:function(e,t,a){e.exports=a.p+"static/media/FreeSans.028215fb03f453e38eed.ttf"},9573:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAO0lEQVR4nO3RAQ0AMAgEsfdvmrkYBFoHl0sAgEFquAholvUHALithouAZll/AIDbargIaJb1BwCA/PMAXDx46rGiKioAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=449.6e29ce8c.chunk.js.map