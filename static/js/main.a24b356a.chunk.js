(this.webpackJsonpwork1=this.webpackJsonpwork1||[]).push([[0],{19:function(e,t,n){e.exports=n(43)},24:function(e,t,n){},25:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(11),i=n.n(r),c=(n(24),n(25),n(12)),o=n(13),s=n(14),h=n(17),m=n(15),u=n(18),d=n(16),p=n.n(d),g=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(h.a)(this,Object(m.a)(t).call(this,e))).changeHandler=function(e){n.setState(Object(c.a)({},e.target.name,e.target.value))},n.submitHandler=function(e){e.preventDefault(),console.log(n.state),p.a.post("https://wordfind.azurewebsites.net/api/English?code=8IZqWCIZi3kVDCXhQnmyvh0EKHvaQsVWN5kJjLnqR4ss4og5HzTL3Q==",n.state).then((function(e){console.log(e),n.setState({letters:e.data})})).then((function(e){console.log(e)}))},n.state={letters:[],StartWith:"",include:"",endsWith:"",WordMaxLength:"",WordMinLength:""},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.letters,n=e.StartWith,a=e.endsWith,r=e.include,i=e.WordMaxLength,c=e.WordMinLength;return l.a.createElement("div",null,l.a.createElement("div",{className:"App1"},l.a.createElement("form",{onSubmit:this.submitHandler},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"StartWith"},"StartWith"),l.a.createElement("input",{type:"text",name:"StartWith",value:n,onChange:this.changeHandler,placeholder:"C"})),l.a.createElement("label",{htmlFor:"endsWith"},"endsWith"),l.a.createElement("div",null,l.a.createElement("input",{type:"",name:"endsWith",value:a,onChange:this.changeHandler,placeholder:"er"})),l.a.createElement("label",{htmlFor:"includes"},"includes"),l.a.createElement("div",null,l.a.createElement("input",{type:"text",name:"include",onChange:this.changeHandler,value:r,placeholder:"mpu"})),l.a.createElement("label",{htmlFor:"WordMaxLength"},"WordMaxLength"),l.a.createElement("div",null,l.a.createElement("input",{type:"text",name:"WordMaxLength",value:i,onChange:this.changeHandler,placeholder:"9"})),l.a.createElement("label",{htmlFor:"WordMinLength"},"WordMinLength"),l.a.createElement("div",null,l.a.createElement("input",{type:"text",name:"WordMinLength",onChange:this.changeHandler,value:c,placeholder:"3"})),l.a.createElement("br",null),l.a.createElement("button",{type:"submit"},"Submit"))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("ul",{className:"Slide"},t.length?t.map((function(e){return l.a.createElement("div",{className:"slide-2"},l.a.createElement("span",{className:"inner-slide"},l.a.createElement("article",{className:"inner-2"},e)))})):null))))}}]),t}(a.Component),E=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.a24b356a.chunk.js.map