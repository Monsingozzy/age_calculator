(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(38)},23:function(e,t,a){},24:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),c=a.n(r),s=(a(23),a(7)),o=a(8),i=a(10),u=a(9),m=a(11),d=(a(24),a(4)),h=a(12),y=a.n(h),b=a(17),E=a.n(b),f=(a(36),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleDayChange=a.handleDayChange.bind(Object(d.a)(Object(d.a)(a))),a.state={selectedDay:void 0},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleDayChange",value:function(e){this.setState({selectedDay:e})}},{key:"render",value:function(){var e=this.state.selectedDay,t=y()(this.state.selectedDay),a=y()().diff(t),n=y.a.duration(a),r=n.years(),c=n.months(),s=n.days(),o=n.hours(),i=n.minutes(),u=n.seconds();return l.a.createElement("div",null,e&&l.a.createElement("p",null,"Day: ",e.toLocaleDateString()),!e&&l.a.createElement("h3",null,"Choose a day"),l.a.createElement("div",{className:"Result"},l.a.createElement(E.a,{onDayChange:this.handleDayChange})),l.a.createElement("h3",{className:"Result"},"Type your birthday in YYYY-MM-DD format"),l.a.createElement("h1",{className:"Result"},"Your Age is ",l.a.createElement("br",null)," ",r," years",l.a.createElement("br",null)," ",c," months ",l.a.createElement("br",null)," ",s," days ",l.a.createElement("br",null)," ",o," hours ",l.a.createElement("br",null)," ",i," minutes"," ",l.a.createElement("br",null)," ",u," seconds"," "),l.a.createElement("div",{class:"footer Result"},l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-md-12 "},l.a.createElement("p",null,"Developed by"," ",l.a.createElement("a",{target:"_blank",href:"https://monsing-se.netlify.app/"},"MONSING")))))))}}]),t}(l.a.Component)),p=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(f,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(37);c.a.render(l.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.b2e2b463.chunk.js.map