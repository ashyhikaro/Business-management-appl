"use strict";(self.webpackChunkfirebase_test=self.webpackChunkfirebase_test||[]).push([[379,42,884],{1042:function(e,a,s){s.r(a);var r=s(885),t=(s(550),s(3623)),l=s(2791),n=s(184);a.default=function(e){var a=e.title,s=e.finances,c=(0,l.useState)({labels:s?s.map((function(e){return e.day})):[],datasets:[{label:"Users Gained",data:s?s.map((function(e){return e.userGain-e.userLost})):[],backgroundColor:["rgba(75,192,192,1)","#ecf0f1","#50AF95","#f3ba2f","#2a71d0"],borderColor:"black",borderWidth:2}]}),i=(0,r.Z)(c,2),u=i[0],o=i[1];return(0,l.useEffect)((function(){o({labels:s?s.map((function(e){return e.day})).sort((function(e,a){return e-a})):[],datasets:[{label:"\u041f\u0440\u0438\u0431\u0443\u0442\u043a\u0438"===a?"\u041e\u0442\u0440\u0438\u043c\u0430\u043d\u043e":"\u0412\u0438\u0442\u0440\u0430\u0442\u0438"===a?"\u0412\u0438\u0442\u0440\u0430\u0447\u0435\u043d\u043e":"\u041a\u043e\u0448\u0442\u0438",data:s?s.sort((function(e,a){return e.day-a.day})).map((function(e){return e.userGain-e.userLost})):[],backgroundColor:["rgba(75,192,192,1)","#ecf0f1","#50AF95","#f3ba2f","#2a71d0"],borderColor:"black",borderWidth:2}]})}),[s]),(0,n.jsxs)("div",{className:"line_chart_finances",children:[(0,n.jsx)("h2",{style:{textAlign:"center"},children:a}),(0,n.jsx)("br",{}),(0,n.jsx)(t.x1,{data:u,options:{plugins:{title:{display:!1},legend:{display:!1}}}})]})}},6884:function(e,a,s){s.r(a);var r=s(2982),t=(s(550),s(3623)),l=s(184);a.default=function(e){var a=e.title,s=e.financeArr,n=e.financeType,c=s?(0,r.Z)(s):[],i=[],u=[],o={};for(var d in c.forEach((function(e){var a,s=e.Type;switch(e.Currency){case"USD":case"EUR":a=40*parseFloat(e.Value);break;case"GBP":a=44*parseFloat(e.Value);break;case"JPY":a=.3*parseFloat(e.Value);break;case"CNY":a=5.4*parseFloat(e.Value);break;default:a=parseFloat(e.Value)}s in o?o[s]+=parseFloat(a):o[s]=parseFloat(a)})),o)u.push(o[d]),i.push(d);var p={labels:i,datasets:[{label:"incomes"===n?"\u041e\u0442\u0440\u0438\u043c\u0430\u043d\u043e":"\u0412\u0438\u0442\u0440\u0430\u0447\u0435\u043d\u043e",data:u,backgroundColor:"incomes"===n?["rgb(50, 205, 50)","rgb(54, 162, 235)","rgb(255, 205, 86)"]:["#00BFFF","#E699CC","#A4C49A","#66CCCC","#B266B2","#808080"]}]};return(0,l.jsxs)("div",{className:"chart-container",children:[(0,l.jsx)("h2",{style:{textAlign:"center"},children:a}),(0,l.jsx)("br",{}),(0,l.jsx)(t.by,{data:p,options:{plugins:{title:{display:!0},legend:{display:!1}}}})]})}},379:function(e,a,s){s.r(a),s.d(a,{default:function(){return d}});var r=s(1413),t=s(885),l=s(9573),n=s(1042),c=s(2791),i=s(4778),u=s(6884),o=s(184);var d=function(e){var a=e.userData,s=new Date,d=["\u041d\u0435\u0434\u0456\u043b\u044f","\u041f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a","\u0412\u0456\u0432\u0442\u043e\u0440\u043e\u043a","\u0421\u0435\u0440\u0435\u0434\u0430","\u0427\u0435\u0442\u0432\u0435\u0440","\u041f'\u044f\u0442\u043d\u0438\u0446\u044f","\u0421\u0443\u0431\u043e\u0442\u0430"][s.getDay()],p=s.getDate(),f=["\u0441\u0456\u0447\u043d\u044f","\u043b\u044e\u0442\u043e\u0433\u043e","\u0431\u0435\u0440\u0435\u0437\u043d\u044f","\u043a\u0432\u0456\u0442\u043d\u044f","\u0442\u0440\u0430\u0432\u043d\u044f","\u0447\u0435\u0440\u0432\u043d\u044f","\u043b\u0438\u043f\u043d\u044f","\u0441\u0435\u0440\u043f\u043d\u044f","\u0432\u0435\u0440\u0435\u0441\u043d\u044f","\u0436\u043e\u0432\u0442\u043d\u044f","\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434\u0430","\u0433\u0440\u0443\u0434\u043d\u044f"][s.getMonth()],h=String(s.getMonth()+1);h.length<2&&(h="0"+h);var F=(0,c.useState)(0),A=(0,t.Z)(F,2),m=A[0],v=A[1],b=(0,c.useState)(0),x=(0,t.Z)(b,2),_=x[0],y=x[1],j=(0,c.useState)(0),V=(0,t.Z)(j,2),N=V[0],g=V[1],C=(0,c.useState)(0),U=(0,t.Z)(C,2),k=U[0],E=U[1],S=(0,c.useState)([]),D=(0,t.Z)(S,2),Y=D[0],w=D[1],B=(0,c.useState)([]),P=(0,t.Z)(B,2),G=P[0],Z=P[1],R=(0,c.useState)([]),J=(0,t.Z)(R,2),L=J[0],H=J[1];return(0,c.useEffect)((function(){i.db.ref("income").child(a.id).on("value",(function(e){var a=e.val(),s=[];for(var t in a)"1"!==t&&a[t].Date.split("-")[1]===h&&s.push((0,r.Z)({id:t},a[t]));Z(s),v(s.reduce((function(e,a){switch(a.Currency){case"USD":case"EUR":return parseFloat(e)+40*parseFloat(a.Value);case"GBP":return parseFloat(e)+44*parseFloat(a.Value);case"JPY":return parseFloat(e)+.3*parseFloat(a.Value);case"CNY":return parseFloat(e)+5.4*parseFloat(a.Value);default:return parseFloat(e)+parseFloat(a.Value)}}),0))})),i.db.ref("costs").child(a.id).on("value",(function(e){var a=e.val(),s=[];for(var t in a)"1"!==t&&a[t].Date.split("-")[1]===h&&s.push((0,r.Z)({id:t},a[t]));H(s),y(s.reduce((function(e,a){switch(a.Currency){case"USD":case"EUR":return parseFloat(e)+40*parseFloat(a.Value);case"GBP":return parseFloat(e)+44*parseFloat(a.Value);case"JPY":return parseFloat(e)+.3*parseFloat(a.Value);case"CNY":return parseFloat(e)+5.4*parseFloat(a.Value);default:return parseFloat(e)+parseFloat(a.Value)}}),0))})),i.db.ref("loans").child(a.id).on("value",(function(e){var a=e.val(),s=[],r=[];for(var t in a)"1"!==t&&("\u041c\u0438 \u0432\u0438\u043d\u043d\u0456"===a[t].Type?r.push({currency:a[t].Currency,value:a[t].Value}):s.push({currency:a[t].Currency,value:a[t].Value}));g(s.reduce((function(e,a){switch(a.currency){case"USD":case"EUR":return parseFloat(e)+40*parseFloat(a.value);case"GBP":return parseFloat(e)+44*parseFloat(a.value);case"JPY":return parseFloat(e)+.3*parseFloat(a.value);case"CNY":return parseFloat(e)+5.4*parseFloat(a.value);default:return parseFloat(e)+parseFloat(a.value)}}),0)),E(r.reduce((function(e,a){switch(a.currency){case"USD":case"EUR":return parseFloat(e)+40*parseFloat(a.value);case"GBP":return parseFloat(e)+44*parseFloat(a.value);case"JPY":return parseFloat(e)+.3*parseFloat(a.value);case"CNY":return parseFloat(e)+5.4*parseFloat(a.value);default:return parseFloat(e)+parseFloat(a.value)}}),0))}))}),[]),(0,c.useEffect)((function(){document.querySelector(".menu_small_screen").classList.contains("hidden")||(document.querySelector(".menu_small_screen").classList.add("hidden"),document.querySelector(".burger_btn_img").src=l)}),[]),(0,c.useEffect)((function(){var e=[];G.forEach((function(a,s){var r;switch(a.Currency){case"USD":case"EUR":r=40*parseFloat(a.Value);break;case"GBP":r=44*parseFloat(a.Value);break;case"JPY":r=.3*parseFloat(a.Value);break;case"CNY":r=5.4*parseFloat(a.Value);break;default:r=parseFloat(a.Value)}e.push({id:s,day:a.Date.split("-")[0],userGain:r,userLost:0})})),L.forEach((function(a,s){var r;switch(a.Currency){case"USD":case"EUR":r=40*parseFloat(a.Value);break;case"GBP":r=44*parseFloat(a.Value);break;case"JPY":r=.3*parseFloat(a.Value);break;case"CNY":r=5.4*parseFloat(a.Value);break;default:r=parseFloat(a.Value)}e.push({id:s,day:a.Date.split("-")[0],userGain:0,userLost:r})})),w(e)}),[G,L]),(0,o.jsxs)("div",{className:"home_page page",children:[(0,o.jsx)("header",{className:"home__header",children:(0,o.jsxs)("h2",{className:"today_date",children:[d,", ",p," ",f]})}),(0,o.jsxs)("main",{className:"home__main",children:[(0,o.jsx)("div",{className:"main_finance",children:(0,o.jsxs)("div",{className:"finance__container",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{className:"main_finance__title",children:"\u0424\u0456\u043d\u0430\u043d\u0441\u0438 \u043a\u043e\u043c\u043f\u0430\u043d\u0456\u0457"}),(0,o.jsxs)("div",{className:"money_container",children:[(0,o.jsx)("p",{className:"container__title",children:"\u041f\u0440\u0438\u0431\u0443\u0442\u043a\u0438"}),(0,o.jsxs)("p",{className:"incomeValue",children:[m," UAH"]})]}),(0,o.jsxs)("div",{className:"money_container",children:[(0,o.jsx)("p",{className:"container__title",children:"\u0412\u0438\u0442\u0440\u0430\u0442\u0438"}),(0,o.jsxs)("p",{className:"costValue",children:[_," UAH"]})]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{className:"main_finance__title",children:"\u0414\u0435\u043f\u043e\u0437\u0438\u0442\u0438 \u043a\u043e\u043c\u043f\u0430\u043d\u0456\u0457"}),(0,o.jsxs)("div",{className:"money_container",children:[(0,o.jsx)("p",{className:"container__title",children:"\u0414\u0435\u0431\u0435\u0442"}),(0,o.jsxs)("p",{className:"incomeValue",children:[N," UAH"]})]}),(0,o.jsxs)("div",{className:"money_container",children:[(0,o.jsx)("p",{className:"container__title",children:"\u041a\u0440\u0435\u0434\u0438\u0442"}),(0,o.jsxs)("p",{className:"costValue",children:[k," UAH"]})]})]})]})}),(0,o.jsxs)("div",{className:"main_statistic",children:[(0,o.jsx)(n.default,{title:"\u0420\u0443\u0445 \u043a\u043e\u0448\u0442\u0456\u0432 \u0437\u0430 \u043f\u043e\u0442\u043e\u0447\u043d\u0438\u0439 \u043c\u0456\u0441\u044f\u0446\u044c",finances:Y}),(0,o.jsxs)("div",{className:"statistic__pies",children:[(0,o.jsx)("h2",{style:{textAlign:"center"},children:"\u041f\u043e \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044f\u043c"}),(0,o.jsxs)("div",{className:"pies__container",children:[(0,o.jsx)(u.default,{title:"\u041f\u0440\u0438\u0431\u0443\u0442\u043a\u0438",financeArr:G,financeType:"incomes"}),(0,o.jsx)(u.default,{title:"\u0412\u0438\u0442\u0440\u0430\u0442\u0438",financeArr:L,financeType:"costs"})]})]})]})]})]})}},9573:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAO0lEQVR4nO3RAQ0AMAgEsfdvmrkYBFoHl0sAgEFquAholvUHALithouAZll/AIDbargIaJb1BwCA/PMAXDx46rGiKioAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=379.5dfcaad1.chunk.js.map