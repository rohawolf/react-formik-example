(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,n,t){e.exports=t(48)},33:function(e,n,t){},35:function(e,n,t){},44:function(e,n,t){},48:function(e,n,t){"use strict";t.r(n);var a={};t.r(a),t.d(a,"add",function(){return S}),t.d(a,"remove",function(){return L}),t.d(a,"default",function(){return A});var o,r=t(0),c=t.n(r),i=t(23),u=t.n(i),l=(t(33),t(9)),s=t(10),p=t(13),m=t(11),h=t(14),d=(t(35),function(e){function n(){return Object(l.a)(this,n),Object(p.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(h.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(C,null))}}]),n}(r.Component)),f=function(e){var n=e.username,t=e.phone;return c.a.createElement("div",{style:{textAlign:"center"}},c.a.createElement("span",null,c.a.createElement("b",null,n)," :: ",t))},b=t(27),v=(t(44),function(e){var n=e.onSave;return c.a.createElement(b.a,{validate:function(e,n){var t={};return e.username?/^[a-zA-Z]{1,8}$/.test(e.username)||(t.username="\uc601\ubb38 \ub300/\uc18c\ubb38\uc790\ub9cc \uc785\ub825\uac00\ub2a5\ud569\ub2c8\ub2e4. (\ucd5c\ub300 8\uc790)"):t.username="\ud544\uc218 \uc785\ub825\ud56d\ubaa9\uc785\ub2c8\ub2e4.",e.phone?/^[\d]{1,11}$/.test(e.phone)||(t.phone="\uc22b\uc790\ub9cc \uc785\ub825\uac00\ub2a5\ud569\ub2c8\ub2e4. (\ucd5c\ub300 11\uc790)"):t.phone="\ud544\uc218 \uc785\ub825\ud56d\ubaa9\uc785\ub2c8\ub2e4.",t},onSubmit:function(e,t){var a=t.setSubmitting,o=t.resetForm;setTimeout(function(){alert(JSON.stringify(e,null,2)),a(!1),n(e),o({})},500)}},function(e){var n=e.values,t=e.touched,a=e.errors,o=e.isSubmitting,r=e.handleChange,i=e.handleSubmit;return c.a.createElement("form",{onSubmit:i},c.a.createElement("label",{htmlFor:"username",style:{display:"block"}},"\uc774\ub984"),c.a.createElement("input",{id:"username",placeholder:"\uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694.",type:"text",value:n.username||"",onChange:r,className:a.username&&t.username?"text-input error":"text-input"}),a.username&&t.username&&c.a.createElement("div",{className:"input-feedback"},a.username),c.a.createElement("label",{htmlFor:"phone",style:{display:"block"}},"\ubc88\ud638"),c.a.createElement("input",{id:"phone",placeholder:"\uc804\ud654\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694.",type:"text",value:n.phone||"",onChange:r,className:a.phone&&t.phone?"text-input error":"text-input"}),a.phone&&t.phone&&c.a.createElement("div",{className:"input-feedback"},a.phone),c.a.createElement("div",null,c.a.createElement("button",{type:"submit",disabled:o},"Submit")))})}),E=function(e){var n=e.data.map(function(e){return c.a.createElement(f,{key:e.index,username:e.username,phone:e.phone})});return c.a.createElement("div",null,n)},O=t(12),j=t(3),y=t(8),I=t(26),g=t(51),w=t(50),x="phoneInfoList/ADD",k="phoneInfoList/REMOVE",S=Object(g.a)(x),L=Object(g.a)(k),A=Object(w.a)((o={},Object(y.a)(o,x,function(e,n){var t=e.index;return{index:t+1,phoneInfoList:e.phoneInfoList.concat({index:t,username:n.payload.username,phone:n.payload.phone})}}),Object(y.a)(o,k,function(e,n){var t=e.phoneInfoList;return Object(I.a)({},e,{phoneInfoList:t.slice(0,n.payload)})}),o),{index:0,phoneInfoList:[]}),N=function(e){function n(){var e,t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=Object(p.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(o)))).onSave=function(e){t.props.PhoneInfoActions.add(e)},t}return Object(h.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this.props.phoneInfoList;return console.log(e),c.a.createElement("div",null,c.a.createElement(v,{onSave:this.onSave}),c.a.createElement(E,{data:e}))}}]),n}(r.Component),C=Object(O.b)(function(e){return{phoneInfoList:e.phoneInfo.phoneInfoList}},function(e){return{PhoneInfoActions:Object(j.a)(a,e)}})(N);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=Object(j.b)({phoneInfo:A}),J=Object(j.c)(F);u.a.render(c.a.createElement(O.a,{store:J},c.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,2,1]]]);
//# sourceMappingURL=main.13175335.chunk.js.map